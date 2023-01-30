// function greetTheStudent(studentName){// named function
//     return `Hello there ${studentName}!`
//     }

// const greetTheStudent = function (studentName){ // anonymous function
//     return `Hello there ${studentName}!`
//     }

// const greetTheStudent =  (studentName)=>{ // fat arrow
//     return `Hello there ${studentName}!`
//     }
    
const greetTheStudent = studentName => `Hello there ${studentName}!`
    
const fullName = (firstName, middleName, lastName)=> `${lastName}, ${middleName}, ${firstName}`

student = "Jeremy Heiner"
const greet = greetTheStudent(student)
console.log(greet)

const titleName = fullName("Jeremy", "S.", "Heiner")
console.log(titleName)