var students = []
var student = {
    name: "Jeremy Heiner",
    birthYear: 1990,
    course: "IFT 458",
    grade: 100,
    active: true,
    age: function(){
        if(this.active){
            return 2023 - this.birthYear
        }
        
    }
}

var student2 = {
    name: "Andy Moore",
    birthYear: 2000,
    course: "IFT 458",
    grade: 80,
    active: false,
    age: function(){
        if(this.active){
            return 2023 - this.birthYear
        }
        else{
            return "Not active"
        }
    }
}

students.push(student)
students.push(student2)
students.forEach((item)=> console.log(item.age()))
// console.log(student["name"])
// console.log(student.name)

// console.log(students)
// console.log(student2.age())
// console.log(student.age())