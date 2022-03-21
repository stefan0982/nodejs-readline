import * as readline from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process';
import {QUESTIONS} from "./questions.js";

const rl = readline.createInterface({input, output});

console.log(`To pass this machiavellian test for each given question answer with:
  1 - strongly disagree
  2 - disagree
  3 - neutral
  4 - agree
  5 - strongly agree
`)

rl.on('pause', async () => {
  const answer = await rl.question('Are you sure you want to exit?(y/n) ');
  if (answer.match(/^y(es)?$/i)) process.exit(0);
  else machiavelliTest()
});

async function machiavelliTest() {
  let answers = [];
  for (const [index, {question}] of QUESTIONS.entries()) {
    const answer = await rl.question(`${question} - `);
    answers = [...answers, answer];
    if (index === QUESTIONS.length - 1) {
      const result = answers.reduce((accumulator, currentValue) => {
        return accumulator += parseInt(currentValue);
      }, 0);
      if (isNaN(result)) {
        console.log('You did something wrong, try again')
      } else {
        console.log(`You're on ${Math.ceil(result * 3.33)}% a Machiavellian`)
      }
      rl.pause()
    }
  }
}
machiavelliTest();


