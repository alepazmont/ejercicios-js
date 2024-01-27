let form1Input = document.querySelector("input[name='number1']");
let form2Input = document.querySelector("input[name='number2']");
const span = document.querySelector("span#result");


function calculate() {
    let form1 = parseFloat(form1Input.value);
    let form2 = parseFloat(form2Input.value);


    if (isNaN(form1) && isNaN(form2)) {
        alert("Introduce un número válido");
    } else if (isNaN(form1)) {
        alert("El primer campo no contiene un número válido");
    } else if (isNaN(form2)) {
        alert("El segundo campo no contiene un número válido");
    } else {
        let resultado = form1 + form2;
        span.innerHTML = resultado;
    }
  }