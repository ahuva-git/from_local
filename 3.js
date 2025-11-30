const button = document.querySelector("#button")
const input = document.querySelector("#input")
const h1 = document.querySelector("#h1")
const h3 = document.querySelector("#h3")

let win = 0
let lose = 0

const rand1 = Math.floor(Math.random()*100)+1
const rand2 = Math.floor(Math.random()*100)+1
const simanim = ["+","-","*","/"]
const randIndex = Math.floor(Math.random()*3)
const siman = simanim[randIndex]

h1.textContent = `What is ${rand1} ${siman} ${rand2}?`
h3.textContent = "win: 0 lose: 0"

if(siman == "+")
    correctAnswer = rand1 + rand2
if(siman == "-")
    correctAnswer = rand1 - rand2
if(siman == "*")
    correctAnswer = rand1 * rand2
if(siman == "/")
    correctAnswer = rand1 / rand2

button.addEventListener("click", ()=>{

    if(input.value == correctAnswer){
        win++
        alert("well done!!!")
        input.value = ""

        //אם ניצחו - יעשה את התהליך מהתחלה - יגריל מספר חדש
        const rand1 = Math.floor(Math.random()*100)+1
        const rand2 = Math.floor(Math.random()*100)+1
        const simanim = ["+","-","*","/"]
        const randIndex = Math.floor(Math.random()*3)
        const siman = simanim[randIndex]

        h1.textContent = `What is ${rand1} ${siman} ${rand2}?`

        if(siman == "+")
            correctAnswer = rand1 + rand2
        if(siman == "-")
            correctAnswer = rand1 - rand2
        if(siman == "*")
            correctAnswer = rand1 * rand2
        if(siman == "/")
            correctAnswer = rand1 / rand2
    }

    else if(input.value > correctAnswer || input.value < correctAnswer){
        lose++
        alert("try again :(")
        input.value = ""
    } 

       else if(input.value == ""){
        lose++
        alert("try again :(")
    }

    else {
        lose++
        alert("please enter only a number...")
        input.value = ""
    }

    h3.textContent = `win: ${win} lose: ${lose}`
})