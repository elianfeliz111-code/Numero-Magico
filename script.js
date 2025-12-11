let secretNumber = Math.floor(Math.random() * 10) + 1;
let attemptsCount = 0;

function checkNumber() {
    const userInput = document.getElementById("userNumber").value;
    const message = document.getElementById("message");
    const attempts = document.getElementById("attempts");

    if (userInput === "") {
        alert("Por favor, ingresa un número.");
        return;
    }

    const guess = Number(userInput);
    attemptsCount++;

    if (guess < secretNumber) {
        message.textContent = "El número secreto es mayor.";
    } else if (guess > secretNumber) {
        message.textContent = "El número secreto es menor.";
    } else {
        message.textContent = `¡Felicidades! Adivinaste el número secreto en ${attemptsCount} intento(s).`;
    }

    attempts.textContent = `Número de intentos: ${attemptsCount}`;
    document.getElementById("userNumber").value = "";
    document.getElementById("userNumber").focus();
}

function newGame() {
    secretNumber = Math.floor(Math.random() * 10) + 1;
    attemptsCount = 0;
    document.getElementById("message").textContent = "";
    document.getElementById("attempts").textContent = "";
    document.getElementById("userNumber").value = "";
    document.getElementById("userNumber").focus();
}