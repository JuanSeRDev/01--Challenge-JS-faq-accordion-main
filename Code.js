"use strict"

const acordeones = document.querySelectorAll(".acordeon");
const titulo = document.querySelectorAll(".h3");

titulo.forEach((cadaTitulo, i)=>{
    titulo[i].addEventListener("click", ()=>{
        if (acordeones[i].classList.contains("active")){
            acordeones[i].classList.remove("active");
        } else{
            acordeones[i].classList.add("active")
        }
        
    })
});

