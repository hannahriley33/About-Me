import isYes from './is-yes.js'

 const button = document.getElementById('button');

const score = document.getElementById('score');
const resultsAppear = document.getElementById('results');

button.addEventListener('click', () => {
    
    const name = prompt('What\'s your name?');
    const areYouSure = confirm('Do you want to take this quiz?');
    if (areYouSure === false) {
        return;
    }
    const question1 = prompt('Does Hannah like cats?');
    const question2 = prompt('Does Hannah like the beach?');
    const question3 = prompt('Does Hannah like bacon?');

    let count = 0;
    if (isYes(question1) === true) {
        count++;
    } 
    if (isYes(question2) === true) {
        count++;
    }
    if (isYes(question3) === true) {
        count++;
    }
    const quizDone = alert(`${name} you finished! Results are coming up.`);
   
let percentage = count / 3 * 100;  
let mathRound = Math.round(percentage);

score.textContent = `${name} you got ${count}/3 correct, which is ${mathRound}%!`;   
document.getElementById('results').style.visibility = 'visible';

});
