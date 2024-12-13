//---------------------------------- SECTION NO 1 -------------------------------------------
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

//---------------------------------- SECTION NO 2 -------------------------------------------
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
//---------------------------------- SECTION NO 3 -------------------------------------------

//  Creating object


// const person1 = {
//     fname: "John",
//     lname: "doe",
//     age: 30,
//     slogan: () => '<p>Hello fellas!</p>',
//     voice: () => '<p>My voice is good!</p>',
// };

// const person2 = {
//     fname: "Lara",
//     lname: "Croft",
//     age: 25,
//     slogan: () => 'I love mountains!',
//     voice: () => 'My voice is stealth!',
// };

// console.log(person1['fname'])
// console.log(person1['lname'])
// console.log(person1['age'])
// person1.slogan()
// person1.voice()

// console.log(person2.fname)
// console.log(person2.lname)
// console.log(person2.age)
// person2.slogan()
// person2.voice()





// document.getElementById('demo').innerHTML = person1.fname;
// document.getElementById('1').innerHTML = person1.fname;
// document.getElementById('2').innerHTML = person1.lname;
// document.getElementById('3').innerHTML = person1.age;
// document.getElementById('4').innerHTML = person1.slogan();
// document.getElementById('5').innerHTML = person1.voice();


// document.getElementById('6').innerHTML = person2.fname;
// document.getElementById('7').innerHTML = person2.lname;
// document.getElementById('8').innerHTML = person2.age;
// document.getElementById('9').innerHTML = person2.slogan();
// document.getElementById('10').innerHTML = person2.voice();



//------------------------------------------- SECTION NO 4 --------------------------------------
// now testing final results with objects

// const person1 = {
//     fname: "John",
//     lname: "Doe",
//     age: 25,
//     email: "john@gmail.com",
//     task: () => "<p>Engineer</p>",
// }


// const person2 = {
//     fname: "Carry",
//     lname: "Holmes",
//     age: 22,
//     email: "Carry@gmail.com",
//     task: () => "<p>Consultant</p>",
// }


// const person3 = {
//     fname: "Lara",
//     lname: "Croft",
//     age: 19,
//     email: "lara@gmail.com",
//     task: () => "<p>Assasin</p>",
// }


// const person4 = {
//     fname: "Jones",
//     lname: "Wick",
//     age: 28,
//     email: "jones@gmail.com",
//     task: () => "<p>Actor</p>",
// }


// // getting data with DOM at web
// // person 1 data
// document.getElementById("1").innerHTML = person1['fname'];
// document.getElementById("2").innerHTML = person1['lname'];
// document.getElementById("3").innerHTML = person1['age'];
// document.getElementById("4").innerHTML = person1['email'];
// document.getElementById("5").innerHTML = person1.task();

// // person 2 data
// document.getElementById("6").innerHTML = person2['fname'];
// document.getElementById("7").innerHTML = person2['lname'];
// document.getElementById("8").innerHTML = person2['age'];
// document.getElementById("9").innerHTML = person2['email'];
// document.getElementById("10").innerHTML = person2.task();

// // person 3 data
// document.getElementById("11").innerHTML = person3['fname'];
// document.getElementById("12").innerHTML = person3['lname'];
// document.getElementById("13").innerHTML = person3['age'];
// document.getElementById("14").innerHTML = person3['email'];
// document.getElementById("15").innerHTML = person3.task();

// // person 4 data
// document.getElementById("16").innerHTML = person4['fname'];
// document.getElementById("17").innerHTML = person4['lname'];
// document.getElementById("18").innerHTML = person4['age'];
// document.getElementById("19").innerHTML = person4['email'];
// document.getElementById("20").innerHTML = person4.task();


// cleared

// // Adding values after declaring an object
// const person1 = {};

// // Now add properties
// person1['fname'] = "John";
// person1['lname'] = "doe";
// person1['age'] = 20;
// person1['email'] = "john@gmail.com";
// // Focus
// // person1.work() = "<p>Engineer</p>"; // Wrong

// // correct way
// person1.work = () => "<p>Engineer</p>";

// // getting data on web with DOM
// document.getElementById("1").innerHTML = person1['fname'];
// document.getElementById("2").innerHTML = person1['lname'];
// document.getElementById("3").innerHTML = person1['age'];
// document.getElementById("4").innerHTML = person1['email'];
// document.getElementById("5").innerHTML = person1.work();






