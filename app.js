
const display = document.getElementById('calculator-display');
let firstOperand = null;
let secondOperand = null;
let operator = null;

function numberButtonClicked() {
    document.querySelectorAll('.number-button').forEach(item => {
        item.addEventListener('click', (e) => {
            display.value = e.target.value;
        })
    })
};



getFirstOperand();
numberButtonClicked();


// function numberZero() {
//     const zeroButton = document.getElementById('zero');
//     zeroButton.addEventListener('click', (e) => {
//         display.value = e.target.value;
//     });
// }

// function numberOne() {
//     const oneButton = document.getElementById('one');
//     oneButton.addEventListener('click', (e) => {
//         display.value = e.target.value;
//     });
// }
// function numberTwo() {
//     const twoButton = document.getElementById('two');
//     twoButton.addEventListener('click', (e) => {
//         display.value = e.target.value;
//     })
// }

// function numberThree() {
//     const threeButton = document.getElementById('three');
//     threeButton.addEventListener('click', (e) => {
//         display.value = e.target.value;
//     })
// }

// function numberFour() {
//     const fourButton = document.getElementById('four');
//     fourButton.addEventListener('click', (e) => {
//         display.value = e.target.value;
//     })
// }

// function numberFive() {
//     const fiveButton = document.getElementById('five');
//     fiveButton.addEventListener('click', (e) => {
//         display.value = e.target.value;
//     })
// }

// function numberSix() {
//     const sixButton = document.getElementById('six');
//     sixButton.addEventListener('click', (e) => {
//         display.value = e.target.value;
//     })
// }

// function numberSeven() {
//     const sevenButton = document.getElementById('seven');
//     sevenButton.addEventListener('click', (e) => {
//         display.value = e.target.value;
//     })
// }

// function numberEight() {
//     const eightButton = document.getElementById('eight');
//     eightButton.addEventListener('click', (e) => {
//         display.value = e.target.value;
//     })
// }

// function numberNine() {
//     const nineButton = document.getElementById('nine');
//     nineButton.addEventListener('click', (e) => {
//         display.value = e.target.value;
//     })
// }

// function numberDecimal() {
//     const decimalButton = document.getElementById('decimal');
//     decimalButton.addEventListener('click', (e) => {
//         display.value = e.target.value;
//     })
// }































// numberZero();
// numberOne();
// numberTwo();
// numberThree();
// numberFour();
// numberFive();
// numberSix();
// numberSeven();
// numberEight();
// numberNine();
// numberDecimal();
