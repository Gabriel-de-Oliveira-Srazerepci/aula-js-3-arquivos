/*declarando variáveis*/
let altura;
let peso;
let imc;
/*Criando uma função IMC*/
function calcimc(altura, peso)
{
    imc = peso / (altura * altura);//Calcular IMC*
    window.alert('Seu IMC é: '+imc);//Mostrando o IMC em janela
}


