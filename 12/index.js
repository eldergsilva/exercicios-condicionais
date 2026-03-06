const diaDaSemana = 4;
 
 
if (diaDaSemana <1 || diaDaSemana >7 || typeof diaDaSemana !== "number" ) {
    console.log("O dia da semana informado não é válido.");
    
}else if(diaDaSemana ===1 ){
   console.log("segunda");
   
}
else if(diaDaSemana ===2){
   console.log("terça");
   
}
else if(diaDaSemana ===3){
   console.log("Quarta Feira");
   
}
else if(diaDaSemana ===4){
   console.log("Quinta Feira");
   
}
else if(diaDaSemana ===5){
   console.log("Sexta Feira");
   
}
else if(diaDaSemana ===6 ){
   console.log("Sabado");
   
} else {
   console.log("Domingo");   
}