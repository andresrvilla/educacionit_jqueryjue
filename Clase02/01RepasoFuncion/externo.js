function saludar(nombre){
    alert("Hola "+nombre);
}

function sumar(valorUno,valorDos){
    var resultado = valorUno + valorDos;
    return resultado;
}

saludar("Andres");
saludar("Mundo");

var resultadoSuma = sumar(10,20);
alert("Resultado de sumar 10 mas 20 es "+resultadoSuma);