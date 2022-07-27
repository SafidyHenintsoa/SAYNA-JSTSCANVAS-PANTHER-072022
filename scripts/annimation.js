$(document).ready(() => {

    // annimation de la traits vert
    document.querySelector('.ReseauSocio').classList.add('ReseauSocio-visible');
    // fin de lanimation

    // annimation fadein
    const ratio = .1;
    const options = {
        root: null,
        rootMargine: '0px',
        threshold: ratio
    };
    const afficher = function(entries, observer) {
        entries.forEach(function(entry) {
            if (entry.intersectionRatio > ratio) {
                entry.target.classList.add('animate-visible');
                observer.unobserve(entry.target);
            }
        });
    }
    const observer = new IntersectionObserver(afficher, options);
    document.querySelectorAll('.animate').forEach(function(r) {
            observer.observe(r);
        })
        // fin annimation fadein


    // annimation on hover
    // zoom10%
    $(".zoom10").hover(function() {
        $(this).css("transform", "scale(1.1)");
        $(this).css("transition", ".5s cubic-bezier(.5, 0, 0, 1)");
    }, function() {
        $(this).css("transform", "scale(1)");
        $(this).css("transition", ".5s cubic-bezier(.5, 0, 0, 1)");
    });
    // zoom de 20%
    $(".zoom20").hover(function() {
        $(this).css("transform", "scale(1.2)");
        $(this).css("transition", ".5s cubic-bezier(.5, 0, 0, 1)");
    }, function() {
        $(this).css("transform", "scale(1)");
        $(this).css("transition", ".5s cubic-bezier(.5, 0, 0, 1)");
    });

});