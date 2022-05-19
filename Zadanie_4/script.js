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
// equations[0] = '<input class="equation-coefficient">';
// equations[0] = createInputField(0);


const increaseXButton = document.querySelector('#increaseX');
increaseXButton.addEventListener('click', () => {
    let equation = document.querySelector('.equation');
    const inputCoefficient = createInputField(degree);

    if (degree >= 9) {
        return;
    }

    let staticText = document.createTextNode("X");
    inputCoefficient.appendChild(staticText);

    equation.appendChild(inputCoefficient);

    // let staticText = createPlainText(degree);


    // if (degree === 0) {
    //     static = "";
    // } else if (degree === 1) {
    //     static = " X + ";
    // } else {
    //     static = " X + " + degree.toString();
    // }

    // inputCoefficient.appendChild(staticText);


    // if (degree === 0) {
    //     equation.innerHTML = inputCoefficient.innerHTML;
    // } else if (degree === 1) {
    //     equation.innerHTML = inputCoefficient.innerHTML + '<p class="equation-static"> X + </p>' + equation.innerHTML;
    // } else {
    //     equation.innerHTML = inputCoefficient.innerHTML  + '<p class="equation-static"> X^ ' + degree + ' + </p>' + equation.innerHTML;
    // }

    // equations[degree] = equation.innerHTML
    degree++;
})

function createInputField(degree) {
    let inputField = document.createElement("INPUT");
    inputField.setAttribute("type", "text");
    inputField.setAttribute("value", degree.toString());
    inputField.setAttribute("class", "equation-coefficient");
    inputField.setAttribute('id', 'dc_' + degree.toString());

    inputField.addEventListener('input', function () {
        coefficients[degree] = this.value;
    });

    return inputField;
}

function createPlainText(degree) {
    let plainText = document.createElement("p");
    // plainText.setAttribute("type", "text");
    plainText.setAttribute("class", "equation-static");
    plainText.setAttribute('id', 'dp_' + degree.toString());

    if (degree === 0) {
        plainText.setAttribute("value", "");
    } else if (degree === 1) {
        plainText.setAttribute("value", " X + ");
    } else {
        plainText.setAttribute("value", " X + " + degree.toString());
    }

    return plainText;
}

const decreaseXButton = document.querySelector('#decreaseX');
decreaseXButton.addEventListener('click', () => {
    let equation = document.querySelector('.equation');

    equation.removeChild(document.querySelector('#dc_' + (degree - 1)));

    // equation.removeChild(document.querySelector('#dp_' + (degree - 1)));

    // if (degree <= 1) {
    //     equation.innerHTML = equations[0];
    // } else {
    //     degree--;
    //     equation.innerHTML = equations[degree - 1];
    // }
    degree--;
})

const makeChartButton = document.querySelector('#drawChart');
makeChartButton.addEventListener('click', () => {
    // let coefficientValues = document.querySelectorAll(".equation-coefficient");

    console.log(coefficients.toString())
})

// const inputList = document.querySelector('.equation-coefficient');
// inputList.addEventListener('input', getInputFromTextBox);
// // inputList.addEventListener('input', saveCoefficient);
//
// function saveCoefficient(degree, value) {
//     coefficients[degree] = value;
// }
//
// function getInputFromTextBox(e) {
//     // var input = document.getElementById("userInput").value;
//     alert(e.target.value);
// }