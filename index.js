"use strict"


const menubutn = document.querySelector(".menu_bar")
const cross = document.querySelector(".fa-xmark")
const bars = document.querySelector(".fa-bars")
const links_btn = document.querySelector(".links_btn")



menubutn.addEventListener("click",function(e){

    cross.classList.toggle("none")
    bars.classList.toggle("none")
    links_btn.classList.toggle("showMenu")
    
    console.log("clicked");
} )