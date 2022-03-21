import pkg from 'enquirer';
const { Quiz } = pkg;
import {CHOICES, QUESTIONS, replaceObject} from "./questions.js";
import {replaceAll} from "./utils.js";

let answers = [];
function machiavelliTest() {
  let chain = Promise.resolve();
  QUESTIONS.forEach(({question}) => {
    chain = chain.then(() => {
      return new Quiz({
        name: 'machiavelli',
        message: question,
        choices: CHOICES,
        correctChoice: 0,
      }).run().then(value => {
        answers = [...answers, value.selectedAnswer]
      })
    })
  })
  return chain;
}

machiavelliTest().then(() => {
  const res = answers.reduce((accumulator, currentValue) => {
    return accumulator += Number(replaceAll(currentValue, replaceObject))
  }, 0)
  console.log(`You're on ${Math.ceil(res * 3.33)}% a Machiavellian`);
})
