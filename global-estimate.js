document.addEventListener("DOMContentLoaded", function() {
    // Автоматично додаємо стилі кнопок на всі сторінки
    if (!document.getElementById("global-estimate-styles")) {
        const style = document.createElement("style");
        style.id = "global-estimate-styles";
        style.innerHTML = `
            .action-btn.green {
                background: #28a745 !important;
                border-color: #28a745 !important;
                color: white !important;
            }
            .action-btn.green:hover {
                background: #218838 !important;
            }
            .action-btn.red-border {
                border-color: #dc3545 !important;
                color: #dc3545 !important;
                background: var(--dark-light) !important;
            }
            .action-btn.red-border:hover {
                background: #dc3545 !important;
                color: white !important;
            }
        `;
        document.head.appendChild(style);
    }

    const container = document.getElementById("global-estimate-container");
    if (container) {
        container.innerHTML = `
            <h3 id="hGlobal" style="clear: both; width: 100%;">🌍 Global Estimate (All Calculators)</h3>
            <div class="subtitle" id="globalDesc" style="margin-bottom: 10px;">Combine costs from Roof, Facade, Screed etc. into one unified project estimate.</div>
            <div class="buttons-container">
                <button class="action-btn green" onclick="addToGlobalEstimate()" id="btnAddGlobal">➕ Add to Global</button>
                <button class="action-btn green" onclick="viewGlobalEstimate()" id="btnViewGlobal">👁 View Global</button>
                <button class="action-btn red-border" onclick="clearGlobalEstimate()" id="btnClearGlobal">🗑 Clear Global</button>
            </div>
            <div class="result-box" id="globalResultBox" style="display:none; width: 100%; box-sizing: border-box; clear: both;">
                <div style="font-weight:bold; color:var(--primary); margin-bottom: 8px; font-size: 16px;">🌍 <span id="txtGlobalTitle">Global Estimate Summary</span></div>
                <div id="globalItemsList" style="font-size: 14px; color: var(--text-light); margin-bottom: 10px;"></div>
                <hr>
                <div><span>📦 <span id="txtGlobalMat">Total Materials</span></span> <span id="globalMatTotal">0 €</span></div>
                <div><span>👷 <span id="txtGlobalWork">Total Labor</span></span> <span id="globalWorkTotal">0 €</span></div>
                <div><span>🚛 <span id="txtGlobalLog">Total Logistics</span></span> <span id="globalLogTotal">0 €</span></div>
                <hr>
                <div style="font-size:18px; font-weight:bold; color:var(--primary); display: flex; justify-content: space-between;">
                    <span>💰 <span id="txtGlobalGrand">Grand Total</span></span> <span id="globalGrandTotal">0 €</span>
                </div>
            </div>
        `;
    }
});

// Логіка роботи глобального кошторису
window.addToGlobalEstimate = function() {
    let objName = document.getElementById("object") ? (document.getElementById("object").value || "Object") : "Object";
    
    function getVal(id) {
        let el = document.getElementById(id);
        if (!el) return 0;
        return Number(el.innerText.replace(' €','').replace(/ /g,'')) || 0;
    }

    let materials = getVal("materialsTotal");
    let labor = getVal("laborTotal");
    let logistics = getVal("deliveryTotal");
    let total = getVal("clientTotal");

    let globalData = JSON.parse(localStorage.getItem("buildCalcGlobal")) || { materials: 0, labor: 0, logistics: 0, total: 0, items: [] };
    
    globalData.materials += materials;
    globalData.labor += labor;
    globalData.logistics += logistics;
    globalData.total += total;
    globalData.items.push({ name: objName, total: total });

    localStorage.setItem("buildCalcGlobal", JSON.stringify(globalData));
    alert("Added to Global Estimate successfully!");
    window.viewGlobalEstimate();
};

window.viewGlobalEstimate = function() {
    let globalData = JSON.parse(localStorage.getItem("buildCalcGlobal"));
    let box = document.getElementById("globalResultBox");
    if (!box) return;
    
    if (!globalData || globalData.items.length === 0) {
        box.style.display = "block";
        let listEl = document.getElementById("globalItemsList");
        if (listEl) listEl.innerHTML = "Global estimate is empty.";
        if (document.getElementById("globalMatTotal")) document.getElementById("globalMatTotal").innerText = "0 €";
        if (document.getElementById("globalWorkTotal")) document.getElementById("globalWorkTotal").innerText = "0 €";
        if (document.getElementById("globalLogTotal")) document.getElementById("globalLogTotal").innerText = "0 €";
        if (document.getElementById("globalGrandTotal")) document.getElementById("globalGrandTotal").innerText = "0 €";
        return;
    }
    
    box.style.display = "block";
    let itemsHtml = "";
    globalData.items.forEach(i => {
        itemsHtml += `<div style="display: flex; justify-content: space-between; margin-bottom: 4px;"><span>• ${i.name}</span> <span style="color:var(--primary); font-weight:bold;">${i.total.toFixed(2)} €</span></div>`;
    });
    
    if (document.getElementById("globalItemsList")) document.getElementById("globalItemsList").innerHTML = itemsHtml;
    if (document.getElementById("globalMatTotal")) document.getElementById("globalMatTotal").innerText = globalData.materials.toFixed(2) + " €";
    if (document.getElementById("globalWorkTotal")) document.getElementById("globalWorkTotal").innerText = globalData.labor.toFixed(2) + " €";
    if (document.getElementById("globalLogTotal")) document.getElementById("globalLogTotal").innerText = globalData.logistics.toFixed(2) + " €";
    if (document.getElementById("globalGrandTotal")) document.getElementById("globalGrandTotal").innerText = globalData.total.toFixed(2) + " €";
};

window.clearGlobalEstimate = function() {
    if (confirm("Clear global estimate?")) {
        localStorage.removeItem("buildCalcGlobal");
        window.viewGlobalEstimate();
        alert("Global estimate cleared.");
    }
};
