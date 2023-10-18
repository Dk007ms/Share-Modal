const modal=document.querySelector(".modal");
const container=document.querySelector(".container");
const wrapper=document.querySelector(".wrapper");
const cut=document.querySelector(".cutbtn");
const overlay = document.querySelector(".overlay");

function openmodal(){
    modal.classList.add("active");
    overlay.classList.add("overlayactive");
    container.classList.add("active2");
}

function cutbtn(){
    modal.classList.remove("active");
    overlay.classList.remove("overlayactive");
    container.classList.remove("active2");
}