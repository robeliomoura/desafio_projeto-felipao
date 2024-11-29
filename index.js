function calcularNivel(vitorias, derrotas) {
    // Calcula o saldo de Rankeadas
    let saldoVitorias = vitorias - derrotas;
    let nivel;

    // Define o nível de acordo com o número de vitórias
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 10 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    // Retorna a mensagem final
    return `O Herói tem saldo de ${saldoVitorias} está no nível de ${nivel}`;
}

let vitorias = 75;
let derrotas = 30; 
let resultado = calcularNivel(vitorias, derrotas);
console.log(resultado);