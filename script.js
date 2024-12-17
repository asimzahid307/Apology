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

// delete person1["fname"];

// // getting data on web with DOM
// document.getElementById("1").innerHTML = person1['fname'];
// document.getElementById("2").innerHTML = person1['lname'];
// document.getElementById("3").innerHTML = person1['age'];
// document.getElementById("4").innerHTML = person1['email'];
// document.getElementById("5").innerHTML = person1.work();



// // Nested object and its accessing
// const car = {
//     make: "Honda",
//     model: "Civic",
//     year: 2007,
//     owners: {
//         first: "Unknown",
//         second: "Unknown",
//         current: {
//             status: "Transferred",
//             data: {
//                 from: "person 1",
//                 to: "person 2",
//             },

//         },
//     },

// };


// document.getElementById("1").innerHTML = car['make'];
// document.getElementById("2").innerHTML = car['model'];
// document.getElementById("3").innerHTML = car['year'];
// document.getElementById("4").innerHTML = car['owners']['current']['status'];
// document.getElementById("5").innerHTML = car.owners.current.data['to'];

// --------------------------------------------------------- Section no 5 -------------------------------

// Object Constructors
// function Person(first, last, age) {
//     this.fname = first;
//     this.lname = last;
//     this.age = age;
//     // Default value
//     this.country = "Pakistan";
// }


// // Now creating new objects using constructor function
// const person1 = new Person("John", "doe", 20);
// const person2 = new Person("Lara", "croft", 25);

// // Adding a property to an object
// // By doing this new property will be added to just custom object, not on all objects
// person1.nationality = "Pakistani";

// document.getElementById("1").innerHTML = person1['fname'];
// document.getElementById("2").innerHTML = person1['lname'];
// document.getElementById("3").innerHTML = person1['age'];
// document.getElementById("3a").innerHTML = person1['country'];
// document.getElementById("3b").innerHTML = person1['nationality'];

// document.getElementById("4").innerHTML = person2['fname'];
// document.getElementById("5").innerHTML = person2['lname'];
// document.getElementById("6").innerHTML = person2['age'];
// document.getElementById("6a").innerHTML = person2['country'];
// document.getElementById("6b").innerHTML = person2['nationality'];


// ------------------------------------------------------- Section no 6 ---------------------------
// Construct object function and add method (function)
// function Person(first, last) {
//     this.fname = first,
//     this.lname = last,
//     this.fullName = () => this.fname + " " + this.lname;
// }

// const person1 = new Person("John", "Doe");

// // console.log(person1.fname);
// // console.log(person1.lname);

// // console.log(person1.fullName())

// // Creating a method for changing name
// // person1.changeName = (name) => this.fname = name;

// person1.changeName = function (name) {
//     this.fname = name;
// }


// // Now using method
// person1.changeName("Aberama");

// console.log(person1.fullName())

// ----------------------------------------------- Section no 7 --------------------------------------

// Creating constructor object fuction and assigning new property using prototype
// function Person(first , last) {
//     this.fname = first,
//     this.lname = last
// }

// // adding a property using prototype
// Person.prototype.gender = "Male";

// // adding a method (Function) using prototype
// // Person.prototype.fullName = () => this.fname + " " + this.lname;
// Person.prototype.fullname = function () {
//     return this.fname + " " + this.lname;
// }

// const person1 = new Person("John" , "Doe", "male");



// console.log(person1['gender'])
// console.log(person1.fullname())


// ----------------------------------------------- Section no 8 --------------------------------------
// Adding different prototype values to check output
// function Person(first , last) {
//     this.fname = first,
//     this.lname = last
// }

// Person.prototype = {age: 20};

// const person1 = new Person("John" , "Doe");

// Person.prototype = {age: 55};

// const person2 = new Person("Lara" , "Croft");

// console.log(person1.age);
// console.log(person2.age);

// ---------------------------------------------- Section no 9 ---------------------------
// review learning
// function Car(carmake , caryear) {
//     this.make = carmake,
//     this.year = caryear
// }

// // add property
// Car.prototype = { status: "Sold!" }

// const car1 = new Car("Honda" , 2007);

// console.log(car1['make']);
// console.log(car1['year']);
// console.log(car1['status']);

// ---------------------------------------------- Section no 10 ---------------------------
// Arrays
// const car1 = "Honda";
// const car2 = "Toyota";
// const car3 = "Suzuki";

// // console.log(car1,car2,car3)

// const car = ["Honda", "Toyota", "Suzuki"];

// // console.log(car[0] , car[1] , car[2])


// const person = [];

// // adding persons
// person[0] = "John";
// person[1] = "Doe";
// // another type of variable
// person[2] = 20;

// // console.log(person[0], person[1], person[2])

// // custom object to check array.isArray and instanceof
// const cars = { make: "Honda", model: "Civic", year: 2007 };

// // Checking array if it is array or not
// console.log(Array.isArray(cars))
// console.log(Array.isArray(person))

// // using instance
// console.log(cars instanceof Array)
// console.log(cars instanceof Object)

// console.log(person instanceof Array)
// console.log(person instanceof Object)


