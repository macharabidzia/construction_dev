console.log($(this))


$(document).ready(function() {
    var url = window.location.pathname.split('/');
    if (url[url.length - 1] === 'index.html') {}
    setInterval(function() {
        if ($(window).width() >= 770) {
            $('#mouse').animate({ bottom: "60px" })
            setTimeout(function() {
                $('#mouse').animate({ bottom: "50px" })
            })
        }
    }, 1000)
    console.log($('.projects-image-wrapper'))
    Array.from($('.projects-image-wrapper')).forEach(element => {
        $(element).on({
            mouseover: function() {
                var child = $(element).find('div.projects-layer-wrapper');
                if (!child.is(":visible")) {
                    child.fadeIn('slow', function() {});
                }
            },
            mouseleave: function() {
                var child = $(element).find('div.projects-layer-wrapper');

                child.fadeOut();
            }
        })
    });

})