let gameNum = document.getElementsByClassName("number");
let random = parseInt(Math.random()*100 + 1);
console.log(random);
let guess = document.getElementById("guessid");
let hint = document.getElementById("sc");
let checkBtn = document.getElementById("check");
let bgcolor = document.getElementsByTagName("body");
let score = document.getElementById("score");
let highscore = document.getElementById("highscore");
let chances = 100;

function maincheck(){
    let value = parseInt(guess.value);
    
    if(value === random)
    {
        hint.innerText = "🤩🤩 Hurray You Won 🤩🤩";
        gameNum[0].innerText = random;
        bgcolor[0].style.backgroundColor = "green";
        score.innerText = chances;
        highscore.innerText = chances;
        checkBtn.style.visibility = "hidden";
    }
    else
    {
        if(value > random)
        {
            hint.innerText = "Your Guess Is High";
            chances--;
            score.innerText = chances;
        }
        else
        {
            hint.innerText = "Your Guess Is Low";
            chances--;
            score.innerText = chances;
        }
    }
}
function reloadgame(){
    gameNum[0].innerText="?";
    bgcolor[0].style.backgroundColor = "#222";
    score.innerText = 100;
    guess.value = "";
    hint.innerText = "Start Guessing";
    highscore.innerText = "0";
    checkBtn.style.visibility = "visible";
}