const btn = document.getElementById("btn1")
const ansDiv = document.querySelector(".answer")

function clickEvent(){
    if(ansDiv.style.display==="block"){
        ansDiv.style.display="none"
    }
    else{
        ansDiv.style.display="block"
    }
}
btn.addEventListener("click",clickEvent)

console.log("hello")


