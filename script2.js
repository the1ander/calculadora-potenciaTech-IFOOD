let nomeJogador= " ander "
let vitorias = 59
let derrotas = 30

let meuElo = ""

function saldoRankeadas(vitorias, derrotas){
    return vitorias-derrotas;
}
let meuSaldoDeVitorias = saldoRankeadas(vitorias, derrotas);

if(meuSaldoDeVitorias <=10){
    meuElo = "Ferro";
}else if (meuSaldoDeVitorias >=11 && meuSaldoDeVitorias<= 20){
    meuElo = "bronze";
}else if (meuSaldoDeVitorias >=21 && meuSaldoDeVitorias <=30){
    meuElo = "Prata";
}else if (meuSaldoDeVitorias >=31 && meuSaldoDeVitorias <=40){
    meuElo = "Ouro";
}else if (meuSaldoDeVitorias >=41 && meuSaldoDeVitorias <=50){
    meuElo = "Platina";
}else if (meuSaldoDeVitorias >=51 && meuSaldoDeVitorias <=60){
    meuElo = "Diamante";
}else if (meuSaldoDeVitorias >=61 && meuSaldoDeVitorias <=70){
    meuElo = "Ascendente";
}else if (meuSaldoDeVitorias >=71 && meuSaldoDeVitorias <=99){
    meuElo = "imortal";
}else if (meuSaldoDeVitorias >= 100){
    meuElo = "RADIANTE";
}


console.log(`seu élo é ${meuElo}`)