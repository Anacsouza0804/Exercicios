var nome, dia, mes
nome = window.prompt("Escreva seu nome");
dia = parseFloat(prompt("Escreva o dia"));
mes = parseFloat(prompt("Escreva o mês"));


if (nome == "Celso Portiolli" && dia == 11 && mes == 9 ) 
{
    window.alert("O Celso Portiolli não tem nada a ver com o 11 de Setembro");
} 
else if (nome == "Ana Clara" && dia == 4 && mes == 7) 
{
    window.alert("Faça a prova com atenção");
} 
else 
{
    window.alert("Condição não reconhecida");
}

