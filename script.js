
function calcular() {

    // Declaração de variáveis
    var formulario = document.getElementById("formulario");

    var mass = + formulario.massa.value;

    var height = + formulario.altura.value;

    // Cálculo do IMC
    let imc = ((mass) / ((height) ^ 2));

    // Condicionais
    if (imc < 20) {

        alert(`Seu IMC é ${imc.toFixed(1)} - Você esta abaixo do peso!`);
    }
    else if (imc > 20 && imc <= 25) {

        alert(`Seu IMC é ${imc.toFixed(1)} - Peso Ideal`);
    }
    else if (imc > 25 && imc <= 30) {

        alert(`Seu IMC é ${imc.toFixed(1)} - Sobrepeso`);
    }
    else if (imc > 30 && imc <= 35) {

        alert(`Seu IMC é ${imc.toFixed(1)} - Obesidade Moderada`);
    }
    else if (imc > 35 && imc <= 40) {

        alert(`Seu IMC é ${imc.toFixed(1)} - Obesidade Severa`);
    }
    else if (imc > 40 && imc <= 50) {

        alert(`Seu IMC é ${imc.toFixed(1)} - Obesidade Morbida`);
    }
    else {

        alert(`Seu IMC é ${imc.toFixed(1)} - Gordo`);
    }

    return;

}
