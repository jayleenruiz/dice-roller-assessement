
let rolls = document.querySelector("#Rolls")
let numberOfRolls = document.querySelector("#number")
let total = document.querySelector("#Total")
let totalRolls = document.querySelector("#TotalRolls")
let firstRoll = document.querySelector("#dieRoll1")
let secondRoll = document.querySelector("#dieRoll2")
let thirdRoll = document.querySelector("#dieRoll3")
let fourthRoll = document.querySelector("#dieRoll4")
let allRolls = document.querySelector("#AllRolls")
let dieRolls = []
let totalValue = 0





rolls.addEventListener("click", function() {
    let numberOfRollsValue = numberOfRolls.value
    let counter = 1
while (counter <= numberOfRollsValue) {
    let randomRoll = (Math.floor( Math.random() * 6 ) +1)  
    dieRolls.push(randomRoll)
    totalValue += randomRoll
    counter += 1  
}
total.innerHTML = totalValue
console.log(dieRolls)
})

totalRolls.addEventListener("click", function() {
    let allRolls = document.querySelector("#allRolls")
    let counter = 0 
    while(counter < dieRolls.length) {
allRolls.innerHTML += "<li>"+ dieRolls[counter] +"</li>"
        counter += 1 
    }
})



