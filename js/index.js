// function table(a){
//     for(let i = 1 ; i <= 10 ; i++){
//         console.log(`${a} x ${i} = ${a * i}`)
//     }
// }
// table(2)
// console.log("<br>")
// table(3)
// console.log("<br>")
// table(4)
// console.log("<br>")
// table(5)

// function fn(a,b){
//     return a + b
// }
// console.log(fn(11,2,3,4,5))

// let person = {
//     name : 'Danish',
//     lname : 'Chouhan',
// }
// person.age = 17
// person.pesion = 'footballer'

// delete person.pesion

// console.log(person)

// for(let value in person){
//     console.log(value+ ';' + person[value])
// }

let currentTime = new Date()
var wantedItems = {hour : 'numeric' , minute : 'numeric' ,second : 'numeric'}
console.log(currentTime.toLocaleTimeString("en-US", wantedItems))