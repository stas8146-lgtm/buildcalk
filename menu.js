document.addEventListener("DOMContentLoaded", function() {
    const calculators = [
        { name: '🎨 Mixer', path: 'Mixer' },
        { name: '🧱 Gipsokarton', path: 'Gipsokarton' },
        { name: '🏗️ Omietky', path: 'Omietky' },
        { name: '🏠 Roof', path: 'Roof' },
        { name: '🧹 Styazhka', path: 'Styazhka' },
        { name: '🟩 ProWall & Floor', path: 'ProWall%20%26%20Floor' },
        { name: '🪨 Foundation', path: 'Foundation' }
    ];

    const currentPath = window.location.pathname.toLowerCase();
    let navHTML = '<div class="bg-neutral-950 border-b border-neutral-800 px-4 py-3 no-print"><div class="max-w-4xl mx-auto flex gap-2 overflow-x-auto calculator-nav whitespace-nowrap">';

    calculators.forEach(calc => {
        const decodedPath = decodeURIComponent(calc.path).toLowerCase();
        const isActive = currentPath.includes(decodedPath);
        
        if (isActive) {
            navHTML += `<a href="../${calc.path}/" class="px-3 py-1.5 bg-yellow-500/10 border border-yellow-500 text-xs font-bold rounded-xl text-yellow-400 flex items-center gap-1.5">${calc.name}</a>`;
        } else {
            navHTML += `<a href="../${calc.path}/" class="px-3 py-1.5 bg-neutral-900 border border-neutral-800 text-xs font-bold rounded-xl hover:border-yellow-500 text-neutral-300 hover:text-white transition flex items-center gap-1.5">${calc.name}</a>`;
        }
    });

    navHTML += '</div></div>';
    
    const navContainer = document.getElementById('global-nav');
    if (navContainer) {
        navContainer.innerHTML = navHTML;
    }
});
