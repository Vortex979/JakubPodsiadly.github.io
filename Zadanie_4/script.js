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

    equation.appendChild(inputCoefficient);

    let static = "";

    // if (degree === 0) {
    //     equation.innerHTML = inputCoefficient.innerHTML;
    // } else if (degree === 1) {
    //     equation.innerHTML = inputCoefficient.innerHTML + '<p class="equation-static"> X + </p>' + equation.innerHTML;
    // } else {
    //     equation.innerHTML = inputCoefficient.innerHTML  + '<p class="equation-static"> X^ ' + degree + ' + </p>' + equation.innerHTML;
    // }

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

function createInputField(degree){
    var inputField = document.createElement("INPUT");
    inputField.setAttribute("type", "text");
    inputField.setAttribute("value", degree.toString());
    inputField.setAttribute("class", "equation-coefficient");
    inputField.setAttribute('id', 'd_' + degree.toString());

    inputField.addEventListener('input', function () {
        coefficients[degree] = this.value;
    });

    return inputField;
}

const decreaseXButton = document.querySelector('#decreaseX');
decreaseXButton.addEventListener('click', () => {
    let equation = document.querySelector('.equation');

    let toRemove = document.querySelector('#d_' + (degree-1));

    equation.removeChild(toRemove);

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

function addElements(element, index) {
    // coefficients[index] = element.target.value;
    // console.log("Wywoałanie addElememtnts: " + element.target.value);

}


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