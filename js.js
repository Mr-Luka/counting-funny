const liButtons = document.querySelectorAll("li");
const nav = document.querySelector("nav");
const soloButton = document.querySelector(".solo-button");
const modalOuter = document.querySelector(".modal-outer");
const modalInner = document.querySelector(".modal-inner");

// Counting time
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");
const reset = document.querySelector(".reset");
const start = document.querySelector(".start");
const pause = document.querySelector(".pause")
let totalSeconds = 0;
let pausE = false;
let intervalId;

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
function pad (value) {
    const valString = value + "";
    if(valString.length < 2) {
        return "0" + valString;
    } else {
        return valString;
    }
}

function handleStart(){

}

start.addEventListener("click", handleStart);