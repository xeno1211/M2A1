var age = 25
var salary = 15.00

const displayGreetings = function(name, year){
    console.log(`Happy new year ${year} ${name}`)
}

const displayGreetingsWithEmoji = function(name, year){
    console.log(`😊 😊Happy New Year ${year} ${name}😊 😊`)
}

const greet = function(name, year, func){
    func(name, year)
}

greet("Sam", 2023, displayGreetingsWithEmoji)
greet("Jane", 2023, displayGreetings)