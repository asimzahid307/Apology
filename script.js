// Adding simple variables
// let a = 10;
// let b = 20;

// let c = a + b;
// let d = a - b;
// let e = a * b;
// let f = a / b;


// console.log(c)
// console.log(d)
// console.log(e)
// console.log(f)

// Function
// let car = { make: "Honda", model: "Civic", year: "2007", color: "Silver" };

// function guessCar(params) {

//     // let car = { make: "Honda", model: "Civic", year: "2007", color: "Silver" };

//     if (car.make == "Honda") {
//         console.log("You are right!")
//     } else {
//         console.log("No! Its a honda.")
//     }
// }

// let result = guessCar();

//  Creating object

const person1 = {
    fname: "John",
    lname: "doe",
    age: 30,
    slogan: () => console.log("Hello fellas!"),
    voice: () => console.log("My voice is good!"),
};

const person2 = {
    fname: "Lara",
    lname: "Croft",
    age: 25,
    slogan: function () { console.log("I love mountains!") },
    voice: function () { console.log("I have a slow voice!") },
};

console.log(person1['fname'])
console.log(person1['lname'])
console.log(person1['age'])
person1.slogan()
person1.voice()

console.log(person2.fname)
console.log(person2.lname)
console.log(person2.age)
person2.slogan()
person2.voice()




