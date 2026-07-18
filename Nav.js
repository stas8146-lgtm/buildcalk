
// 1. Вставляємо код від Google (Analytics / Tag Manager)
// Заміни "G-XXXXXXXXXX" на свій реальний ідентифікатор Google
const googleScript = document.createElement('script');
googleScript.async = true;
googleScript.src = "https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX";
document.head.appendChild(googleScript);

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-XXXXXXXXXX');

// 2. Створюємо єдине меню для всіх калькуляторів
const menuHTML = `
    <style>
        .global-nav { display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; background: #1E1E1E; padding: 10px; border-bottom: 2px solid #FFCC00; margin-bottom: 20px; }
        .global-nav a { color: #F5F5F5; text-decoration: none; padding: 5px 10px; border-radius: 5px; font-weight: bold; font-size: 0.9rem; transition: 0.3s; border: 1px solid #333; }
        .global-nav a:hover, .global-nav a.active { background: rgba(255, 204, 0, 0.2); border-color: #FFCC00; color: #FFCC00; }
    </style>
    <div class="global-nav" data-html2canvas-ignore="true">
        <a href="../Mixer/index.html">🎨 Mixer</a>
        <a href="../Gipsokarton/index.html">🧱 Gipsokarton</a>
        <a href="../Omietky/index.html">🏗 Omietky</a>
        <a href="../Roof/index.html">🏠 Roof</a>
        <a href="../Styazhka/index.html">📏 Styazhka</a>
    </div>
`;

// 3. Вставляємо меню на сторінку після її завантаження
window.addEventListener('DOMContentLoaded', () => {
    const navContainer = document.getElementById('global-nav-container');
    if (navContainer) {
        navContainer.innerHTML = menuHTML;
    }
});
