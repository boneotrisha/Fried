const menuBtn = document.querySelector("#menu-btn")
const menu = document.querySelector(".menu-popup")
const closeMenu = document.querySelector(".exit")
const menuWrapper = document.querySelector(".menu-wrapper")
const inputText = document.querySelector(".search-input")

menuBtn.addEventListener("click", function(e){
    console.log(e)
    menu.style.cssText = "position: absolute; background-color: #222; width: 100%; height: 100%; opacity: 0.95; display: flex; flex-direction: column; align-items: center; text-align: center;justify-content: center; color: #fff;"

    inputText.style.cssText = "opacity:0"
})

closeMenu.addEventListener("click",function(e){
    menu.style.cssText = "display:none"
    inputText.style.cssText = "opacity:1"
})
