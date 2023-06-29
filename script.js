
const result = document.querySelector('.result')
const humanScore = document.querySelector('#human-score')
const machineScore = document.querySelector('#machine-score')
const motive = document.querySelector('.motive')


let humanScoreNumber = 0
let machineScoreNumber = 0


const playHuman = (humanChoice) => {

    playTheGame(humanChoice, playMachine())
}

const playMachine = () => {
    const choices = ['PEDRA', 'PAPEL', 'TESOURA']
    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber]

}

const playTheGame = (human, machine) => {


    if (human === machine) {
        result.innerHTML = "EMPATE"
    } else if (
        (human === 'PAPEL' && machine === 'PEDRA') ||
        (human === 'PEDRA' && machine === 'TESOURA') ||
        (human === 'TESOURA' && machine === 'PAPEL')) {

        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber

        result.innerHTML = "Você GANHOU!"

    } else {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = "Você PERDEU!"
    }

    motive.innerHTML = (`Sua escolha foi ${human} e a da maquina foi ${machine}`)

}

const reset = () => {
    location.reload()
}