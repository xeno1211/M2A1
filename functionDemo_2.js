var age = 25
var salary = 15.00

const displayGreetings = function(name, year){
    console.log(`Happy new year ${year} ${name}`)
}

const displayGreetingsWithEmoji = function(name, year){
    console.log(`😊 😊Happy New Year ${year} ${name}😊 😊`)
}

var greet = {}

if(age > 10){
    greet = displayGreetings
}
else{
    greet = displayGreetingsWithEmoji
}

greet("Sam", 2023)