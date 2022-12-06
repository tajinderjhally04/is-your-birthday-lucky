const dateOfBirth = document.querySelector('#date-of-birth');
const luckyNumber = document.querySelector('#lucky-number');
const checkNumber = document.querySelector('#check-number');
const outputBox = document.querySelector('#output-box');

function comparesValues(sum, luckyNumber) {
    if(sum % luckyNumber === 0){
        outputBox.innerText = 'Your birthday is lucky 😁';
    }
    else{
        outputBox.innerText = 'Your birthday is not lucky 😔';
    }
}

function checkNumberIsLucky() {
    const birthDate = dateOfBirth.value;
    const sum = calculateSum(birthDate);
    if (sum && birthDate) {
        comparesValues(sum, luckyNumber.value)
    } else {
        outputBox.innerText = "Please, enter both fields 🚨";
    }
}

function calculateSum(birthDate) {
    birthDate = birthDate.replaceAll('-','');
    let sum = 0;
    for (let i = 0; i < birthDate.length; i++) {
        sum = sum + Number(birthDate.charAt(i));
    }
    return sum;
}



checkNumber.addEventListener("click", checkNumberIsLucky);
