// Eindopdracht: KleurenToggle 


const btn1 = document.getElementById("btn-hamburgermenu")
const menu = document.querySelector(".menu")
const bodyTag = document.querySelector('.body')

//Deel 1 toggle menu

const toggleMenu = function () {
    menu.classList.toggle("toggle-menu")
}

btn1.addEventListener("click", toggleMenu)


//Deel 2 background color meegeven

const makeHome = document.querySelector(".item-home")
const makeRed = document.querySelector(".item-one")
const makeOrange = document.querySelector(".item-two")
const makePurple = document.querySelector(".item-three")
const makeGreen = document.querySelector(".item-four")


const makeBackgroundHome = function () {
    bodyTag.classList.remove("make-red")
    bodyTag.classList.remove("make-orange")
    bodyTag.classList.remove("make-purple")
    bodyTag.classList.remove("make-green")
    menu.classList.remove("toggle-menu")
    const text = document.querySelector(".text-kleur")
    text.innerHTML = "Dit is de kleur azure";
}

makeHome.addEventListener("click", makeBackgroundHome);

const makeBackgroundRed = function () {
    bodyTag.classList.add("make-red")
    bodyTag.classList.remove("make-orange")
    bodyTag.classList.remove("make-purple")
    bodyTag.classList.remove("make-green")
    bodyTag.classList.remove('item-home')
    menu.classList.remove("toggle-menu")
    const text = document.querySelector(".text-kleur")
    text.innerHTML = "Dit is de kleur rood";
}

makeRed.addEventListener("click", makeBackgroundRed);

const makeBackgroundOrange = () => {
    bodyTag.classList.remove("make-red")
    bodyTag.classList.add("make-orange")
    bodyTag.classList.remove("make-purple")
    bodyTag.classList.remove("make-green")
    menu.classList.remove("toggle-menu")
    const text = document.querySelector(".text-kleur")
    text.innerHTML = "Dit is de kleur oranje";
}
makeOrange.addEventListener("click", makeBackgroundOrange)

const makeBackgroundPurple = () => {
    bodyTag.classList.remove("make-red")
    bodyTag.classList.remove("make-orange")
    bodyTag.classList.add("make-purple")
    bodyTag.classList.remove("make-green")
    menu.classList.remove("toggle-menu")
    const text = document.querySelector(".text-kleur")
    text.innerHTML = "Dit is de kleur paars";
}
makePurple.addEventListener("click", makeBackgroundPurple);

const makeBackgroundGreen = () => {
    bodyTag.classList.remove("make-red")
    bodyTag.classList.remove("make-orange")
    bodyTag.classList.remove("make-purple")
    bodyTag.classList.add("make-green")
    menu.classList.remove("toggle-menu")
    const text = document.querySelector(".text-kleur")
    text.innerHTML = "Dit is de kleur groen";
}
makeGreen.addEventListener("click", makeBackgroundGreen);

