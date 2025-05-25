
// define method
function interceptNavigation() {
    // intercept the back button
    $(window).on('popstate', function(event) {
        const state = event.originalEvent.state;
        if (state) {
            $('#content').load(`./html/${state.path}.html`);
        } else {
            $('#content').load("./html/parkour.html", () => {})
        }
    });

    $('a').click(function(event) {
        event.preventDefault();

        const href = $(this).attr('href')
        $('#content').load(`./html/${href}.html`, function(response, status, xhr) {
            if (status == "success") {
                history.pushState({ path: href }, '', href);
            }
        });
    });
}

$(document).ready(function() {
    interceptNavigation();
});