let timer = 30
let hit = 2
let score = 0

function createBalls() {
    let clutter = '';
    for (var i = 0; i < 160; i++) {
        let val = Math.floor(Math.random() * 10)
        clutter += `<div class="ball">${val}</div>`
    }
    document.querySelector(".pbtm").innerHTML = `<div id="ballsection">${clutter}</div>`
}

function setHeader() {
    document.querySelector(".ptop").innerHTML = `<div class="p-ele">
                    <h4>Hit</h4>
                    <div id="hitval" class="box"></div>
                </div>
                <div class="p-ele">
                    <h4>Time</h4>
                    <div id="timerval" class="box">30</div>
                </div>
                <div class="p-ele">
                    <h4>Score</h4>
                    <div id="scoreval" class="box">0</div>
                </div>`

}

function restartGame() {
    document.querySelector(".pbtm").innerHTML = `
    <div id="finalscorediv">
    <h1>Good! Its Over. Now go for Sleep 😉</h1>
    <h3 id="scoremsg"> Your Score is ${score}</h3>
    <button id="replaybtn">Try Again</button>
    </div>
    `
    document.querySelector("#replaybtn").addEventListener('click', function () {
        timer = 30
        score = 0
        startGame();
    })
}

function runTimer() {
    var timerInterval = setInterval(() => {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerval").innerHTML = timer
        } else {
            clearInterval(timerInterval);
            restartGame()
        }
    }, 1000);
}

function getNewHit() {
    hit = Math.floor(Math.random() * 10)
    document.querySelector("#hitval").innerHTML = hit
}

function increaseScore() {
    score += 10;
    document.querySelector("#scoreval").innerHTML = score
}

function startGame() {
    setHeader();
    createBalls();
    getNewHit();
    runTimer();
    document.querySelector("#scoreval").innerHTML = score
    document.querySelector(".pbtm").addEventListener('click', function (element) {
        let clckNumber = Number(element.target.textContent)
        let style = element.target.style
        if (clckNumber === hit) {
            style.backgroundColor = "green";
            setTimeout(() => {
                increaseScore();
                createBalls();
                getNewHit();
            }, 300);
        } else if(clckNumber < 10) {
            style.backgroundColor = "red";
        }
    })
}

document.querySelector(".startbtn").addEventListener('click', function () {
    startGame();
})
