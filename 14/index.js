const quantidadeDeAguaIngerida = 4;

if (quantidadeDeAguaIngerida <= 0) {
    console.log("Quantidade inválida");
    
} else if (quantidadeDeAguaIngerida < 1.5) {    
    console.log("Risco Alto - Você está ingerindo pouquíssima água, beba mais");
    
} else if (quantidadeDeAguaIngerida < 3) {
    console.log("Risco Moderado - Você está ingerindo pouca água, beba mais!");
    
} else {
    console.log("Risco Baixo - Você está ingerindo uma boa quantidade de água, parabéns!");
}