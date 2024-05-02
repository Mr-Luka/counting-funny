const liButtons = document.querySelectorAll("li");

const soloButton = document.querySelector(".solo-button");


function handleSolo (e){
    const button = e.currentTarget;
    console.log(button)
}

soloButton.addEventListener("click", handleSolo);


function handleLiClick(e){
    const button2 = e.currentTarget;
    console.log(button2)
}

liButtons.forEach(button=>{
    button.addEventListener("click", handleLiClick);
})