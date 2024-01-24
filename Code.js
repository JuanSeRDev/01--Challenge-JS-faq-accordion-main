"use strict"

let acordeones = document.querySelector(".acordeon");
const titulos = document.querySelector(".h3");

acordeones.addEventListener("click", ()=>{
    if (acordeones.classList.contains("active")) {
        acordeones.classList.remove("active");
    } else {
        acordeones.classList.add("active")
    }
})