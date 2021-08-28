var container = document.querySelector(".container");
var card = document.querySelector(".card")
 var heading = document.querySelector(".heading")
 var button = document.querySelector(".button")
var ps = document.querySelector(".console")
var buy = document.querySelector(".purchase")

container.addEventListener("mousemove", (e)=>{
    console.log("I am inside container")
    var Xpoint = (window.innerHeight/2 - e.pageX)/8
    var Ypoint = (window.innerWidth/2 - e.pageY)/8
    card.style.transform = `rotateY(${Xpoint}deg) rotateX(${Ypoint}deg)`
    console.log(Xpoint,Ypoint)
})
 
container.addEventListener("mouseenter", (e)=>{
heading.style.transform = "translateZ(15px)"
heading.style.transition = "1s ease"
})



container.addEventListener("mouseleave", (e)=>{
    console.log("I left the container")
    card.style.transform = "rotateY(0deg) rotateX(0deg)"
    heading.style.transform = "translateZ(0px)"
})
button.addEventListener("mouseenter", (e)=>{
    button.style.transform = "rotateY(45deg) rotateX(45deg)"
    button.style.transform = "translateZ(40px)"
})

 button.addEventListener("mouseleave", (e)=>{
    console.log("I left the container")
    button.style.transform = "rotateY(0deg) rotateX(0deg)"
    button.style.transform = "translateZ(0px)"
 })

 buy.addEventListener("mouseenter", (e)=>{
    buy.style.transform = "rotateY(45deg) rotateX(45deg)"
    buy.style.transform = "translateZ(30px)"
})

 buy.addEventListener("mouseleave", (e)=>{
    console.log("I left the container")
    buy.style.transform = "rotateY(0deg) rotateX(0deg)"
    buy.style.transform = "translateZ(0px)"
 })

ps.addEventListener("mouseenter", (e)=>{
    ps.style.transform = "rotate(45deg) translateZ(40px)"
    ps.style.transition = "1s ease"
})

ps.addEventListener("mouseleave", (e)=>{
    console.log("I left the container")
    ps.style.transform = "rotate(0deg) translateZ(0px)"
    ps.style.transition = "1s ease"
})