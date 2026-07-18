alert('Скрипт працює!');
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
    </div>
`;

window.addEventListener('DOMContentLoaded', () => {
    const navContainer = document.getElementById('global-nav-container');
    if (navContainer) {
        navContainer.innerHTML = menuHTML;
    }
});
