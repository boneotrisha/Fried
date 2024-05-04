const menuBtn      =document.querySelector("#menu-btn")
const menu         =document.querySelector(".menu-popup")
const closeMenu    =document.querySelector(".exit")
const menuWrapper  =document.querySelector(".menu-wrapper")
const cancel       =document.querySelector(".cancel")
const firstSection =document.querySelector(".first-section")
const secondSection=document.querySelector(".second-section")
const thirdSection =document.querySelector(".third-section")
const google       =document.querySelector(".google")
const continu      =document.querySelector(".continu")
const editSection  =document.querySelector(".edit-section")

menuBtn.addEventListener("click", function(e){
    console.log(e)
    menu.style.cssText = "position: absolute; background-color: #222; width: 100%; height: 100%; opacity: 0.95; display: flex; flex-direction: column; align-items: center; text-align: center;justify-content: center; color: #fff;";
    cancel.style.cssText = "opacity:0;"
    continu.style.cssText = "opacity:0"
    firstSection.style.cssText ="opacity: 0"
    google.style.cssText = "opacity: 0"
    editSection.style.cssText = "opacity:0"
    secondSection.style.cssText = "opacity:0"
    thirdSection.style.cssText = "opacity:0"
})

closeMenu.addEventListener("click",function(e){
    menu.style.cssText = "display:none"
    cancel.style.cssText = "opacity:1;"
    continu.style.cssText = "opacity:.88"
    firstSection.style.cssText ="opacity: 1"
    google.style.cssText = "opacity: .78"
    editSection.style.cssText = "opacity:.78"
    secondSection.style.cssText = "opacity:1"
    thirdSection.style.cssText = "opacity:1"
})
