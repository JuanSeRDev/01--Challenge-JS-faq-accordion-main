"use strict"

const acordeones = document.querySelectorAll(".acordeon");
const titulo = document.querySelectorAll(".h3");
const image = document.querySelectorAll(".img");

titulo.forEach((cadaTitulo, i)=>{
    titulo[i].addEventListener("click", ()=>{
        if (acordeones[i].classList.contains("active") & image[i].classList.contains("minus")){
            acordeones[i].classList.remove("active");
            image[i].classList.remove("minus");
        } else{
            acordeones[i].classList.add("active");
            image[i].classList.add("minus");
        }
    })
});

