
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