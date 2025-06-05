function loadContent(path, push = false) {
    fetch(`./html/${path}.html`).then(response => {
        document.getElementById('content').innerHTML = response.text();
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

document.addEventListener('DOMContentLoaded', () => {
    interceptNavigation();
});