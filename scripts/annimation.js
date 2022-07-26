$(document).ready(() => {
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
});