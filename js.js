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


