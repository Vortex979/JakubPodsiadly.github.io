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
let coefficients = [];

const increaseXButton = document.querySelector('#increaseX');
increaseXButton.addEventListener('click', () => {
    let equation = document.querySelector('.equation');
    const inputCoefficient = createInputField(degree);

    if (degree >= 9) {
        return;
    }
    let staticText = createPlainText(degree);
    equation.appendChild(inputCoefficient);
    equation.appendChild(staticText);
    degree++;
})

function createInputField(degree) {
    const inputField = document.createElement("INPUT");
    inputField.setAttribute("type", "number");
    inputField.setAttribute("value", "0");
    inputField.setAttribute("class", "equation-coefficient");
    inputField.setAttribute('id', 'dc_' + degree.toString());

    inputField.addEventListener('input', function () {
        coefficients[degree] = this.value;
        // console.log(this.value)
    });

    return inputField;
}

function createPlainText(degree) {
    const plainText = document.createElement("p");
    plainText.setAttribute("type", "text");
    plainText.setAttribute("class", "equation-static");
    plainText.setAttribute('id', 'dp_' + degree.toString());
    let node;

    if (degree === 0) {
        node = document.createTextNode("+");
    } else if (degree === 1) {
        node = document.createTextNode("X +");
    } else if (degree === 8) {
        node = document.createTextNode("X^" + degree.toString());
    } else {
        node = document.createTextNode("X^" + degree.toString() + "+ ");
    }
    plainText.appendChild(node);

    return plainText;
}

const decreaseXButton = document.querySelector('#decreaseX');
decreaseXButton.addEventListener('click', () => {
    let equation = document.querySelector('.equation');

    if (degree <= 0)
        return;

    equation.removeChild(document.querySelector('#dc_' + (degree - 1)));
    equation.removeChild(document.querySelector('#dp_' + (degree - 1)));
    degree--;
})

const makeChartButton = document.querySelector('#drawChart');
makeChartButton.addEventListener('click', () => {
    let dateToDrawAPlot = [];

    for (let i = 0; i < degree; i++) {
        if (typeof coefficients[i] === 'undefined') {
            dateToDrawAPlot[i] = 0;
        } else {
            dateToDrawAPlot[i] = coefficients[i];
        }
    }

    if (dateToDrawAPlot.length === 0 ){
        dateToDrawAPlot[0] = 0;
    }

    console.log(dateToDrawAPlot.toString());
})