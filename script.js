const result = document.getElementById("result");
const form = document.querySelector("form");

function calculateInputsValues(event) {
    event.preventDefault();
    const {
        numberA,
        numberB
    } = event.target;

    let A = Number(numberA.value);
    let B = Number(numberB.value);

    if (A === 0 || B === 0) {
        let errorMessage = "La suma que quieres hacer no tiene sentido";
        console.error(errorMessage);
        alert(errorMessage)
    }

    result.innerHTML = `La suma de ${A} y ${B} es: ${A+B}`;
}
//Agregamos un listener al form para saber cuando se hizo click
form.addEventListener("submit", calculateInputsValues);