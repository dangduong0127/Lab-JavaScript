'use strict'

let secretNumber = Math.trunc(Math.random() * 20) + 1;
const message = document.querySelector('.message');
let highscore = 0;
let score = 20;
console.log(secretNumber);

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);

    console.log(guess)
    if(guess >= 1){
        if(guess === secretNumber){
            message.textContent = 'Congratulation you wins!!!';
            document.querySelector('.number').textContent = secretNumber;
            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').style.width = '30rem';
            if(score > highscore){
                highscore = score;
                document.querySelector('.highscore').textContent = highscore;
            }
        } else if (guess > secretNumber){
            message.textContent = 'Too High!!!';
            score--;
            document.querySelector('.score').textContent = score;
            if(score < 1){
                message.textContent = 'you lose!!!';
                document.querySelector('.number').textContent = secretNumber;
            }
        } else if (guess < secretNumber){
            message.textContent = 'Too Low!!!';
            score--;
            document.querySelector('.score').textContent = score;
            if(score < 1){
                message.textContent = 'you lose!!!';
                document.querySelector('.number').textContent = secretNumber;
            }
        }
    } else {
        message.textContent = 'No Number!!!'
    }
})

document.querySelector('.again').addEventListener('click', function(){
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    console.log(secretNumber)
    message.textContent = 'Start guessing...';
    score = 20;
    document.querySelector('.guess').value = '';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    
})