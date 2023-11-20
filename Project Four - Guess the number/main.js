let randomNUM = Math.floor(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector("#lowOrHi")
const startOver = document.querySelector(".resultParas")

const p = document.createElement('p');

let prevGuess = []
let numGuess = 1

let playGame = true

if(playGame){
    submit.addEventListener("click",function(e){
        e.preventDefault();
        const guess = userInput.value;
        validateGuess(guess);
    })
}

function validateGuess(guess){
    console.log(typeof(guess))
    if(guess > 100){
        alert("Please enter the value less then 100")
    }else if(guess < 0){
        alert("Please enter posoitive value")
    }else if(guess == ''){
        alert("Enter Value")
    }
    else{
        prevGuess.push(guess)
        if(numGuess === 10){
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${randomNUM}`);
            endGame()
        }else{
            displayGuess(guess);
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess === randomNUM){
        displayMessage(`You guessed it right`);
        endGame();
    }else if(guess < randomNUM){
        displayMessage(`Number is Low`)
    }else if(guess > randomNUM){
        displayMessage(`Number is High`)
    }
}

function displayGuess(guess){
    // clean the input
    userInput.value = ''

    guessSlot.innerHTML += `${guess} `
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message){
    lowOrHi.innerHTML = `${message}`
}

function endGame(){
    userInput.value = "";
    userInput.setAttribute('disabled','')
    submit.setAttribute('disabled','')
    // p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame();
}

function newGame(){
    const newGameButton = document.querySelector("#newGame")
    newGameButton.addEventListener('click',function(e){
        randomNUM = Math.floor(Math.random() * 100 + 1);
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numGuess}`
        userInput.removeAttribute('disabled')
        submit.removeAttribute('disabled')
        lowOrHi.innerHTML = ""
        startOver.removeChild(p)
        playGame = true
    })
}



