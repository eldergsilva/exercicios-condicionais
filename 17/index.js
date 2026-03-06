const valorDoProduto = 1000;
const quantidadeDoParcelamento = 10;
const valorPago = 300;


const valorParcela = valorDoProduto / quantidadeDoParcelamento;

let parcelas = (valorDoProduto - valorPago) / valorParcela;

console.log(`Restam ${parcelas} parcelas de R$${valorParcela} reais`);