const aposentada = false;
const portadoraDeDoenca = false;
const totalDeRendimentos = 3000000; // em centavos

if (aposentada || portadoraDeDoenca) {
    console.log("VAZA LEAO! JA TA DIFICIL SEM VOCE");
        
} else if (totalDeRendimentos < 2855970) {    
    console.log("ISENTA");  

} else {
    console.log("PEGA LEAO");
}