// Captura o evento de submit do formulário
const form = document.querySelector('#formulario');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');
    
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if(!peso) {
        setResultado('Peso inválido.', false);
        return;
    };
    if(!altura) {
        setResultado('Altura inválida.', false);
        return;
    };

    const imc = getIMC(peso, altura);
    const nivel = getNivelIMC(imc);

    const msg = `Seu IMC é ${imc}, considerado ${nivel}`;
    setResultado(msg, true);

    console.log(nivel);
});

function getNivelIMC(imc) {
    const nivel = [
        'Abaixo do peso',
        'Peso normal',
        'Sobrepeso',
        'Obesidade grau I',
        'Obesidade grau II',
        'Obesidade grau III'
    ];

    if(imc > 39.9) return nivel[5];
    if(imc > 34.9) return nivel[4];
    if(imc > 29.9) return nivel[3];
    if(imc > 24.9) return nivel[2];
    if(imc > 18.5) return nivel[1];
    if(imc > 0) return nivel[0];
}

function getIMC(peso, altura) {
    const imc = peso / (altura * altura);
    return imc.toFixed(2);
}

function creatP(){
    const p = document.createElement('p');
    return p;
}

function setResultado(msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = ''; /* Limpa o conteúdo do elemento */

    const p = creatP();

    if (isValid) {
        p.classList.add('paragrafo-valido');
    } else {
        p.classList.add('paragrafo-invalido');
    }

    p.innerHTML = msg;
    resultado.appendChild(p); /* Adiciona o elemento p ao elemento resultado */
}