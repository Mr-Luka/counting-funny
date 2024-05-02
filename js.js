const liButtons = document.querySelectorAll("li");
const nav = document.querySelector("nav");
const soloButton = document.querySelector(".solo-button");
const modalOuter = document.querySelector(".modal-outer");
const modalInner = document.querySelector(".modal-inner");


function handleSolo (){
    modalOuter.classList.add("open");
    nav.classList.add("closed")
    if(modalOuter === "open") {
        window.addEventListener("click", function(){
            modalOuter.classList.remove("open")
        })
    }
}

soloButton.addEventListener("click", handleSolo);







function handleLiClick() {
    modalOuter.classList.add("open");
}

liButtons.forEach(button=>{
    button.addEventListener("click", handleLiClick);
})