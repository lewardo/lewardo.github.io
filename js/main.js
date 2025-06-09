function loadContent(path, push = false) {
    fetch(`html/${path}.html`).then(response => {
        if (!response.ok) throw new Error('Network error');
        return response.text();
    }).then(html => {
        document.getElementById('content').innerHTML = html;
        if (push) history.pushState({ path }, '', path);
    })
}

function interceptNavigation() {
    window.addEventListener('popstate', event => {
        if (event.state) loadContent(event.state.path);
        else loadContent('default');
    });

    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const href = this.getAttribute('href');
            loadContent(href, true);
        });
    });
}

function manageOverlay() {
    const overlay = document.getElementById('overlay');
    const enter = document.getElementById('overlay_enter');
    const logo = document.getElementById('overlay_logo');

    enter.addEventListener('click', () => {
        overlay.classList.add('overlay--hidden');
    });

    logo.addEventListener('click', () => {
        overlay.classList.toggle('overlay--hidden');
    });
}

function manageColourMode() {
    const toggle = document.getElementById('colour_mode');

    const savedMode = localStorage.getItem('colourMode') || 'light';
    document.body.classList.toggle('dark-mode', savedMode === 'dark');
    
    toggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const mode = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
        localStorage.setItem('colourMode', mode);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    interceptNavigation();
    manageOverlay();
    manageColourMode();
});