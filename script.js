let random = document.getElementsByClassName("number");
random=parseInt(Math.random()*100 + 1);
console.log(random);
let guess = document.getElementById("guessid");
let hint = document.getElementById("sc");
let value = guess.value;
let checkbtn = document.getElementsByClassName("check");
let bgcolor = document.getElementsByTagName("body");
let score = document.getElementsByClassName("score");
let highScore = document.getElementsByClassName("highscore");
let chances = 100;

function maincheck(){
    if(value === random)
    {
        hint.innerHTML = "<img src='https://emojis.wiki/emoji-pics/microsoft/star-struck-microsoft.png' alt='emoji'> + 'Hurray You Won' + <img src='https://emojis.wiki/emoji-pics/microsoft/star-struck-microsoft.png' alt='emoji'>";
        random.innerText = random;
        bgcolor.style.backgroundColor = "green";
        score.innerText = chances;
        highScore.innerText = chances;
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
    random.innerText="?";
    bgcolor.style.backgroundColor = "darkgrey";
    score.innerText = 100;
}

/*checkbtn.addEventListener("onclick", function maincheck(){
    if(value === random)
    {
        hint.innerHTML = "<img src='https://emojis.wiki/emoji-pics/microsoft/star-struck-microsoft.png' alt='emoji'> + 'Hurray You Won' + <img src='https://emojis.wiki/emoji-pics/microsoft/star-struck-microsoft.png' alt='emoji'>";
        random.innerText = random;
        bgcolor.style.backgroundColor = "green";
        score.innerText = chances;
        highScore.innerText = chances;
    }
    else
    {
        if(value > random)
        {
            hint.innerText = "Your Guess Is High";
            chances--;
        }
        else
        {
            hint.innerText = "Your Guess Is Low";
            chances--;
        }
    }
})*/