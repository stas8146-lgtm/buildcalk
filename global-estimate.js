document.addEventListener("DOMContentLoaded", function() {
    // Додаємо власні автономні стилі, які ідеально працюють на будь-якій сторінці
    if (!document.getElementById("global-estimate-styles")) {
        const style = document.createElement("style");
        style.id = "global-estimate-styles";
        style.innerHTML = `
            .ge-container {
                background: #171717;
                border: 1px solid #262626;
                border-radius: 12px;
                padding: 20px;
                margin: 24px 0;
                box-sizing: border-box;
                color: #e5e5e5;
                font-family: inherit;
                width: 100%;
                clear: both;
            }
            .ge-title {
                font-size: 15px;
                font-weight: bold;
                text-transform: uppercase;
                letter-spacing: 0.05em;
                color: #fbbf24;
                margin-bottom: 6px;
            }
            .ge-desc {
                font-size: 13px;
                color: #a3a3a3;
                margin-bottom: 16px;
            }
            .ge-buttons {
                display: flex;
                flex-wrap: wrap;
                gap: 10px;
                margin-bottom: 0;
            }
            .ge-btn {
                padding: 10px 18px;
                font-size: 14px;
                font-weight: 600;
                border-radius: 8px;
                cursor: pointer;
                border: 1px solid transparent;
                transition: background 0.2s;
                display: inline-flex;
                align-items: center;
                gap: 6px;
            }
            .ge-btn-green {
                background: #16a34a !important;
                color: #ffffff !important;
                border-color: #16a34a !important;
            }
            .ge-btn-green:hover {
                background: #15803d !important;
            }
            .ge-btn-red {
                background: #262626 !important;
                color: #f87171 !important;
                border-color: rgba(248, 113, 113, 0.3) !important;
            }
            .ge-btn-red:hover {
                background: #7f1d1d !important;
                color: #ffffff !important;
            }
            .ge-result-box {
                display: none;
                margin-top: 16px;
                padding-top: 16px;
                border-top: 1px solid #262626;
                font-size: 14px;
            }
        `;
        document.head.appendChild(style);
    }

    const container = document.getElementById("global-estimate-container");
    if (container) {
        container.className = "ge-container";
        container.innerHTML = `
            <div class="ge-title">🌍 Global Estimate (All Calculators)</div>
            <div class="ge-desc">Combine costs from Roof, Facade, Screed etc. into one unified project estimate.</div>
            <div class="ge-buttons">
                <button class="ge-btn ge-btn-green" onclick="addToGlobalEstimate()">➕ Add to Global</button>
                <button class="ge-btn ge-btn-green" onclick="viewGlobalEstimate()">👁 View Global</button>
                <button class="ge-btn ge-btn-red" onclick="clearGlobalEstimate()">🗑 Clear Global</button>
            </div>
            <div class="ge-result-box" id="globalResultBox">
                <div style="font-weight:bold; color:#fbbf24; margin-bottom: 8px;">🌍 Global Estimate Summary</div>
                <div id="globalItemsList" style="color: #d4d4d4; margin-bottom: 12px; display: flex; flex-direction: column; gap: 4px;"></div>
                <hr style="border:0; border-top:1px solid #262626; margin: 10px 0;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 6px; color: #d4d4d4;"><span>📦 Total Materials</span> <span id="globalMatTotal">0 €</span></div>
                <div style="display: flex; justify-content: space-between; margin-bottom: 6px; color: #d4d4d4;"><span>👷 Total Labor</span> <span id="globalWorkTotal">0 €</span></div>
                <div style="display: flex; justify-content: space-between; margin-bottom: 6px; color: #d4d4d4;"><span>🚛 Total Logistics</span> <span id="globalLogTotal">0 €</span></div>
                <hr style="border:0; border-top:1px solid #262626; margin: 10px 0;">
                <div style="font-size:16px; font-weight:bold; color:#fbbf24; display: flex; justify-content: space-between;">
                    <span>💰 Grand Total</span> <span id="globalGrandTotal">0 €</span>
                </div>
            </div>
        `;
    }
});

window.addToGlobalEstimate = function() {
    let objName = document.getElementById("object") ? (document.getElementById("object").value || "Object") : "Object";
    
    function getVal(idList) {
        for (let id of idList) {
            let el = document.getElementById(id);
            if (el) {
                // Витягуємо лише цифри
                let cleanText = el.innerText.replace(/[^\d.-]/g, '');
                let num = Number(cleanText);
                if (!isNaN(num) && num > 0) return num;
            }
        }
        return 0; 
    }

    // МАКСИМАЛЬНО РОЗШИРЕНИЙ СПИСОК МОЖЛИВИХ ID
    let materials = getVal(["materialsTotal", "materials-cost", "matTotal", "materials", "totalMaterials", "materialPrice", "materialsPrice"]);
    let labor = getVal(["laborTotal", "labor-cost", "workTotal", "labor", "totalLabor", "workPrice", "laborPrice", "totalWork"]);
    let logistics = getVal(["deliveryTotal", "logisticsTotal", "logistics-cost", "logistics", "totalLogistics", "deliveryPrice", "craneTotal"]);
    
    // Шукаємо загальну суму за всіма можливими назвами
    let total = getVal(["clientTotal", "grandTotal", "total-client", "totalPrice", "totalProjectPrice", "projectPrice", "finalTotal", "total"]);

    // Якщо раптом загальної суми немає, але є складові - додаємо їх
    if (total === 0 && (materials > 0 || labor > 0)) {
        total = materials + labor + logistics;
    }

    // ЗАХИСТ ВІД НУЛІВ: Якщо сума все ще 0, зупиняємо процес і повідомляємо про це
    if (total === 0) {
        alert("⚠️ Помилка: Скрипт не зміг знайти загальну суму на цій сторінці!\n\nПеревірте в HTML-коді цього калькулятора, чи має поле з фінальною сумою один з цих ID: id='clientTotal' або id='grandTotal'.");
        return; // Зупиняємо код, щоб не записувати нуль у Global
    }

    let globalData = JSON.parse(localStorage.getItem("buildCalcGlobal")) || { materials: 0, labor: 0, logistics: 0, total: 0, items: [] };
    
    globalData.materials += materials;
    globalData.labor += labor;
    globalData.logistics += logistics;
    globalData.total += total;
    
    let calcTitle = document.title.split('-')[0].trim() || "Calc";
    globalData.items.push({ name: `${calcTitle} (${objName})`, total: total });

    localStorage.setItem("buildCalcGlobal", JSON.stringify(globalData));
    
    alert(`✅ Успішно додано до Global Estimate!\nКалькулятор: ${calcTitle}\nОб'єкт: ${objName}\nСума: ${total.toFixed(2)} €`);
    
    // Оновлюємо вікно, якщо функція існує
    if (typeof window.viewGlobalEstimate === "function") {
        window.viewGlobalEstimate();
    }
};

// Оновлена логіка відображення кошторису
window.viewGlobalEstimate = function() {
    let globalData = JSON.parse(localStorage.getItem("buildCalcGlobal"));
    let box = document.getElementById("globalResultBox");
    if (!box) return;
    
    // Захист від битих даних: якщо даних немає, примусово виводимо нулі
    if (!globalData || !globalData.items || globalData.items.length === 0) {
        box.style.display = "block";
        let listEl = document.getElementById("globalItemsList");
        if (listEl) listEl.innerHTML = "Global estimate is empty.";
        if (document.getElementById("globalMatTotal")) document.getElementById("globalMatTotal").innerText = "0.00 €";
        if (document.getElementById("globalWorkTotal")) document.getElementById("globalWorkTotal").innerText = "0.00 €";
        if (document.getElementById("globalLogTotal")) document.getElementById("globalLogTotal").innerText = "0.00 €";
        if (document.getElementById("globalGrandTotal")) document.getElementById("globalGrandTotal").innerText = "0.00 €";
        return;
    }
    
    box.style.display = "block";
    let itemsHtml = "";
    globalData.items.forEach(i => {
        itemsHtml += `<div style="display: flex; justify-content: space-between; margin-bottom: 4px;"><span>• ${i.name}</span> <span style="color:#fbbf24; font-weight:bold;">${i.total.toFixed(2)} €</span></div>`;
    });
    
    if (document.getElementById("globalItemsList")) document.getElementById("globalItemsList").innerHTML = itemsHtml;
    if (document.getElementById("globalMatTotal")) document.getElementById("globalMatTotal").innerText = globalData.materials.toFixed(2) + " €";
    if (document.getElementById("globalWorkTotal")) document.getElementById("globalWorkTotal").innerText = globalData.labor.toFixed(2) + " €";
    if (document.getElementById("globalLogTotal")) document.getElementById("globalLogTotal").innerText = globalData.logistics.toFixed(2) + " €";
    if (document.getElementById("globalGrandTotal")) document.getElementById("globalGrandTotal").innerText = globalData.total.toFixed(2) + " €";
};

// Жорстка логіка очищення
window.clearGlobalEstimate = function() {
    if (confirm("Are you sure you want to clear the global estimate?")) {
        // 1. Видаляємо дані з пам'яті
        localStorage.removeItem("buildCalcGlobal");
        
        // 2. ПРИМУСОВО обнуляємо текст на екрані
        let listEl = document.getElementById("globalItemsList");
        if (listEl) listEl.innerHTML = "Global estimate is empty.";
        if (document.getElementById("globalMatTotal")) document.getElementById("globalMatTotal").innerText = "0.00 €";
        if (document.getElementById("globalWorkTotal")) document.getElementById("globalWorkTotal").innerText = "0.00 €";
        if (document.getElementById("globalLogTotal")) document.getElementById("globalLogTotal").innerText = "0.00 €";
        if (document.getElementById("globalGrandTotal")) document.getElementById("globalGrandTotal").innerText = "0.00 €";
        
        alert("✅ Global estimate cleared.");
    }
};
