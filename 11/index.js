const rendaMensalEmCentavos = 190000;
const mesesDecorridos = 12;
const totalJaPagoPeloAluno = 1000000;

let valorDaParcela;

if (mesesDecorridos > 60 || totalJaPagoPeloAluno >= 1800000) {

    console.log("O valor da parcela desse mês é R$ 0 reais. O aluno não deve mais nada.");

} else if (rendaMensalEmCentavos >= 200000) {

    valorDaParcela = rendaMensalEmCentavos * 0.18;

    console.log(`O valor da parcela desse mês é R$ ${(valorDaParcela / 100).toFixed(2)} reais`);

} else {

    console.log("O valor da parcela desse mês é R$ 0 reais. Nenhum valor é devido pois a renda do estudante está abaixo do valor mínimo de R$ 2000 reais.");

}