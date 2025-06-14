export default function() {
    const overlay = document.getElementById('landing');
    const enter = document.getElementById('landing_enter');

    enter.addEventListener('click', () => {
        overlay.classList.add('landing--landed');
    });
}