let nomeHeroi = "Homem Aranha"
let nivelXp = 1002
let resultadoXp = ""

if (nivelXp < 1000) {
    resultadoXp = "Ferro"
} else if (nivelXp > 1001 && nivelXp < 2000) {
    resultadoXp = "Bronze"
} else if (nivelXp > 2001 && nivelXp < 5000) {
    resultadoXp = "Prata"
} else if (nivelXp > 5001 && nivelXp < 7000) {
    resultadoXp = "Ouro"
} else if (nivelXp > 7001 && nivelXp < 8000) {
    resultadoXp = "Platina"
}else if (nivelXp > 8001 && nivelXp < 9000) {
    resultadoXp = "Ascendente"
}else if (nivelXp > 9001 && nivelXp < 10000) {
    resultadoXp = "Imortal"
}else if (nivelXp >= 10001) {
    resultadoXp = "Radiante"}

console.log("O herói de nome " + nomeHeroi + " está no nível de " + resultadoXp)



