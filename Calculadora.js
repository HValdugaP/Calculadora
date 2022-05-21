var valor;
var resultado;

function button(num){ // faz os numeros aparecerem na tela
    valor = document.calc.visor.value += num;
}

function reseta(){ // botão "C" da calculadora que reseta o display
    document.calc.visor.value = ' ';
}

function calcula(){ // Mostra o resultado na calculadora
    resultado = eval(valor);
    document.calc.visor.value = resultado.toLocaleString('pt-br');
}