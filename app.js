function getPin(){
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + "";
    if(pinString.length == 4) {
        return pin;
    }
    else {
        return getPin();
    }
}

function generatePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}

document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');
    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = '';
        }
        if(number == '<') {
            calcInput.value = calcInput.value.slice(0, -1);
        }
    }
    else {
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;
    }
});

function verifyPin() {
    const pin = document.getElementById('display-pin').value;
    const typedNumber = document.getElementById('typed-numbers').value;
    const successMessage = document.getElementById('notify-success');
    const failMessage = document.getElementById('notify-fail');
    if (pin == typedNumber){
        successMessage.style.display = 'block';
        failMessage.style.display = 'none';
    }
    else {
        successMessage.style.display = 'none';
        failMessage.style.display = 'block';
    }
}