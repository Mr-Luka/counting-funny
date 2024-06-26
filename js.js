const liButtons = document.querySelectorAll("li");
const nav = document.querySelector("nav");
const soloButton = document.querySelector(".solo-button");
const modalOuter = document.querySelector(".modal-outer");
const modalInner = document.querySelector(".modal-inner");



function closeModal(){
    modalOuter.classList.remove("open");
    nav.classList.remove("closed")
    soloButton.classList.remove("closed")
}

function openModal(){
    modalOuter.classList.add("open")
    nav.classList.add("closed")
    soloButton.classList.add("closed")
}


soloButton.addEventListener("click", ()=>{
    openModal()
});

modalOuter.addEventListener("click", e=>{
    const isOutside = !e.target.closest(".modal-inner");
    if(isOutside){
        closeModal()
    }
})

function handleLiClick() {
    modalOuter.classList.add("open");
    nav.classList.add("closed")
    soloButton.classList.add("closed")
}

liButtons.forEach(button=>{
    button.addEventListener("click", handleLiClick);
})




// Counting time
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");
const reset = document.querySelector(".reset");
const start = document.querySelector(".start");
const pause = document.querySelector(".pause")
let totalSeconds = 0;
let pauseE = false;
let intervalId;

function setTime(){
    totalSeconds++;
    seconds.textContent = pad(parseInt(totalSeconds%60));
    minutes.textContent = pad(parseInt(totalSeconds/60));
}

function pad (value) {
    const valString = value + "";
    if(valString.length < 2) {
        return "0" + valString;
    } else {
        return valString;
    }
};


start.addEventListener("click", function(){
    if(!intervalId){
        if(pauseE){
            intervalId = setInterval(setTime, 1000);
            pauseE = false;
        } else {
    intervalId = setInterval(setTime, 1000);
        }
    }
});

reset.addEventListener("click", ()=>{
    totalSeconds = 0;
})

pause.addEventListener("click", ()=>{
    pauseE = !pauseE;
    if(pauseE){
        clearInterval(intervalId);
        intervalId = null;
        
    }
})