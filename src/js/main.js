const nome = document.getElementById("nome");
const altura = document.getElementById("altura");
const peso = document.getElementById("peso");
const btn = document.getElementById("calcular");
const resultado = document.querySelector(".result");

btn.addEventListener("click", function(){
    calcular();
})

function calcular(){
    const altura_multi = altura.value * altura.value;
    const calculo = peso.value / altura_multi;

    resultados(calculo.toFixed(2));
}

function resultados(data){
    const peso = "";

    if (data <= 16.9) {
        const peso = "está Muito abaixo do peso";
        teste(peso, data);
    } else if(data > 17 && data <= 18.4){
        const peso = "está Abaixo do peso";
        teste(peso, data);
    } else if(data > 18.5 && data <= 24.9){
        const peso = "está com o Peso normal";
        teste(peso, data);
    } else if(data > 25 && data <= 29.9){
        const peso = "está Acima do peso";
        teste(peso, data);
    } else if(data > 30 && data <= 34.9){
        const peso = "está em Obesidade Grau I";
        teste(peso, data);
    } else if(data > 35 && data <= 40){
        const peso = "está em Obesidade Grau II";
        teste(peso, data);
    } else if(data > 40){
        const peso = "está em Obesidade Grau III";
        teste(peso, data);
    }
}

function teste(data, peso){
    resultado.innerHTML = "<p>" + nome.value + " seu IMC é " + peso + ", você " + data + ".</p>";
}