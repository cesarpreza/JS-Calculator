
const display = document.getElementById('calculator-display');
let firstNumber = null;
let secondNumber = null;
let operand1 = null;
let calcResult = document.getElementById('equal');
let multiply = document.getElementById('times');
let division = document.getElementById('divide');

function numberButtonClicked() {
    document.querySelectorAll('.number-button').forEach(item => {
        item.addEventListener('click', (e) => {
            if(operand1 !== null) {
                secondNumber = e.target.value;
                display.value = secondNumber;
            } else {
                firstNumber = e.target.value;
                display.value = firstNumber;
            }
        })
    })
};

function result() {
    calcResult.addEventListener('click', function() {
        switch(operand1) {
            case '+':
                display.value = parseInt(firstNumber) + parseInt(secondNumber);
                console.log(display.value);
                break;
            case '-':
                display.value = parseInt(firstNumber) - parseInt(secondNumber);   
                break;
            case multiply.value:
                display.value = parseInt(firstNumber) * parseInt(secondNumber); 
                break;
            case division.value:
                display.value = parseInt(firstNumber) / parseInt(secondNumber);    
        }
})
}

function allClear() {
    document.getElementById('clear').addEventListener('click', function() {
        if(!display.value == '0') {
            firstNumber = null;
            secondNumber = null;
            operand1 = null;
            display.value = '0';
        }
    });
}


function operatorClicked() {
    const operator = document.querySelectorAll('.operator-button');
    operator.forEach(item => {
        item.addEventListener('click', (e) => {
            operand1 = e.target.value;
        })
    })
}

result()
operatorClicked();
allClear();
numberButtonClicked();
