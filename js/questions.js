const greetUser = document.querySelector(".greetUser");
const diagnosis = document.querySelector(".diagnosis");

const chestPain = document.querySelector("#chestPain");
const shortBreath = document.querySelector("#shortBreath");

const nausea = document.querySelector("#nausea");
const cramps = document.querySelector("#cramps");

const sleepTrouble = document.querySelector("#sleepTrouble");
const lossInterest = document.querySelector("#lossInterest");

const errorMessage = document.querySelector(".errorMessages");

const btnInfo = document.querySelector("#btnInfo");

var username, age, bodypart;

document.querySelector("#btnInfo").addEventListener('click', () => {
    greetUsers();

});

document.querySelector("#btnSymptoms").addEventListener('click', () => {
    getSymptoms();
});

function greetUsers() {
    username = document.getElementById("brName").value;
    age = document.getElementById("brAge").value;

    if (username !== "" && age !== undefined) {
        greetUser.innerHTML = "Hello, " + username + ". Welcome to  Mumz Medic. Please select your set of symptoms below so that Mumz can help you.";
        setTimeout(function () {
            greetUser.innerHTML = "";
        }, 10000)
    }
}

function getSymptoms() {
    if ((chestPain.checked === true && shortBreath.checked === true) && age > 25) {
        diagnosis.innerHTML = username + ", it lools like you have may have Heart Disease, High Blood, or Diabetes. Please proceed to locate the nearest Doctors to get an accurate diagnosis if possible."
        setTimeout(function () {
            diagnosis.innerHTML = "";
        }, 8000)
    } if (nausea.checked === true && cramps.checked === true) {
        diagnosis.innerHTML = "Congratulations, you just might be pregnant." + username + ". Please wait as I connect you with the nearest Gynaecologist."
        setTimeout(function () {
            diagnosis.innerHTML = "";
        }, 8000)
    }
    if (lossInterest.checked === true) {
        diagnosis.innerHTML = "It may look like you are just tired, " + username + ". Please make rest and try new things. If things are not changing. Come back so that Mumz can be of help."
        setTimeout(function () {
            diagnosis.innerHTML = "";
        }, 8000)
    }

    greetUsers();
}

function errorMessages() {
    if ((chestPain.checked === true && shortBreath.checked === true) && age < 25) {
        errorMessages.innerHTML = username + ", Mumz thinks that you are just out of breath and it's very unlikely for you to be diagnosed with any serious disease.";
    }
    if (username === "" && age === undefined) {
        errorMessage.innerHTML = "Please enter your name and pick your age."
    }
    getSymptoms();
    greetUsers();
}

function delay() {
    setTimeout(function () {
        greetUsers();
    }, 10000)
    getSymptoms();
    greetUsers();
    errorMessages();
}
