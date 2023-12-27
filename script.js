let nomeJogador= " ander "
let vitorias = Number()
let derrotas = Number()

let meuElo = ""

function saldoRankeadas(vitorias, derrotas){
    return vitorias-derrotas;
}
let meuSaldoDeVitorias = saldoRankeadas(100, 90);

switch (true){
    case meuSaldoDeVitorias <= 10:
        meuElo = "Ferro";
        break;
    case meuSaldoDeVitorias >= 11 && meuSaldoDeVitorias <=20:
        meuElo = "Bronze";
        break;
    case meuSaldoDeVitorias >= 21 && meuSaldoDeVitorias <=30:
        meuElo = "Prata";
        break;
    case meuSaldoDeVitorias >= 31 && meuSaldoDeVitorias <=40:
        meuElo = "Ouro";
        break;
    case meuSaldoDeVitorias >=41 && meuSaldoDeVitorias <=50:
        meuElo = "Platina";
        break;
    case meuSaldoDeVitorias >=51 && meuSaldoDeVitorias <=60:
        meuElo = "Diamante";
        break;
    case meuSaldoDeVitorias >= 61 && meuSaldoDeVitorias <=70:
        meuElo = "Ascendente";
        break
    case meuSaldoDeVitorias >= 71 && meuSaldoDeVitorias <=80:
        meuElo = "Imortal";
        break;
    case meuSaldoDeVitorias >= 100:
        meuElo = "RADIANTE";
        break;

}

console.log(`Olá ${nomeJogador} seu élo atualmente é ${meuElo}`)