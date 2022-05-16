const app = {
    pages: [],
    init: function () {
        app.pages = document.querySelectorAll('.page');
        document.querySelectorAll('.nav-link').forEach((link) => {
            link.addEventListener('click', app.nav);
        })
        history.replaceState({}, 'Home', '#home');
        window.addEventListener('popstate', app.hist);
    },
    nav: function (ev) {
        ev.preventDefault();
        let currentPage = ev.target.getAttribute('data-target');
        app.toggleActive(currentPage);
        history.pushState({}, currentPage, `#${currentPage}`);
    },
    hist: function () {
        let hash = location.hash.replace('#', '');
        app.toggleActive(hash);
    },
    toggleActive: function (link) {
        document.querySelector('.active').classList.remove('active');
        document.getElementById(link).classList.add('active');
    }
}
document.addEventListener('DOMContentLoaded', app.init);

const navbarToggler = document.querySelector('#tooglebutton');
const navbarMenu = document.querySelector('#menu');
navbarToggler.addEventListener('click', () => {
    let toToggle = document.querySelector('#menu')

    if (toToggle.classList.contains("show"))
        toToggle.classList.remove('show');
    else
        toToggle.classList.add('show');
})