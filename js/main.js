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

    document.querySelectorAll('a.menu__link').forEach(link => {
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

    enter.addEventListener('click', () => {
        overlay.classList.add('overlay--hidden');
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

function manageMenu() {
    const menu = document.getElementById('menu');
    const menuToggle = document.getElementById('overlay_logo');

    const navigationLinks = document.querySelectorAll('.menu__link');
    const socialsLinks = document.querySelectorAll('.menu__socials_link');
    const signatureTag = document.querySelector('.menu__tag_container');
    const resumeLink = document.querySelector('.menu__resume_link');

    menuToggle.addEventListener('click', () => {
        setTimeout(() => {
            menu.classList.toggle('menu--visible');
        }, menu.classList.contains('menu--visible') ? 200 : 0);

        menu.classList.toggle('menu--open');

        setTimeout(() => {
            navigationLinks.forEach((link, i) => {
                setTimeout(() => {
                    link.classList.toggle('menu__link--visible');
                }, i * 40);
            });

            socialsLinks.forEach((link, i) => {
                setTimeout(() => {
                    link.classList.toggle('menu__socials_link--visible');
                }, i * 40);
            });
            

            signatureTag.classList.toggle('menu__tag_container--visible');
            resumeLink.classList.toggle('menu__resume_link--visible');
        }, 100);
    }); 
}

document.addEventListener('DOMContentLoaded', () => {
    interceptNavigation();
    manageOverlay();
    manageColourMode();
    manageMenu();
});