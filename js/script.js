const menuBtn = document.querySelector("#menu-btn")
const menu = document.querySelector(".menu-popup")
const closeMenu = document.querySelector(".exit")
const menuWrapper = document.querySelector(".menu-wrapper")
const orderBtn = document.querySelector(".order-btn")
const offerLogo = document.querySelector(".offer-logo")
const prevArrow = document. querySelector(".prev-arrow")
const nextArrow = document.querySelector(".next-arrow")

menuBtn.addEventListener("click", function(e){
    //console.log(e)
    menu.style.cssText = "position: absolute; background-color: #222; width: 100%; height: 100%; opacity: 0.95; display: flex; flex-direction: column; align-items: center; text-align: center;justify-content: center; color: #fff;"

    menuWrapper.style.cssText = "opacity: 0"
    orderBtn.style.cssText = "opacity: 0"
    offerLogo.style.cssText = "opacity: 0"
    prevArrow.style.cssText = "opacity:0"
    nextArrow.style.cssText = "opacity:0"
})

closeMenu.addEventListener("click",function(e){
    menu.style.cssText = "display:none"
    menuWrapper.style.cssText = "opacity: 1"
    offerLogo.style.cssText = "opacity: 1"
    orderBtn.style.cssText = "opacity: 1"
    prevArrow.style.cssText = "opacity:1"
    nextArrow.style.cssText = "opacity:1"

})
