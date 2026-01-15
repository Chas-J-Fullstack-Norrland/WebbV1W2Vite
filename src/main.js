import './style.css'

// Hämta element
const menuBtn = document.getElementById('menu-btn');
const navMenu = document.getElementById('main-nav');
const viewportText = document.getElementById('viewport-text');

// Hamburgermeny
menuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('hidden');
    navMenu.classList.toggle('flex');
});

// Dynamisk Text
function updateViewportText() {
    const width = window.innerWidth;
    
    if (width < 768) {
        viewportText.textContent = `Mobil (${width}px)`;
        viewportText.style.color = "#ea580c";
    } else if (width >= 768 && width < 1024) {
        viewportText.textContent = `Tablet (${width}px)`;
        viewportText.style.color = "#3b82f6";
    } else {
        viewportText.textContent = `Desktop (${width}px)`;
        viewportText.style.color = "#15803d";
    }
}

// Körs vid start och resize
window.addEventListener('resize', updateViewportText);
updateViewportText();