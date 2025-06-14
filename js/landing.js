function manageOverlay() {
    const overlay = document.getElementById('overlay');
    const enter = document.getElementById('overlay_enter');

    enter.addEventListener('click', () => {
        overlay.classList.add('overlay--hidden');
    });
}