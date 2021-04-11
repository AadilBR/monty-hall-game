const { randomInt } = require('crypto')
const readlineSync = require('readline-sync')
const chalk = require('chalk')

const car = 'Tesla'// notre gros lot
const portes = ['une chèvre', 'une chèvre', 'une chèvre'] // 3 chèvres par défaut derrière chacune des portes
const hiddenCar = randomInt(0, 3) // un nombre aléatoire entre 0 et 2
portes[hiddenCar] = car // mettre notre voiture derriere l'une des portes

do {
  console.log(`===============================NEW GAME===============================`)
  console.log(portes)


  let playerChoice = readlineSync.keyIn('\nChoisissez une porte ? 1, 2 ou 3\n press 0 to exit game\n >', { limit: ['$<1-3>', '0'] })
  playerChoice = Number(playerChoice)

  if (playerChoice === 0) {
    console.log(chalk.yellow(`\nA bientot !`))
    process.exit(0)
  }
  console.clear()

  playerChoice -= 1


  let goat1 = 0
  do {
    goat1 = randomInt(0, 3)

  } while (goat1 === playerChoice || goat1 === hiddenCar)


  console.log((`\nVous avez choisi la porte n° ${playerChoice + 1},\n\nje vais vous dévoiler ce qu'il y a derrière la porte n° ${goat1 + 1} :`) + chalk.yellow(` ${portes[goat1]} `))

  if (readlineSync.keyInYN(`\nVoulez-vous changer de porte ? `)) {
    playerChoice = portes.length - (playerChoice + goat1)
  }
  if (playerChoice === hiddenCar) {
    console.log(chalk.green(`\nBravo vous avez gagné une superbe ${portes[hiddenCar]}`))
  } else {
    console.log(chalk.red(`\nDommage pour la voiture mais vous ne repartez pas les mains vides,\nvous avez quand meme gagné cette superbe biquette MMMéééééééé !!!!!`))
  }


} while (readlineSync.keyInYN('\nVoulez-vous rejouer ? '))

