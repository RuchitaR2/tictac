console.log("WELCOME TO TIC TAC TOE")
let music = new Audio("music.mp3")
let audioTurn = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")
let turn ="X"

//functn to change the turn

const changeTurn = ()=>{
    return turn === "X"?"0": "X"
}

//FUNCTN TO CHECK FOR A WIN
const checkWin = ()=>{

}

// GAME logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', (boxtext)=>{
    if(boxtext.innerText === ''){
    boxtext.innerText = turn;
    changeTurn();
    audioTurn.play();
    checkWin();
    document.getElementsByClassName("info")[0].innerText = " Turn for " + turn;

    
}
    })
})