var randomNumber = Math.floor(Math.random() * 100) + 1;


var guesses = document.querySelector('.guesses');
var lastResult = document.querySelector('.lastResult');
var lowOrHi = document.querySelector('.lowOrHi');
var guessSubmit = document.querySelector('.guessSubmit');
var guessField = document.querySelector('.guessField');


var guessCount=1;
var resetButton;
guessField.focus();

function checkGuess()
{
    var userGuess=Number(guessField.value);

    if(guessCount===1)
    {
        guesses.textContent='上次猜的数';
    }

    guesses.textContent += userGuess + ' ';

    if(userGuess===randomNumber)
    {
        lastResult.textContent='猜对了呢！';
        lastResult.style.backgroundColor='green';
        lowOrHi.textContent='';
        setGameOber();
    }

    else if(guessCount==10)
    {
        lastResult.textContent='!!!!';
        lowOrHi.textContent='';
        setGameOber();
    }

    else
    {
        lastResult.textContent='错了呢!';
        lastResult.style.backgroundColor='red';

        if(userGuess<randomNumber)
        {
            lowOrHi.textContent='低了呢！';
        }

        else if(userGuess>randomNumber)
        {
            lowOrHi.textContent='高了呢！';
        }

    }

    guessCount++;
    guessField.value='';
    guessField.focus();
}


// checkGuess();
guessSubmit.addEventListener('click',checkGuess)

// function setGameOber()
// {
//     var resetButton=document.querySelector(" div.resultParas p:last-child");
//     console.log(resetButton);
//     resetButton.style.display="block";
// }

function setGameOber()
{
    guessField.disabled=true;
    guessSubmit.disabled=true;
    resetButton=document.createElement('button');
    resetButton.textContent='开始游戏';
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click',resetGame);
}

function resetGame()
{
    guessCount=1;
    var resetParas=document.querySelectorAll('.resultParas p')
    for(var i = 0 ; i < resetParas.length ; i++) {
        resetParas[i].textContent = '';
      }
      resetButton.parentNode.removeChild(resetButton);
      guessField.disabled = false;
      guessSubmit.disabled = false;
      guessField.value = '';
      guessField.focus();
      lastResult.style.backgroundColor = 'white';
      randomNumber = Math.floor(Math.random() * 100) + 1;
}