'use strict';

let SecretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
console.log(SecretNumber)
document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess)
    
    if(!guess){
        document.querySelector('.message').textContent = 'No Number!!';
    } else if(guess === SecretNumber){
        document.querySelector('.message').textContent = 'You Wins!!!';
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = SecretNumber;
        if(score > highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    } else if(guess !== SecretNumber){
        if(score > 1){
            document.querySelector('.message').textContent = guess > SecretNumber ? 'Too High!!!' : 'Too Low!!!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You Lose!!!';
            document.querySelector('.score').textContent = 0;
            document.querySelector('.number').textContent = SecretNumber;
        }
    }
});

document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    SecretNumber = Math.trunc(Math.random() * 20) + 1;

    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.guess').value = '';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';

});
