
// define method
function interceptNavigation() {
    // intercept the back button
    $(window).on('popstate', function(event) {

        if (event.originalEvent.state) {
            $('#content').load(`./html/${event.originalEvent.state.path}.html`);
        } else {
            $('#content').load("./html/parkour.html", function(response, status, xhr) {
                if (status == "error") {
                    alert("Error loading page: " + xhr.status + " " + xhr.statusText);
                }
            })
        }
    });

    $('a').click(function(event) {
        event.preventDefault();

        const href = $(this).attr('href')
        $('#content').load(`./html/${href}.html`, function(response, status, xhr) {
            if (status == "success") {
                console.log("Page loaded successfully: " + href);
                history.pushState({ path: href }, '', href);
            }

            if (status == "error") {
                alert("Error loading page: " + xhr.status + " " + xhr.statusText);
            }
        });
    });
}

$(document).ready(function() {
    interceptNavigation();
});