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

let degree = 0;
let equations = [];
let coefficients = [];
equations[0] = '<input class="equation-coefficient">';

const increaseXButton = document.querySelector('#increaseX');
increaseXButton.addEventListener('click', () => {
    let equation = document.querySelector('.equation')

    // console.log("Incerase" + degree);
    if (degree >= 11) {
        return;
    }
    if (degree === 0) {
        equation.innerHTML = '<input class="equation-coefficient ' + "d" + degree + ' ">';
    } else if (degree === 1) {
        equation.innerHTML = '<input class="equation-coefficient ' + "d" + degree + ' ">' +
            '<p class="equation-static"> X + </p>'
            + equation.innerHTML;
    } else {
        equation.innerHTML = '<input class="equation-coefficient ' + "d" + degree + ' ">' +
            '<p class="equation-static"> X^ ' + degree + ' + </p>'
            + equation.innerHTML;
    }
    equations[degree] = equation.innerHTML
    degree++;
})

const decreaseXButton = document.querySelector('#decreaseX');
decreaseXButton.addEventListener('click', () => {
    let equation = document.querySelector('.equation');
    // let test = document.querySelector('.d'+degree);

    // console.log(test.className);
    // console.log("Decerase" + degree);
    if (degree < 1) {
        equation.innerHTML = equations[0];
    } else {
        degree--;
        equation.innerHTML = equations[degree];
    }
})


// var answers = 0,
//     write = document.getElementById('buttons');
//
// function addAnswer() {
//     write.innerHTML += 'Add answer: <input type="text" id="answer"' + answers + '/> <br />';
//     answers++;
// }


// var i = 0;
//
// function addMore()
// {
//     var x = document.getElementById('buttons');
//     var input1 = document.createElement("input");
//     input1.setAttribute("type","text");
//     input1.setAttribute("name","i" + i );
//     x.appendChild( input1 );
//     i++;
// }