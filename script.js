const btn = document.querySelector(".btn-reso");
const down = document.querySelector(".links");


btn.addEventListener("click",()=>{
    if(down.style.display==="block"){
        down.style.display="none"
    }
    else{ down.style.display="block"}
    
})

// btn.addEventListener("click", () => {
//     down.style.display = down.style.display === "block" ? "none" : "block";
// });

