var randomNumber=Math.floor((Math.random()*101));


var guessField=document.querySelector('#guessField');

var lastResult = document.querySelector('.lastResult');
var lowOrHi = document.querySelector('.lowOrHi');
var guessSubmit = document.querySelector('.guessSubmit');
var guessField = document.querySelector('.guessField');
console.log(guessField);

var guessCoutn=1;
var resetButton;
guessField.focus();

function checkGuess()
{
    // console.log('我是函数');
    // document.write('我是结论');
   guesses.textContent += guessField.value+" ";
   guesses.style.backgroundColor="red";
}

// checkGuess();
guessSubmit.addEventListener('click',checkGuess)