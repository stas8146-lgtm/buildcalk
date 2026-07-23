// === 1. GOOGLE ANALYTICS ===
const gaScript = document.createElement('script');
gaScript.async = true;
gaScript.src = "https://www.googletagmanager.com/gtag/js?id=G-RPRB8JPVM2";
document.head.appendChild(gaScript);

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-RPRB8JPVM2');

// === 2. ГОЛОВНЕ МЕНЮ ===
const menuHTML = `
    <style>
        .global-nav { 
            display: flex; 
            flex-wrap: wrap; 
            justify-content: center; 
            gap: 10px; 
            background: #1E1E1E; 
            padding: 10px; 
            border-bottom: 2px solid #FFCC00; 
            margin-bottom: 20px; 
            border-radius: 0 0 12px 12px;
        }
        .global-nav a { 
            color: #F5F5F5; 
            text-decoration: none; 
            padding: 8px 12px; 
            border-radius: 6px; 
            font-weight: bold; 
            font-size: 0.9rem; 
            transition: 0.2s; 
            border: 1px solid #333; 
            background: #222;
        }
        .global-nav a:hover { 
            background: rgba(255, 204, 0, 0.2); 
            border-color: #FFCC00; 
            color: #FFCC00; 
        }
    </style>
    <div class="global-nav" data-html2canvas-ignore="true">
        <a href="../Mixer/index.html">🎨 Mixer</a>
        <a href="../Gipsokarton/index.html">🧱 Gipsokarton</a>
        <a href="../Omietky/index.html">🏗 Omietky</a>
        <a href="../Roof/index.html">🏠 Roof</a>
        <a href="../Styazhka/index.html">📏 Styazhka</a>
        <a href="../ProWall & Floor/index.html">🟩 ProWall & Floor</a>
        <a href="../Foundation/index.html">🪨 Foundation</a>
        <a href="../Electric/index.html"> Electric</a>
   <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Professional Electric & Lighting Calculator | BUILDcalc Suite</title>
    <meta name="description" content="Professional electrical calculation online. Cable cross-section by power, circuit breakers, wiring, conduits, sockets, and estimate costs.">
    
    <!-- ================= GOOGLE ANALYTICS ================= -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-RPRB8JPVM2"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-RPRB8JPVM2');
    </script>

    <!-- Бібліотека для генерації PDF -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"></script>

    <!-- ================= СТИЛІ (ЖОВТО-ЧОРНА ТЕМА) ================= -->
    <style>
        :root {
            --primary: #FFC107;
            --primary-hover: #e0a800;
            --dark: #212529;
            --dark-light: #343a40;
            --text-light: #ffffff;
            --text-muted: #a0a0a0;
        }

        body {
            background-color: var(--dark);
            color: var(--text-light);
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 15px;
        }

        .header {
            text-align: center;
            padding: 10px 0;
            border-bottom: 1px solid var(--dark-light);
        }

        .logo { font-size: 24px; font-weight: bold; color: var(--text-light); }
        .logo span { color: var(--primary); }
        .subtitle { color: var(--text-muted); font-size: 14px; margin-top: 5px; }

        .lang-select-wrapper select {
            background: var(--dark-light); color: white; border: 1px solid var(--primary);
            padding: 6px 12px; margin-top: 10px; border-radius: 5px; cursor: pointer; font-weight: bold;
        }

        .version-switcher { display: flex; background: var(--dark-light); padding: 3px; border-radius: 5px; margin-bottom: 20px; }
        .tab-btn { flex: 1; background: none; border: none; color: white; padding: 8px; cursor: pointer; border-radius: 4px; }
        .tab-btn.active { background: var(--primary); color: var(--dark); font-weight: bold; }
        .badge { background: red; color: white; font-size: 10px; padding: 2px 5px; border-radius: 3px; margin-left: 5px; }

        h3 { border-left: 4px solid var(--primary); padding-left: 10px; margin-top: 25px; color: var(--text-light); }

        .grid-inputs { display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 10px; margin-bottom: 15px; }
        .input-group { display: flex; flex-direction: column; }
        .input-group label { font-size: 12px; color: var(--text-muted); margin-bottom: 5px; }
        .input-group input, .input-group select {
            background: var(--dark-light); color: white; border: 1px solid #555;
            padding: 10px; border-radius: 5px; font-size: 16px;
        }
        .input-group input:focus, .input-group select:focus { border-color: var(--primary); outline: none; }

        .result-box { background: var(--dark-light); padding: 15px; border-radius: 8px; border: 1px solid var(--primary); margin: 15px 0; }
        .result-box div { display: flex; justify-content: space-between; margin-bottom: 8px; font-size: 15px; }
        .result-box div span { font-weight: bold; color: var(--primary); }

        hr { border: 0; border-top: 1px solid #555; margin: 10px 0; }

        .buttons-container { display: flex; gap: 10px; margin: 20px 0; flex-wrap: wrap; width: 100%; clear: both; }
        .action-btn {
            flex: 1; min-width: 100px; background: var(--dark-light); color: white; border: 1px solid var(--primary);
            padding: 12px; border-radius: 5px; cursor: pointer; font-weight: bold;
        }
        .action-btn:hover { background: var(--primary); color: var(--dark); }

        .history-box { background: #1a1d20; padding: 15px; border-radius: 5px; margin-top: 10px; border: 1px solid #444; width: 100%; box-sizing: border-box; clear: both; }

        .buy-pro-banner {
            background: linear-gradient(135deg, #343a40, #212529);
            border: 2px dashed var(--primary); padding: 20px; text-align: center;
            border-radius: 8px; margin-top: 30px; width: 100%; box-sizing: border-box; clear: both;
        }
        .buy-btn {
            background: var(--primary); color: var(--dark); border: none;
            padding: 10px 20px; font-weight: bold; border-radius: 5px; cursor: pointer; margin-top: 10px;
        }
        .buy-btn:hover { background: var(--primary-hover); }
    </style>
</head>
<body>
    <div class="header">
        <div class="logo">⚡ <span>BUILD</span>calc ELEC PRO</div>
        <div class="subtitle" id="subtitle">Professional Electrical & Lighting Calculator</div>
        
        <div id="global-nav-container"></div>

        <div class="lang-select-wrapper">
            <select id="language" onchange="changeLanguage()">
                <option value="en" selected>🇬🇧 English</option>
                <option value="ua">🇺🇦 Українська</option>
                <option value="sk">🇸🇰 Slovenčina</option>
            </select>
        </div>
    </div>
    
    <div class="version-switcher" style="margin-top: 15px;">
        <button class="tab-btn active" id="tabFree" onclick="setVersion('free')">FREE</button>
        <button class="tab-btn" id="tabPro" onclick="setVersion('pro')">PRO <span class="badge">Business</span></button>
    </div>

    <div id="calcForm">
        <h3 id="objectTitle">🏠 Object Data</h3>
        <div class="grid-inputs">
            <div class="input-group">
                <label id="objectLabel">Object Name</label>
                <input id="object" type="text" placeholder="Apartment 45">
            </div>
            <div class="input-group">
                <label id="addressLabel">Address</label>
                <input id="address" type="text" placeholder="Bratislava">
            </div>
            <div class="input-group">
                <label id="clientLabel">Client</label>
                <input id="client" type="text">
            </div>
        </div>

        <h3 id="hRoomSpecs">📐 Room & Load Specs</h3>
        <div class="grid-inputs">
            <div class="input-group">
                <label id="lblArea">Floor Area m²</label>
                <input id="roomArea" type="number" value="60">
            </div>
            <div class="input-group">
                <label id="lblPower">Total Power (kW)</label>
                <input id="totalPower" type="number" value="10">
            </div>
            <div class="input-group">
                <label id="lblVoltage">Voltage (V)</label>
                <select id="voltageType">
                    <option value="230" selected>230V (Single-phase)</option>
                    <option value="400">400V (Three-phase)</option>
                </select>
            </div>
            <div class="input-group">
                <label id="lblCableMat">Conductor Material</label>
                <select id="cableMaterial">
                    <option value="copper" selected>Copper (Cu)</option>
                    <option value="aluminum">Aluminum (Al)</option>
                </select>
            </div>
        </div>

        <h3 id="hPoints">🔌 Points & Hardware</h3>
        <div class="grid-inputs">
            <div class="input-group">
                <label id="lblSockets">Sockets (pcs)</label>
                <input id="socketsCount" type="number" value="25">
            </div>
            <div class="input-group">
                <label id="lblSwitches">Switches (pcs)</label>
                <input id="switchesCount" type="number" value="10">
            </div>
            <div class="input-group">
                <label id="lblLights">Light Points (pcs)</label>
                <input id="lightsCount" type="number" value="12">
            </div>
            <div class="input-group">
                <label id="lblBreakers">Circuit Breakers</label>
                <input id="breakersCount" type="number" value="8">
            </div>
        </div>

        <h3 id="hWiring">🧵 Wiring & Conduits</h3>
        <div class="grid-inputs">
            <div class="input-group">
                <label id="lblCableLen">Cable Length (m)</label>
                <input id="cableLength" type="number" value="250">
            </div>
            <div class="input-group">
                <label id="lblConduitLen">Corrugated Pipe (m)</label>
                <input id="conduitLength" type="number" value="200">
            </div>
            <div class="input-group">
                <label id="lblBoxes">Switch Boxes (pcs)</label>
                <input id="boxesCount" type="number" value="45">
            </div>
            <div class="input-group">
                <label id="lblShields">Distribution Panel</label>
                <select id="shieldType">
                    <option value="12" selected>12 Modules</option>
                    <option value="24">24 Modules</option>
                    <option value="36">36 Modules</option>
                </select>
            </div>
        </div>

        <h3 id="hTechResult">📊 Technical Recommendations</h3>
        <div class="result-box">
            <div><span id="txtRecAmperage">Current (Amperage)</span> <span id="amperageResult">0 A</span></div>
            <div><span id="txtRecCrossSection">Recommended Wire Section</span> <span id="crossSectionResult">2.5 mm²</span></div>
            <div><span id="txtRecBreaker">Main Circuit Breaker</span> <span id="mainBreakerResult">40 A</span></div>
            <div><span id="txtRecCableTotal">Total Cable Est.</span> <span id="cableTotalRes">0 m</span></div>
        </div>

        <h3 id="hMaterialPrices">💶 Material Unit Prices</h3>
        <div class="grid-inputs">
            <div class="input-group">
                <label id="lblCablePrice">Cable Price €/m</label>
                <input id="cablePrice" type="number" value="1.2">
            </div>
            <div class="input-group">
                <label id="lblSocketPrice">Socket/Switch €/pcs</label>
                <input id="socketPrice" type="number" value="8.0">
            </div>
            <div class="input-group">
                <label id="lblBreakerPrice">Breaker €/pcs</label>
                <input id="breakerPrice" type="number" value="6.5">
            </div>
            <div class="input-group">
                <label id="lblPanelPrice">Panel & Acc. €</label>
                <input id="panelPrice" type="number" value="75">
            </div>
        </div>

        <h3 id="hLaborPrices">👷 Labor & Logistics Cost</h3>
        <div class="grid-inputs">
            <div class="input-group">
                <label id="lblPointLabor">Point Labor €/pcs</label>
                <input id="pointLabor" type="number" value="12">
            </div>
            <div class="input-group">
                <label id="lblCableLabor">Cable Laying €/m</label>
                <input id="cableLabor" type="number" value="2.5">
            </div>
            <div class="input-group">
                <label id="lblProfitPrice">Markup/Profit €</label>
                <input id="profitPrice" type="number" value="150">
            </div>
            <div class="input-group">
                <label id="lblDeliveryPrice">Logistics & Consumables €</label>
                <input id="deliveryPrice" type="number" value="60">
            </div>
        </div>

        <h3 id="hCompany">🏢 Company Info</h3>
        <div class="grid-inputs">
            <div class="input-group">
                <label id="lblCompName">Company Name</label>
                <input id="companyName" placeholder="ElectroPro SK">
            </div>
            <div class="input-group">
                <label id="lblCompPhone">Phone</label>
                <input id="companyPhone" placeholder="+421...">
            </div>
            <div class="input-group">
                <label id="lblCompEmail">Email</label>
                <input id="companyEmail" placeholder="info@...">
            </div>
        </div>
    </div>

    <h3 id="hFinal" style="clear: both; width: 100%;">📊 Financial Summary</h3>
    <div class="result-box" id="result" style="width: 100%; box-sizing: border-box; clear: both;">
        <div><span>🧵 <span id="txtFCable">Cable & Conduits</span></span> <span id="materialCableCost">0 €</span></div>
        <div><span>🔌 <span id="txtFPoints">Sockets, Switches & Panel</span></span> <span id="materialPointsCost">0 €</span></div>
        <div><span>🛡 <span id="txtFBreakers">Breakers & Protection</span></span> <span id="materialBreakersCost">0 €</span></div>
        <hr>
        <div><span>📦 <span id="txtFMat">Materials Total</span></span> <span id="materialsTotal">0 €</span></div>
        <div><span>👷 <span id="txtFWork">Labor Cost</span></span> <span id="salaryTotal">0 €</span></div>
        <div><span>📈 <span id="txtFProf">Markup/Profit</span></span> <span id="profitTotal">0 €</span></div>
        <div><span>🚛 <span id="txtFLog">Logistics & Other</span></span> <span id="deliveryTotal">0 €</span></div>
        <hr>
        <div style="font-size:22px; font-weight:bold; color:var(--primary); display: flex; justify-content: space-between; flex-wrap: wrap; gap: 5px; width: 100%;">
            <span>💰 <span id="txtClientPrice">Total Client Price</span></span> <span id="clientTotal">0 €</span>
        </div>
    </div>

    <div class="buttons-container">
        <button class="action-btn" onclick="calculateAll()" id="btnCalc">💰 Calculate</button>
        <button class="action-btn" onclick="copyEstimate()" id="btnCopy">📋 Copy</button>
        <button class="action-btn" onclick="generatePDF()" id="btnPdf">📄 PDF Invoice</button>
    </div>

    <h3 id="hProjects" style="clear: both; width: 100%;">💾 Project Vault</h3>
    <div class="buttons-container">
        <button class="action-btn" onclick="saveProject()" id="btnSave">💾 Save</button>
        <button class="action-btn" onclick="showHistory()" id="btnHistory">📂 History</button>
        <button class="action-btn" onclick="clearHistory()" id="btnClear">🗑 Clear</button>
    </div>

    <div id="historyBox" class="history-box" style="display:none;"></div>

    <div class="buy-pro-banner">
        <h3 style="border:none; padding:0; margin:0;" id="proTitle">🔓 BUILDcalc PRO</h3>
        <p id="proDesc">Full professional estimate, PDF export, History log, Company profiles, Unlimited objects, 3 languages</p>
        <button class="buy-btn" id="btnBuyPro">Check Pricing</button>
    </div>

<script src="../nav.js"></script>

<script>
document.getElementById('calcForm').addEventListener('input', calculateAll);

function calculateElectrical() {
    let powerKW = Number(document.getElementById("totalPower").value) || 10;
    let voltage = Number(document.getElementById("voltageType").value) || 230;
    let isCopper = document.getElementById("cableMaterial").value === "copper";
    let cableLen = Number(document.getElementById("cableLength").value) || 250;

    let current = 0;
    if (voltage === 230) {
        current = (powerKW * 1000) / (230 * 0.95);
    } else {
        current = (powerKW * 1000) / (1.732 * 400 * 0.95);
    }

    let ampPerMm2 = isCopper ? 8 : 5.5;
    let rawSection = current / ampPerMm2;
    
    let standardSections = [1.5, 2.5, 4.0, 6.0, 10.0, 16.0, 25.0];
    let recSection = 2.5;
    for (let s of standardSections) {
        if (s >= rawSection) {
            recSection = s;
            break;
        }
        recSection = s;
    }

    let standardBreakers = [16, 20, 25, 32, 40, 50, 63, 80, 100];
    let mainBreaker = 40;
    for (let b of standardBreakers) {
        if (b >= current * 1.15) {
            mainBreaker = b;
            break;
        }
        mainBreaker = b;
    }

    document.getElementById("amperageResult").innerHTML = current.toFixed(1) + " A";
    document.getElementById("crossSectionResult").innerHTML = recSection.toFixed(1) + " mm²";
    document.getElementById("mainBreakerResult").innerHTML = mainBreaker + " A";
    document.getElementById("cableTotalRes").innerHTML = cableLen + " m";
}

function calculateEstimate() {
    let cableLen = Number(document.getElementById("cableLength").value) || 250;
    let conduitLen = Number(document.getElementById("conduitLength").value) || 200;
    let sockets = Number(document.getElementById("socketsCount").value) || 25;
    let switches = Number(document.getElementById("switchesCount").value) || 10;
    let lights = Number(document.getElementById("lightsCount").value) || 12;
    let breakers = Number(document.getElementById("breakersCount").value) || 8;
    let boxes = Number(document.getElementById("boxesCount").value) || 45;

    let cablePrice = Number(document.getElementById("cablePrice").value) || 1.2;
    let socketPrice = Number(document.getElementById("socketPrice").value) || 8.0;
    let breakerPrice = Number(document.getElementById("breakerPrice").value) || 6.5;
    let panelPrice = Number(document.getElementById("panelPrice").value) || 75;

    let pointLabor = Number(document.getElementById("pointLabor").value) || 12;
    let cableLabor = Number(document.getElementById("cableLabor").value) || 2.5;
    let profit = Number(document.getElementById("profitPrice").value) || 150;
    let delivery = Number(document.getElementById("deliveryPrice").value) || 60;

    let materialCableCost = (cableLen * cablePrice) + (conduitLen * 0.45) + (boxes * 0.8);
    let totalPointsCount = sockets + switches + lights;
    let materialPointsCost = (totalPointsCount * socketPrice) + panelPrice;
    let materialBreakersCost = (breakers * breakerPrice);

    let materialsTotal = materialCableCost + materialPointsCost + materialBreakersCost;
    let totalPointsLabor = totalPointsCount * pointLabor;
    let totalCableLabor = cableLen * cableLabor;
    let salaryTotal = totalPointsLabor + totalCableLabor;
    
    let clientTotal = materialsTotal + salaryTotal + profit + delivery;

    document.getElementById("materialCableCost").innerHTML = materialCableCost.toFixed(2) + " €";
    document.getElementById("materialPointsCost").innerHTML = materialPointsCost.toFixed(2) + " €";
    document.getElementById("materialBreakersCost").innerHTML = materialBreakersCost.toFixed(2) + " €";
    document.getElementById("materialsTotal").innerHTML = materialsTotal.toFixed(2) + " €";
    document.getElementById("salaryTotal").innerHTML = salaryTotal.toFixed(2) + " €";
    document.getElementById("profitTotal").innerHTML = profit.toFixed(2) + " €";
    document.getElementById("deliveryTotal").innerHTML = delivery.toFixed(2) + " €";
    document.getElementById("clientTotal").innerHTML = clientTotal.toFixed(2) + " €";
}

function calculateAll() {
    calculateElectrical();
    calculateEstimate();
}

function generatePDF() {
    let clientName = document.getElementById("client").value || "Client";
    let objName = document.getElementById("object").value || "Object";
    let compName = document.getElementById("companyName").value || "Contractor";
    let compPhone = document.getElementById("companyPhone").value || "";
    
    let printHtml = `
    <div style="padding: 30px; font-family: Arial, sans-serif; color: #333; background: #fff;">
        <div style="display: flex; justify-content: space-between; border-bottom: 2px solid #FFC107; padding-bottom: 10px;">
            <div>
                <h1 style="margin: 0; color: #212529;">Electrical Estimate</h1>
                <p style="margin: 5px 0 0 0; color: #777;">Date: ${new Date().toLocaleDateString()}</p>
            </div>
            <div style="text-align: right;">
                <h3 style="margin: 0;">${compName}</h3>
                <p style="margin: 5px 0 0 0;">${compPhone}</p>
            </div>
        </div>
        
        <div style="margin-top: 20px; display: flex; justify-content: space-between;">
            <div>
                <strong>Client:</strong> ${clientName}<br>
                <strong>Object:</strong> ${objName}<br>
                <strong>Address:</strong> ${document.getElementById("address").value || "-"}
            </div>
            <div>
                <strong>Electrical Specs:</strong><br>
                Power: ${document.getElementById("totalPower").value} kW<br>
                Voltage: ${document.getElementById("voltageType").value} V
            </div>
        </div>

        <h3 style="margin-top: 30px; border-bottom: 1px solid #ddd; padding-bottom: 5px;">Materials Specification</h3>
        <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
            <tr style="background: #f8f9fa;">
                <th style="padding: 10px; border: 1px solid #ddd; text-align: left;">Item</th>
                <th style="padding: 10px; border: 1px solid #ddd; text-align: right;">Amount</th>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">Cable, Conduits & Boxes</td>
                <td style="padding: 10px; border: 1px solid #ddd; text-align: right;">${document.getElementById("materialCableCost").innerText}</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">Sockets, Switches & Distribution Panel</td>
                <td style="padding: 10px; border: 1px solid #ddd; text-align: right;">${document.getElementById("materialPointsCost").innerText}</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">Circuit Breakers & Protection</td>
                <td style="padding: 10px; border: 1px solid #ddd; text-align: right;">${document.getElementById("materialBreakersCost").innerText}</td>
            </tr>
        </table>

        <h3 style="margin-top: 30px; border-bottom: 1px solid #ddd; padding-bottom: 5px;">Labor & Services</h3>
        <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
             <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">Installation Works & Wiring</td>
                <td style="padding: 10px; border: 1px solid #ddd; text-align: right;">${document.getElementById("salaryTotal").innerText}</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">Logistics & Consumables</td>
                <td style="padding: 10px; border: 1px solid #ddd; text-align: right;">${document.getElementById("deliveryTotal").innerText}</td>
            </tr>
        </table>

        <div style="margin-top: 30px; text-align: right; font-size: 20px;">
            <strong>Total Due: <span style="color: #d32f2f;">${document.getElementById("clientTotal").innerText}</span></strong>
        </div>
    </div>
    `;

    let opt = {
        margin:       10,
        filename:     `Electrical_Estimate_${objName}.pdf`,
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    let tempDiv = document.createElement('div');
    tempDiv.innerHTML = printHtml;
    html2pdf().set(opt).from(tempDiv).save();
}

function saveProject() {
    let project = {
        date: new Date().toLocaleString(),
        object: document.getElementById("object").value || "Unnamed",
        client: document.getElementById("client").value || "-",
        price: document.getElementById("clientTotal").innerText
    };
    let list = JSON.parse(localStorage.getItem("electricProjects")) || [];
    list.unshift(project);
    localStorage.setItem("electricProjects", JSON.stringify(list));
    alert("Project saved to history!");
}

function showHistory() {
    let box = document.getElementById("historyBox");
    box.style.display = box.style.display === "none" ? "block" : "none";
    let list = JSON.parse(localStorage.getItem("electricProjects")) || [];
    if (list.length == 0) {
        box.innerHTML = "<p style='color:var(--text-muted);'>History is empty</p>";
        return;
    }
    let html = "";
    list.forEach(p => {
        html += `<div style="margin-bottom:10px;"><b>${p.object}</b><br>Client: ${p.client}<br>Total: <span style="color:var(--primary)">${p.price}</span><br><small style="color:#777;">${p.date}</small><hr style="border-top:1px solid #444; margin:5px 0;"></div>`;
    });
    box.innerHTML = html;
}

function clearHistory() {
    if(confirm("Are you sure you want to clear history?")) {
        localStorage.removeItem("electricProjects");
        showHistory();
    }
}

function copyEstimate() {
    let res = document.getElementById("clientTotal").innerText;
    navigator.clipboard.writeText(`Electrical Estimate for ${document.getElementById("object").value}:\nTotal Price: ${res}`);
    alert("Summary copied to clipboard!");
}

const langData = {
    en: {
        subtitle: "Professional Electrical & Lighting Calculator",
        objectTitle: "🏠 Object Data", objectLabel: "Object Name", addressLabel: "Address", clientLabel: "Client",
        hRoomSpecs: "📐 Room & Load Specs", lblArea: "Floor Area m²", lblPower: "Total Power (kW)", lblVoltage: "Voltage (V)", lblCableMat: "Conductor Material",
        hPoints: "🔌 Points & Hardware", lblSockets: "Sockets (pcs)", lblSwitches: "Switches (pcs)", lblLights: "Light Points (pcs)", lblBreakers: "Circuit Breakers",
        hWiring: "🧵 Wiring & Conduits", lblCableLen: "Cable Length (m)", lblConduitLen: "Corrugated Pipe (m)", lblBoxes: "Switch Boxes (pcs)", lblShields: "Distribution Panel",
        hTechResult: "📊 Technical Recommendations", hMaterialPrices: "💶 Material Unit Prices",
        lblCablePrice: "Cable Price €/m", lblSocketPrice: "Socket/Switch €/pcs", lblBreakerPrice: "Breaker €/pcs", lblPanelPrice: "Panel & Acc. €",
        hLaborPrices: "👷 Labor & Logistics Cost", lblPointLabor: "Point Labor €/pcs", lblCableLabor: "Cable Laying €/m", lblProfitPrice: "Markup/Profit €", lblDeliveryPrice: "Logistics & Consumables €",
        hCompany: "🏢 Company Info", lblCompName: "Company Name", lblCompPhone: "Phone", lblCompEmail: "Email",
        hFinal: "📊 Financial Summary", txtClientPrice: "Total Client Price", btnCalc: "💰 Calculate", btnCopy: "📋 Copy", btnPdf: "📄 PDF Invoice",
        hProjects: "💾 Project Vault", btnSave: "💾 Save", btnHistory: "📂 History", btnClear: "🗑 Clear",
        proTitle: "🔓 BUILDcalc PRO", proDesc: "Full professional estimate, PDF export, History log, Company profiles, Unlimited objects, 3 languages", btnBuyPro: "Check Pricing",
        txtRecAmperage: "Current (Amperage)", txtRecCrossSection: "Recommended Wire Section", txtRecBreaker: "Main Circuit Breaker", txtRecCableTotal: "Total Cable Est.",
        txtFCable: "Cable & Conduits", txtFPoints: "Sockets, Switches & Panel", txtFBreakers: "Breakers & Protection", txtFMat: "Materials Total", txtFWork: "Labor Cost", txtFProf: "Markup/Profit", txtFLog: "Logistics & Other"
    },
    ua: {
        subtitle: "Професійний калькулятор електрики та освітлення",
        objectTitle: "🏠 Дані об'єкта", objectLabel: "Назва об'єкта", addressLabel: "Адреса", clientLabel: "Клієнт",
        hRoomSpecs: "📐 Параметри приміщення та навантаження", lblArea: "Площа підлоги м²", lblPower: "Потужність (кВт)", lblVoltage: "Напруга (В)", lblCableMat: "Матеріал провідника",
        hPoints: "🔌 Точки та обладнання", lblSockets: "Розетки (шт)", lblSwitches: "Вимикачі (шт)", lblLights: "Світлові точки (шт)", lblBreakers: "Автоматичні вимикачі",
        hWiring: "🧵 Кабелі та труби", lblCableLen: "Довжина кабелю (м)", lblConduitLen: "Гофротруба (м)", lblBoxes: "Підрозетники (шт)", lblShields: "Розподільчий щит",
        hTechResult: "📊 Технічні рекомендації", hMaterialPrices: "💶 Ціни матеріалів",
        lblCablePrice: "Ціна кабелю €/м", lblSocketPrice: "Розетка/вимикач €/шт", lblBreakerPrice: "Автомат €/шт", lblPanelPrice: "Щит та аксесуари €",
        hLaborPrices: "👷 Вартість робіт та логістики", lblPointLabor: "Робота за точку €/шт", lblCableLabor: "Прокладка кабелю €/м", lblProfitPrice: "Прибуток €", lblDeliveryPrice: "Логістика та витратні €",
        hCompany: "🏢 Дані фірми", lblCompName: "Назва фірми", lblCompPhone: "Телефон", lblCompEmail: "Email",
        hFinal: "📊 Фінансовий підсумок", txtClientPrice: "Ціна клієнту", btnCalc: "💰 Розрахувати", btnCopy: "📋 Копіювати", btnPdf: "📄 Бланк PDF",
        hProjects: "💾 Проєкти", btnSave: "💾 Зберегти", btnHistory: "📂 Історія", btnClear: "🗑 Очистити",
        proTitle: "🔓 BUILDcalc PRO", proDesc: "Повний професійний кошторис, PDF, Історія, Дані фірми, Необмежені об'єкти, 3 мови", btnBuyPro: "Дізнатися вартість",
        txtRecAmperage: "Розрахунковий струм", txtRecCrossSection: "Рекомендований переріз", txtRecBreaker: "Вступний автомат", txtRecCableTotal: "Загальна довжина кабелю",
        txtFCable: "Кабелі та труби", txtFPoints: "Розетки, вимикачі та щит", txtFBreakers: "Автомати та захист", txtFMat: "Матеріали (загалом)", txtFWork: "Робота", txtFProf: "Прибуток", txtFLog: "Логістика та інше"
    },
    sk: {
        subtitle: "Profesionálna elektroinštalačná kalkulačka",
        objectTitle: "🏠 Údaje o objekte", objectLabel: "Názov objektu", addressLabel: "Adresa", clientLabel: "Klient",
        hRoomSpecs: "📐 Parametre miestnosti a záťaže", lblArea: "Plocha podlahy m²", lblPower: "Celkový výkon (kW)", lblVoltage: "Napätie (V)", lblCableMat: "Materiál vodiča",
        hPoints: "🔌 Body a komponenty", lblSockets: "Zásuvky (ks)", lblSwitches: "Vypínače (ks)", lblLights: "Svetelné body (ks)", lblBreakers: "Ističe",
        hWiring: "🧵 Vedenie a chráničky", lblCableLen: "Dĺžka kábla (m)", lblConduitLen: "Kopoflex/Chránička (m)", lblBoxes: "Inštalačné krabice (ks)", lblShields: "Rozvádzač",
        hTechResult: "📊 Technické odporúčania", hMaterialPrices: "💶 Jednotkové ceny materiálov",
        lblCablePrice: "Cena kábla €/m", lblSocketPrice: "Zásuvka/Vypínač €/ks", lblBreakerPrice: "Istič €/ks", lblPanelPrice: "Rozvádzač a príslušenstvo €",
        hLaborPrices: "👷 Cena práce a logistiky", lblPointLabor: "Práca za bod €/ks", lblCableLabor: "Uloženie kábla €/m", lblProfitPrice: "Zisk €", lblDeliveryPrice: "Logistika a spotrebný materiál €",
        hCompany: "🏢 Údaje o firme", lblCompName: "Názov firmy", lblCompPhone: "Telefón", lblCompEmail: "Email",
        hFinal: "📊 Finančný prehľad", txtClientPrice: "Cena pre klienta", btnCalc: "💰 Vypočítať", btnCopy: "📋 Kopírovať", btnPdf: "📄 PDF Dokument",
        hProjects: "💾 Projekty", btnSave: "💾 Uložiť", btnHistory: "📂 História", btnClear: "🗑 Vymazať",
        proTitle: "🔓 BUILDcalc PRO", proDesc: "Kompletný profesionálny rozpočet, PDF, História, Údaje o firme, Neobmedzené objekty, 3 jazyky", btnBuyPro: "Zistiť cenu",
        txtRecAmperage: "Vypočítaný prúd", txtRecCrossSection: "Odporúčaný prierez vodiča", txtRecBreaker: "Hlavný istič", txtRecCableTotal: "Celková dĺžka kábla",
        txtFCable: "Káble a chráničky", txtFPoints: "Zásuvky, vypínače a rozvádzač", txtFBreakers: "Ističe a ochrana", txtFMat: "Materiály spolu", txtFWork: "Cena práce", txtFProf: "Zisk", txtFLog: "Logistika a ostatné"
    }
};

function changeLanguage() {
    let lang = document.getElementById("language").value;
    let data = langData[lang];
    if (data) {
        for (let id in data) {
            let el = document.getElementById(id);
            if (el) {
                if (el.tagName === "INPUT") el.placeholder = data[id];
                else el.innerHTML = data[id];
            }
        }
    }
}

function setVersion(version) {
    document.getElementById("tabFree").classList.remove("active");
    document.getElementById("tabPro").classList.remove("active");
    if (version === 'free') {
        document.getElementById("tabFree").classList.add("active");
    } else {
        document.getElementById("tabPro").classList.add("active");
    }
}

document.getElementById("language").value = "en";
changeLanguage();
calculateAll();
</script>
</body>
</html>
    </div>
`;

window.addEventListener('DOMContentLoaded', () => {
    const navContainer = document.getElementById('global-nav-container');
    if (navContainer) {
        navContainer.innerHTML = menuHTML;
    }
});
