const tipoDePagamento ="credito";
const valorDoProduto = 13000;
 


if (tipoDePagamento ==="credito") {
     const valorFinal = valorDoProduto - (valorDoProduto * 0.05) ;
     console.log(valorFinal);   
     
}else if(tipoDePagamento ==="cheque"){
     const valorFinal = valorDoProduto - (valorDoProduto * 0.03) ;
     console.log(valorFinal);  

}else if (tipoDePagamento ==="debito"|| tipoDePagamento==="dinheiro"){
     const valorFinal = valorDoProduto - (valorDoProduto * 0.10) ;
     console.log(valorFinal); 

}else {
   console.log("Forma de pagamento inválida");
}