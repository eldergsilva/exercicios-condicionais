const valorDoProduto = 1000;

//quantidade de parcelas
const quantidadeDoParcelamento = 10;

//valor pago
const valorPago = 300;

const valorParcela = valorDoProduto / quantidadeDoParcelamento;

let parcelas = (valorDoProduto - valorPago) / valorParcela;

console.log(`Restam ${parcelas} parcelas de R$${valorParcela} reais`);