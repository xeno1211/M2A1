var age = 25
var salary = 15.00

const displayGreetings = function(name, year){
    console.log(`Happy new year ${year} ${name}`)
}

const displayGreetingsWithEmoji = function(name, year){
    console.log(`ð ðHappy New Year ${year} ${name}ð ð`)
}

var greet = {}

if(age > 10){
    greet = displayGreetings
}
else{
    greet = displayGreetingsWithEmoji
}

greet("Sam", 2023)