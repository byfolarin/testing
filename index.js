// Task 1: Build a function-based console log message generator
// function consoleStyler(color, background, fontSize, txt) {
//     let message = "%c" + txt;

//     let style = `color: ${color};`
//     style += `background: ${background};`
//     style += `font-size: ${fontSize};`

//     console.log(message, style);
// }

// Task 2: Build another console log message generator
// function celebrateStyler(reason) {
//     let fontStyle = "color: tomato; font-size: 50px";

//     if (reason == "birthday") {
//         console.log(`%cHappy birthday`, fontStyle);
//     } else if (reason == "champions") {
//         console.log(`%cCongrats on the title!`, fontStyle);
//     } else {
//         console.log(message, style);
//     }
    
// }

// Task 3: Run both the consoleStyler and the celebrateStyler functions

// consoleStyler('#1d5c63', '#ede6db', '40px', 'Congrats!');
// celebrateStyler('birthday');

// // Task 4: Insert a congratulatory and custom message
// function styleAndCelebrate() {
//     consoleStyler('#1d5c63', '#ede6db', '40px', 'Congrats!');
//     celebrateStyler('birthday');

// }
// // Call styleAndCelebrate

// styleAndCelebrate('ef7c8e', 'fae8e0', '30px', 'You made it!', 'champions');

// Map Function: Implement a map function that takes an array and a function as arguments and applies the function to each element of the array, returning a new array with the modified elements.

// function map(array, func) {
//     let result = [];
//     for (let i = 0; i < array.length; i++) {
//         result.push(func(array[i]));
//     }
//     return result;
// }

// // Example usage:
// let numbers = [1, 2, 3, 4, 5];
// let doubled = map(numbers, function(num) {
//     return num * 2;
// });

// console.log(doubled); // Output: [2, 4, 6, 8, 10].


// Filter Function: Implement a filter function that takes an array and a predicate function as arguments and returns a new array containing only the elements for which the predicate function returns true.

// function filter(array, predicate) {
//     let result = [];
//     for (let i = 0; i < array.length; i++) {
//         if (predicate(array[i])) {
//             result.push(array[i]);
//         }
//     }
//     return result;
// }

// // Example usage:
// let numbers = [1, 2, 3, 4, 5];
// let evenNumbers = filter(numbers, function(num) {
//     return num % 2 === 0;
// });

// console.log(evenNumbers); // Output: [2, 4]

// console.log('Hello');



// class car {
//     constructor (){
//         this.color = color
//         this.speed = 45
//     }
// }

// class Animal { /* ...class code here... */ }

// var myDog = Object.create(Animal)

// console.log (Animal)

// console.log(myDog);


//object literals are object that are presented rather plainly, object literals are as such let car = { name : "folarin", house : blue};

//How do you create an object using object literal syntax? let car = {name: "idan", }

//What are the components of an object literal, and how are they structured?

//How do you access properties of an object using dot notation? 
//car.name

// Define an object
// let person = {
//     name: "John",
//     age: 30,
//     city: "New York"
// };

// // Add a new property using dot notation
// person.gender = "Male";

// // Access the new property using dot notation
// console.log(person.gender); // Output: Male
// console.log(person);


//1.Create an object named person with the following properties: name, age, city, and email.

// let person = {
//     name: "Jamiu",
//     age: 14,
//     city: "Ikorodu",
//     email: "thefolafolarin@gmail.com",
//     greet: function() {
//         console.log("Hello, my name is " + this.name);
//     }
// }

// let car = {
//     make: "Camry",
//     model: "V8",
//     year: 2007,
//     color: "Army green",
//     drive: function() {
//         console.log("The car is being driven");
//     }
// }

// let newperson1= person;
// let newcar1= car;

// console.log(newperson1.email);
// console.log(newcar1.drive());

//1. Function Practice:

//Write a function called calculateArea that takes the length and width of a rectangle as parameters and returns its area.

// function calculateArea (length,width){
//         let rectangle = length * width
//         return rectangle
// }
// let news = 60;
// let side = 100;
// console.log(calculateArea(news,side));

//2.Loop and Array Practice:

// Create an array named numbers containing some random numbers.
// Write a loop to iterate through the array and log each number to the console.

// let array = [1,2,3,4,5,6,7,8,9];

// for (let i = 0; i <= array.length; i++){
//     console.log(i);
// }

// If Statement Practice:

// Write a function called isEven that takes a number as a parameter and returns true if it's even and false otherwise.

// function isEven(num){
//     if (num % 2 == 0){
//         console.log("Even");
//     } else {
//         console.log("Odd");
//     }
// }

// console.log(isEven(41));

// Switch Statement Practice:

// Write a function called getDayName that takes a number representing a day of the week (1 for Monday, 2 for Tuesday, etc.) and returns the corresponding name of the day using a switch statement.























// Adding Books: Implement a function addBook that takes book details (title, author, genre) as parameters and adds a new book object to the library's collection.
// let library = [];

// function addBook (title,author,genre){
//         let book = {
//             title: title,
//             author: author,
//             genre:genre,
//         }

//         library.push(book);
// }

// addBook("The Great Gatsby", "F. Scott Fitzgerald", "Classic Literature");
// addBook("To Kill a Mockingbird", "Harper Lee", "Classic Literature");


// console.log(addBook());
// Listing Books: Implement a function listBooks that iterates over the library's collection of books and logs each book's details to the console.

// function listBooks() {
//     for (let i = 0; i < library.length; i++) {
//         console.log(library[i]);
//     }
    
// }

// listBooks();



// Searching Books: Implement a function searchBook that takes a search query as input and returns an array of books that match the query (search by title, author, or genre).

// Searching Books: Implement a function searchBook that takes a search query as input and returns an array of books that match the query (search by title, author, or genre).

// function searchBook(query) {
//     let result = [];
//     for (let i = 0; i < library.length; i++) {
//         let newbook = library[i];
//         if ((newbook.title && newbook.title.includes(query)) ||
//             (newbook.author && newbook.author.includes(query)) ||
//             (newbook.genre && newbook.genre.includes(query))) {
//             result.push(newbook);
//         }
//     }
//     return result;
// }




// Removing Books: Implement a function removeBook that takes a book title as input and removes the corresponding book from the library's collection.

// Removing Books: Implement a function removeBook that takes a book title as input and removes the corresponding book from the library's collection.

// function removeBook(title) {
//     for (let i = 0; i < library.length; i++) {
//         if (library[i].title === title) {
//             // Remove the book from the library's collection
//             library.splice(i, 1);
//             console.log(`Book "${title}" has been removed from the library.`);
//             return; // Exit the function after removing the book
//         }
//     }
//     console.log(`Book "${title}" was not found in the library.`);
// }

// // Example usage:
// removeBook("The Great Gatsby");
// console.log(library); // Verify that "The Great Gatsby" has been removed from the library


// Borrowing Books: Implement a function borrowBook that takes a book title as input and marks the book as borrowed if it's available. If the book is already borrowed, log a message indicating that the book is not available.

// function borrowBook(){
//     for (let i = 0; i < library.length; i++) {
//         if (library[i].title !== title) {
//             console.log(`Book "${title}" has been removed from the library.`);
//             return; // Exit the function after removing the book
//         }
//     }
//     console.log(`Book "${title}" was not found in the library.`);
// }
// }


// Returning Books: Implement a function returnBook that takes a book title as input and marks the book as returned if it was borrowed. If the book is not in the borrowed state, log a message indicating that the book was not borrowed.

// function returnBook(){

// }


// Display Menu: Implement a menu-driven interface that allows users to interact with the library system. The menu should provide options for adding, listing, searching, removing, borrowing, and returning books. Use a switch statement to handle different menu options.

// Example of a constructor function
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// const personObj = new Person('John', 30); // Creating a new object using the Person constructor function
// console.log(personObj.age)


// const narPerson = new Person ('side', 40);

// console.log(Person);



















//


// # Lab Instructions: Object Oriented Programming
 
// > ### **Tips: Before you Begin**
// > #### **To view your code and instructions side-by-side**, select the following in your VSCode toolbar:
// > - View -> Editor Layout -> Two Columns
// > - To view this file in Preview mode, right click on this README.md file and `Open Preview`
// > - Select your code file in the code tree, which will open it up in a new VSCode tab.
// > - Drag your assessment code files over to the second column. 
// > - Great work! You can now see instructions and code at the same time. 
// > - Questions about using VSCode? Please see our support resources here:  
// > [Visual Studio Code on Coursera](https://www.coursera.org/learn/programming-with-javascript/supplement/roMvE/visual-studio-code-on-coursera)
// > #### **To run your JavaScript code**
// > - Select your JavaScript file
// > - Select the "Run Code" button in the upper right hand toolbar of VSCode.  
// > Ex: It looks like a triangular "Play" button. <br><br>


// class Person {
//     constructor(name, age, energy) {
//         this.name = "Tom";
//         this.age = 20;
//         this.energy = 100;
//     }


//     sleep(){
//         this.energy += 10
//     }


//     doSomethingFun(){
//         this.energy -= 10
//     }
// }






// ## Task 1: Code a Person class

// Code a Person class, with three parameters in the constructor: name, age, and energy.

// Set the default parameters in the Person class as follows:

// ```
// name = "Tom"

// age = 20

// energy = 100
// ```

// Code two methods in the `Person` class. Name those methods `sleep()` and `doSomethingFun()`.

// The `sleep()` method should take the existing energy level and increase it by 10.

// The doSomethingFun() method should take the existing energy level and decrease it by 10.
// <br><br>



// class Worker extends Person {
//     constructor(name,age,energy,xp,hourlyWage){
//         super (name,age,energy);
//         this.xp = 0;
//         this.hourlyWage = 10;
//     }


//     goToWork(){
//         this.xp += 10
//     }
// }




// ## Task 2: Code a Worker class

// Code a sub-class, inheriting from the `Person` class, and name it `Worker`.

// The `Worker` class has two additional parameters in the constructor: 
// - xp (for "experience points")
// - hourlyWage.

// These properties are set to the following default values:
// ```
// xp = 0

// hourlyWage = 10
// ```
// The `Worker` class has all the paramerters and methods of its super-class.

// Additionally, it has the `goToWork()` method, which, whenever it's run, increases the value of the `xp` property by 10.
// <br><br>


// function intern(){
//     const internObject = new Worker ("bob", 21, 110, 0,10);
//     internObject.goToWork();
//     return internObject;
// }

// ## Task 3: Code a intern object

// Inside the intern function instantiate the `Worker` class to code a new intern object.

// The intern should have the following characteristics:
// ```
// name: Bob

// age: 21

// energy: 110

// xp: 0

// hourlyWage: 10
// ```

// Run the `goToWork()` method on the intern object. Then `return` the intern object.

// <br><br>



// function manager(){
//     const managerObject = new Worker ("Alice", 30, 120, 100,30);
//     managerObject.doSomethingFun();
//     return managerObject;
// }

// ## Task 4: Code a manager object

// Inside the manager function instantiate the `Worker` class to code a new `manager` object.

// The manager object should have the following characteristics:
// ```
// name: Alice

// age: 30

// energy: 120

// xp: 100

// hourlyWage: 30
// ```

// Run the `doSomethingFun()` method on the manager object. Then `return` the manager object.

// <br><br>

// ### Nice work! 




































// // Task 1: Code a Person class
// class Person {
//     constructor(name, age, energy) {
//         this.name = "Tom";
//         this.age = 20;
//         this.energy = 100;
//     }

//     sleep() {
//         this.energy += 10;
//     }

//     doSomethingFun() {
//         this.energy -= 10;
//     }
// }


// // Task 2: Code a Worker class

// class Worker extends Person {
//     constructor(name, age, energy, xp, hourlyWage) {
//         super(name, age, energy);
//         this.xp = xp; // Correctly set xp based on the parameter passed
//         this.hourlyWage = hourlyWage; // Correctly set hourlyWage based on the parameter passed
//     }

//     goToWork() {
//         this.xp += 10;
//     }
// }



// // Task 3: Code an intern object, run methods

// function intern() {
//     const internObject = new Worker("Bob", 21, 110, 0, 10);
//     internObject.goToWork();
//     return internObject;
// }


// // Task 4: Code a manager object, methods
// function manager() {
//     const managerObject = new Worker("Alice", 30, 120, 100, 30);
//     managerObject.doSomethingFun();
//     return managerObject;
// }




// class Vehicle{
//     constructor (make, model,year){
//         this.make = make;
//         this.model = model;
//         this.year = 2022;
//     }

//     drive(){
//         console.log("the vehicle is being driven");
//     }

//     stop(){
//         console.log("the vehicle has stopped");
//     }
// }

// class Car extends Vehicle {
//     constructor (make,model,year){
//         super(make,model,year);
//     }

//     honk(){
//         console.log("the car is honking");
//     }
// }


// Calculator Program:
// Write a JavaScript program that takes
// two numbers as input and
// performs addition, subtraction, multiplication, and division operations on them.


//   function num(a, b, sum) {
//     if (sum === '+') {
//         return a + b;
//     } else if (sum === '-') {
//         return a - b;
//     } else if (sum === '/') {
//         return a / b;
//     } else if (sum === '*'){
//         return a * b;
//     } else {
//         console.log( "the " + sum + " provided is not correct");
//     }
// }

// let number = 16;
// let accuracy = 20;

// console.log(num(number,accuracy, "*"));

// // Temperature Converter:
// // Write a JavaScript program to convert temperatures between Fahrenheit and Celsius.

// // Function to convert Fahrenheit to Celsius
// function fahrenheitToCelsius(fahrenheit) {
//     (fahrenheit - 32) * 5/9
//     return (fahrenheit - 32) * 5/9;
// }


// function celsiusToFahrenheit(celsius) {
//     (celsius * 9/5) + 32
//     return (celsius * 9/5) + 32;
// }


// console.log(fahrenheitToCelsius(62)); 
// console.log(celsiusToFahrenheit(32.7));  


// // Palindrome Checker:
// // Write a JavaScript function to check if a given string is a palindrome or not.

// function palindrome (Checker){
//     let arr = Checker.split();

//     for (i = 0; i < arr.length; i++){
//         if (arr[i] == arr.prototype.reverse()){
//             console.log("this is a palindrome")
//         } else if (arr[i] !== arr.prototype.revese()){
//             console.log("this is not a palindrome")
//         } else { console.log("fuck this")
//     }
//     }
// }

// console.log(palindrome("away"));


// function palindrome(Checker) {
//     // Split the input string into an array of characters
//     let arr = Checker.split("");

//     // Reverse the array
//     let reversedArr = arr.slice().reverse();

//     // Check if the original array is equal to the reversed array
//     if (arr.join("") === reversedArr.join("")) {
//         return "This is a palindrome";
//     } else {
//         return "This is not a palindrome";
//     }
// }

// console.log(palindrome("racecar")); // Output: This is a palindrome
// console.log(palindrome("hello"));   // Output: This is not a palindrome


// Reverse a String:
// Write a JavaScript function to reverse a given string.

// function string(str){
//     let reversedArr = str.split('').reverse();
//     let newSplit = reversedArr.join('');
//     return newSplit
// }

// console.log(string("Ogbeni"));


// Write a JavaScript program that prints the numbers from 1 to 100. But for multiples of three, print "Fizz" instead of the number, and for the multiples of five, print "Buzz". For numbers that are multiples of both three and five, print "FizzBuzz".


// for (let i = 1; i <= 100; i++){
//  if (i % 3 === 0 && i % 5 === 0){
//         console.log("FizzBuzz")
//     }
//     else  if (i % 3 === 0 ){
//         console.log("Fizz")
//     } else if (i % 5 === 0){
//         console.log("Buzz")
//     }  else {
//         console.log(i)
//     }
// }





// Task Manager Application:
// 1.Create a simple task manager application 

// 2. where users can add, delete, and mark tasks as completed. 

// 3.Use object-oriented programming principles to create a Task class with properties 

// 4 like taskName, taskDescription, isCompleted, etc. Implement methods for adding tasks, deleting tasks, and marking tasks as completed.

// class Task {
//     constructor(taskName, taskDescription, isCompleted) {
//         this.taskName = taskName;
//         this.taskDescription = taskDescription;
//         this.isCompleted = isCompleted;
//     }

//     taskadd() {
//         console.log("Task has been added");
//     }

//     taskdelete() {
//         console.log("Task has been deleted");
//     }

//     markingtask() {
//         if (this.isCompleted === true) {
//             console.log("Task has been marked as completed");
//         } else {
//             console.log("Task is not completed");
//         }
//     }
// }

// let newTask = new Task("Clean the bathroom floor", "Make it sparkling", true);
// newTask.markingtask(); // Call markingtask method separately
// console.log(newTask);

// class Task {
//     constructor(taskName, taskDescription, isCompleted) {
//         this.taskName = taskName;
//         this.taskDescription = taskDescription;
//         this.isCompleted = isCompleted;
//         this.markingtask(); // Call markingtask method in the constructor
//     }

//     taskadd() {
//         console.log("Task has been added");
//     }

//     taskdelete() {
//         console.log("Task has been deleted");
//     }

//     markingtask() {
//         if (this.isCompleted === true) {
//             console.log("Task has been marked as completed");
//         } else {
//             console.log("Task is not completed");
//         }
//     }
// }

// let newTask = new Task("Clean the bathroom floor", "Make it sparkling", true);
// console.log(newTask);


// Student Grade Calculator:
// Write a program that calculates the average grade of students. 
//Use objects to represent students, where each student has a name and an array of grades.
// Implement functions to calculate the average grade of each student and the overall class average.

// class Student {
//     constructor(name, grades) {
//         this.name = name;
//         this.grades = grades;
//     }

//     averageGrade() {
//         let sum = 0;
//         for (let i = 0; i < this.grades.length; i++) {
//             sum += this.grades[i];
//         }
//         return sum / this.grades.length;
//     }
// }

// // Example usage:
// const student1 = new Student("Alice", [85, 90, 88]);
// console.log(student1.averageGrade()); // Output: 87.67


// Product Inventory System:
// Design a product inventory system using object-oriented programming. Create a Product class with properties like productName, productPrice, quantityInStock, etc. Implement methods for adding products, updating product information, and displaying the inventory.

// class Product {
//     constructor (productName,productPrice,quantityInStock){
//         this.productName = productName;
//         this.productPrice = productPrice;
//         this.quantityInStock = quantityInStock;
//     }

//     addingProducts(){

//     }

//     updatingProducts(){
        
//     }

//     displayInventory(){
        
//     }


// }

// class Product {
//     constructor(productName, productPrice, quantityInStock) {
//         this.productName = productName;
//         this.productPrice = productPrice;
//         this.quantityInStock = quantityInStock;
//     }

//     addingProducts(quantity) {
//         this.quantityInStock += quantity;
//         console.log(`${quantity} ${this.productName}(s) added to inventory.`);
//     }

//     updatingProducts(newPrice) {
//         this.productPrice = newPrice;
//         console.log(`${this.productName} price updated to $${newPrice}.`);
//     }

//     displayInventory() {
//         console.log(`Product Name: ${this.productName}`);
//         console.log(`Price: $${this.productPrice}`);
//         console.log(`Quantity in Stock: ${this.quantityInStock}`);
//     }
// }

// // Example usage:
// const laptop = new Product("Laptop", 999.99, 10);
// laptop.displayInventory(); // Output: Product Name: Laptop, Price: $999.99, Quantity in Stock: 10

// laptop.addingProducts(5); // Output: 5 Laptop(s) added to inventory.
// laptop.displayInventory(); // Output: Product Name: Laptop, Price: $999.99, Quantity in Stock: 15

// laptop.updatingProducts(1099.99); // Output: Laptop price updated to $1099.99.
// laptop.displayInventory(); // Output: Product Name: Laptop, Price: $1099.99, Quantity inn  Stock: 15




// class Show extends Product{
//     constructor (productName,productPrice,quantityInStock,imports,exports){
//             super(productName,productPrice,quantityInStock);
//             this.exports = exports;
//             this.imports = imports;
//     }

// }


// // Example 1: Basic array destructuring
// const numbers = [1, 2, 3, 4, 5];

// // Extracting values using destructuring
// const [first, second, third] = numbers;

// console.log(first);  // Output: 1
// console.log(second); // Output: 2
// console.log(third);  // Output: 3

// // Example 2: Ignoring some elements
// const [one, , three] = numbers;

// console.log(one);   // Output: 1
// console.log(three); // Output: 3

// // Example 3: Assigning default values
// const [x, y, z, a = 10, b = 20] = numbers;

// console.log(a); // Output: 4
// console.log(b); // Output: 5

// // Example 4: Swapping variables
// let a = 1;
// let b = 2;

// [a, b] = [b, a];

// console.log(a); // Output: 2
// console.log(b); // Output: 1


// const message = "Hello";

// for (const char of message) {
//     console.log(char);
// }

// Output:
// H
// e
// l
// l
// o


// const car = {
//     speed: 100,
//     color: "blue"
// }



// for(const prop of  Object.keys(car) ) {
//     console.log(prop);
// }


// const colors = ['red','orange','yellow']
// for (const color of colors) {
//     console.log(color);
// }


// for(const prop of  Object.values(car) ) {
//     console.log(prop);
// }

// for(const prop of  Object.entries(car) ) {
//     console.log(prop);
// }


// var clothingItem = {
//     price: 50,
//     color: 'beige',
//     material: 'cotton',
//     season: 'autumn'
// }

// for( const key of Object.keys(clothingItem) ) {
//     console.log(key, ":", clothingItem[key])
// }


// var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']

// function logDiary() {
//     for (const log of dairy) {
//         console.log(log)
//     }
// }

// logDiary()


// const animal = { canJump: true };
// const bird = Object.create(animal);
// bird.canFly = true;
// bird.hasFeathers = true;

// function birdCan() {
//     const birdProperties = Object.entries(bird);

//     for (const [key, value] of birdProperties) { // Iterate over each key-value pair
//         console.log(`${key} : ${value}`); // Print key-value pairs
//     }
// }

// birdCan();



// function animalCan() {
//     const animalProperties = Object.entries(animal);

//    for (const [key, value] in animalProperties) { // Iterate over each key-value pair
//        console.log(`${key} : ${value}`); // Print key-value pairs
//    }
// }

// function animalCan() {
//     for (const key in bird) { // Iterate over all properties in the bird object and its prototype chain
//         if (bird.hasOwnProperty(key)) { // Check if the property is an own property of bird (not inherited)
//             console.log(`${key}: ${bird[key]}`); // Print key-value pairs
//         }
//     }
// }

// animalCan();

// function animalCan() {
//     const animalProperties = Object.entries(animal);

//     for (const [key, value] of animalProperties) { // Iterate over each key-value pair
//         console.log(`${key}: ${value}`); // Print key-value pairs
//     }
// }


// animalCan();



// Task 1

// var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']

// function logDairy() {
//     for (const log of dairy) {
//         console.log(log)
//     }
// }
// logDairy()

// Task 2

// const animal = {

// canJump: true

// };

// const bird = Object.create(animal);

// bird.canFly = true;

// bird.hasFeathers = true;

// function birdCan() {
//     const birdProperties = Object.entries(bird);

//     for (const [key, value] of birdProperties) { // Iterate over each key-value pair
//         console.log(`${key}: ${value}`); // Print key-value pairs
//     }
// }

// birdCan();

// Task 3

// function animalCan() {
//     const animalProperties = Object.entries(animal);

//     for (const [key, value] of animalProperties) { // Iterate over each key-value pair
//         console.log(` ${key}: ${value}`); // Print key-value pairs
//     }
// }


// animalCan();


// const veggies = ['onion', 'garlic', 'potato'];
// veggies.forEach( function(veggie, index) {
//     console.log(`${index}. ${veggie}`);
// });



// const repetitiveFruits = ['apple','pear','apple','pear','plum', 'apple'];
// const uniqueFruits = new Set(repetitiveFruits);
// console.log(uniqueFruits);

// const numbers = [1, 2, 3, 4, 5];

// numbers.forEach(number => {
//     console.log(number);
// });


// const sentence = 'Hello, world!';

// for (const char of sentence) {
//     console.log(char);
// }


// Function Practice:

// Write a function that takes two parameters (a and b) and returns their sum.
// Write a function that takes an array of numbers as input and returns the sum of all the numbers in the array.
// Write a function that takes a string as input and returns the reverse of the string.


// function calc (a,b){
//     let sum = a * b;
//     return sum
// }



// function input (arr){ 
// let sum = 0
// for (let i = 0; i < arr.length; i++){
//     sum += arr[i]
// }
// return sum
// }

// console.log(input([1,2,4,6,7]));


// function string(Str){
//      let split = Str.split('').reverse().join('')
//     return split;

// }

// console.log(string("hagrid"));


// Object Practice:

// Create an object representing a car with properties like make, model, and year.
// Add a method to the car object that prints out the car's details.
// Create another object representing a person with properties like name, age, and gender.


// class Car {
//     constructor (make,model,year){
//         this.make = `Toyota`,
//         this.model = `Convertible`,
//         this.year = 1998
//     }

// carDetails(){
//     console.log(`this is a ${this.make} ${this.model} created in ${this.year}`) 
// }

// }


// let object = new Car;

// console.log(object.carDetails())


// class Personn {
//     constructor(name,age,gender){
//         this.name = `Abiola`,
//         this.age = 10,
//         this.gender = `Male`
//     }
// }

// let newPersonn = new Personn

// console.log(newPersonn);


// Array Practice:

// Create an array of numbers and use the forEach method to print each number to the console.
// Use the map method to double each number in an array and create a new array with the doubled values.
// Use the filter method to create a new array containing only the even numbers from an array of numbers.


// let arrNum = [1,2,3,4,5,6,7,8,9]

// arrNum.forEach(function (num)
// { console.log(num)}
// )

// Sum of Array Elements:
// Write a function that takes an array of numbers as input and calculates the sum of all elements using the forEach method.

// function getSum (arr){
//     let sum = 0
//     arr.forEach(function (num){
//         sum += num
//     })
//     return sum
// }

// let array = [1,2,3,5,6,7,8]

// console.log(getSum(array));


// Logging Array Elements:
// Write a function that takes an array of strings as input and logs each element to the console with a specific format (e.g., prepend each element with a number and a dash) using the forEach method.

// function arrString (arr){
//  arr.forEach(function (num, index)
//     {console.log(`${index} - ${num}`)}
//     )
// }


// let strings = ["String", "Object", "Update"];

// console.log (arrString(strings));


// Finding Maximum Element:
// Write a function that takes an array of numbers as input and finds the maximum element in the array using the forEach method.

function arrr(arrNum) {
    let max = arrNum[0]; // Initialize max with the first element of the array

    arrNum.forEach(function(num) {
        if (num > max) { // Compare each element with max to find the maximum value
            max = num; // Update max if the current element is greater
        }
    });

    return max; // Return the maximum value after iterating through the entire array
}

let arrrrr = [29, 38, 43, 9, 12];
console.log(arrr(arrrrr)); // Output: 43


// Filtering Array Elements:
// Write a function that takes an array of numbers as input and creates a new array containing only the even numbers using the forEach method.

function takeArray (take){
    take.forEach(num =>{
        let evenNumbers = [];
        if (num % 2 === 0){
            evenNumbers.push(num);
        }

        return evenNumbers
    }

    
    )
}

let arN= [1,4,5,7,9,8,19,8];

console.log(takeArray(arN));


// Use the map method to double each number in an array and create a new array with the doubled values.


const numbers = [1, 2, 3, 4, 5];

// Map over the array and double each element
const doubledNumbers = numbers.map(num => num * 2);

console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]


// Capitalize Strings:
// Write a function that takes an array of strings as input and returns a new array where each string is capitalized (the first letter is uppercase and the rest are lowercase), using the map() method.


// function arrStr (strInput){
//         let newInput = strInput.toLowerCase()()
//         let updatedInput = newInput[num].toUpperCase();

//         strInput.map(num => num.indexof(updatedInput))
//         {
//             return num
//         }

        
// }

// const numberss = ["THIS", "IS", "MATRIx"];

// console.log(arrStr(numberss));


[0,10,20,30,40,50].map(num => {
    return num / 10
})


// Write a function that takes an array of full names (e.g., "John Doe") as input and returns a new array containing only the first names (e.g., "John"), using the map() method.


function fullNames (fullname){
   return fullname.map(i => i.split('')[0] )
   
}


const names = ["John Doe", "Jane Smith", "Alice Johnson"];
console.log(fullNames(names)); // Output: ["John", "Jane", "Alice"]


function firstNames(fullNames) {
    return fullNames.map(name => name.split(' ')[0]);
}

const name = ["John Doe", "Jane Smith", "Alice Johnson"];
console.log(firstNames(name)); // Output: ["John", "Jane", "Alice"]             






//functional programming
//object oriented programming
//Error handling
//

class Cake {
    constructor(lyr) {
        this.layers = lyr;
    }

    getLayers() {
        return this.layers;
    }
}

class WeddingCake extends Cake {
    constructor() {
        super(2);
    }

    getLayers() {
        return super.getLayers() * 5;
    }
}

var result = new WeddingCake();
console.log(result.getLayers());


function count(...food) {
    console.log(food.length)
}

count("Burgers", "Fries", null);



// Class Creation and Instance Methods:
// Define a class called Rectangle that represents a rectangle with properties width and height. Implement a method called calculateArea that calculates and returns the area of the rectangle. Create an instance of the Rectangle class with width 5 and height 10, then print its area using a template literal

class Rectangle{
    constructor (width,height){
            this.width = width
            this.height =  height
    }

    calculateArea(){
        let sum = this.width * this.height
        return sum
    }
}


let sub = new Rectangle(5,10)

console.log(`area of the rectangle: ${sub.calculateArea()}`);


// 2. Iterating Through Data Structures:
// Given an array of numbers [1, 2, 3, 4, 5], use a for...of loop to iterate through the array and print each number multiplied by 2 using template literals.


let arr = [1, 2, 3, 4, 5];

for (let num of arr){
    let multiplied = num * 2
    console.log(`${num} multiplied by 2 is ${multiplied}`)
}

// Spread Operator and Function Parameters:
// Write a function called maxValue that takes any number of arguments using the rest parameter syntax and returns the maximum value among the arguments. Call this function with the numbers 10, 20, 30, and 40 using the spread operator.


function maxValue(...numbers) {
    return Math.max(...numbers);
}

const max = maxValue(10, 20, 30, 40);


console.log("Maximum value:", max); // Output: Maximum value: 40


// Data Structure Manipulation and Spread Operator:
// Given an array of numbers [1, 2, 3], create a new array called modifiedArray using the spread operator. Add the numbers 4 and 5 to modifiedArray, then remove the last element. Print the final contents of modifiedArray using a template literal.


let arar = [1,2,3];

let modifiedArray = [...arar, 4,5];

modifiedArray.pop();

console.log(`this is the final elements of modified array ${modifiedArray}`);


// Object Manipulation and Functions:
// You have an array of objects representing employees, each with properties name and salary. Write a function called calculateTotalSalary that takes this array as an argument and returns the total salary of all employees. Additionally, create a function called highestPaidEmployee that takes the same array as an argument and returns the name of the employee with the highest salary.Object Manipulation and Functions:

function calculateTotalSalary(employees) {
    let totalSalary = 0;
    for (let employee of employees) {
        totalSalary += employee.salary;
    }
    return totalSalary;
}


function highestPaidEmployee(employees) {
    let highestSalary = 0;
    let highestPaidEmployeeName = '';
    for (let employee of employees) {
        if (employee.salary > highestSalary) {
            highestSalary = employee.salary;
            highestPaidEmployeeName = employee.name;
        }
    }
    return highestPaidEmployeeName;
}


const employees = [
    { name: 'Alice', salary: 50000 },
    { name: 'Bob', salary: 60000 },
    { name: 'Charlie', salary: 45000 }
];

console.log("Total salary of all employees:", calculateTotalSalary(employees));
console.log("Name of the highest paid employee:", highestPaidEmployee(employees));


// Nested Object Iteration:
// Given a nested object representing a company's departments and employees, write a function called countEmployees that takes this object as an argument and returns the total number of employees in the company.


function countEmployees(totalemployees){
    let employeecount = 0;
    for (let nested of totalemployees){
        let result =  employeecount += nested
        return result;
    }

}


// Function to count the total number of employees in a nested object
function countEmployees(company) {
    let totalCount = 0;

    // Iterate through each key in the object
    for (let key in company) {
        // Check if the value associated with the key is an object (department)
        if (typeof company[key] === 'object') {
            // Recursively count the employees in the nested object (department)
            totalCount += countEmployees(company[key]);
        } else {
            // If the value is not an object, assume it's an employee and increment the count
            totalCount++;
        }
    }

    return totalCount;
}

// Example usage
const company = {
    'HR': {
        'Manager': 'Alice',
        'Assistant': 'Bob'
    },
    'IT': {
        'Manager': 'Charlie',
        'Developer': 'David',
        'Tester': 'Eve'
    }
};

console.log("Total number of employees:", countEmployees(company));


// addEventListener()

// const target = document.querySelector('body')

// function handleClick(){
//     console.log('clicked the body')
// }

// target.addEventListener('click',handleClick)

// onclick = handleClick()




// let answer = prompt('What is your name?');
// if (typeof(answer) === 'string') {
//     var h1 = document.createElement('h1')
//     h1.innerText = answer;
//     document.body.innerText = '';
//     document.body.appendChild(h1);
// }

// addEventListener('change')
































// # Lab Instructions: Little Lemon Receipt Maker
 
// > ### **Tips: Before you Begin**
// > #### **To view your code and instructions side-by-side**, select the following in your VSCode toolbar:
// > - View -> Editor Layout -> Two Columns
// > - To view this file in Preview mode, right click on this README.md file and `Open Preview`
// > - Select your code file in the code tree, which will open it up in a new VSCode tab.
// > - Drag your assessment code files over to the second column. 
// > - Great work! You can now see instructions and code at the same time. 
// > - Questions about using VSCode? Please see our support resources here:  
// > [Visual Studio Code on Coursera](https://www.coursera.org/learn/programming-with-javascript/supplement/roMvE/visual-studio-code-on-coursera)
// > #### **To run your JavaScript code**
// > - Select your JavaScript file
// > - Select the "Run Code" button in the upper right hand toolbar of VSCode.  
// > Ex: It looks like a triangular "Play" button. <br><br>

// <br>

// ## Assignment Instructions

// In this exercise, you will work with some data provided as an array of objects, listing information about dishes available in the Little Lemon restaurant.
// <br><br>

// **Step 1:** In the function `getPrices()`, give it the parameter of `taxBoolean`.

// **Step 2:** Inside the `getPrices()` function, code a for loop that will loop over all the objects inside the `dishData` array.

// **Step 3:** Inside the for loop, declare a `finalPrice` variable, without assigning it a value.

// **Step 4:** Still inside the for loop, add an if condition, checking that the `taxBoolean` is set to `true`. Inside the if block, multiply the following: * the price of the currently looped-over object from the `dishData` array, and * the tax value. Assign the multiplied value to the finalPrice variable.

// **Step 5:** Right after the if condition, add an else if, checking if the value of `taxBoolean` is false. Inside this condition's block, assign the currently looped-over dish price property in the `dishData` array to the `finalPrice` variable.
// <br><br>

// **Step 6:** Code the `else` case, and inside of it, add two lines of code:

// A console log of the string:  

// - "You need to pass a boolean to the getPrices call!"  

// - return (to "jump out" of the further function execution)
// <br><br>

// <b>Step 7:</b> After all the conditional's statements, but still inside the for loop, code another console log with four arguments:

// 1. The string `"Dish: "`

// 2. The value of currently looped-over dish object's name property

// 3. The string `"Price: $"`

// 5. The value of the `finalPrice` variable
// <br><br>

// **Step 8:** You're finshed with the `getPrices()` function, and now you're ready to code another function. Give the `getDiscount()` function, two parameters: the `taxBoolean` and the `guests` parameter. 

// **Step 9:** Inside the `getDiscount()` function,  on the very first line of its body, invoke the `getPrices()` function, passing it the `taxBoolean` as an argument.

// **Step 10:** On another line, you need to implement your defensive coding skills, and check that the type of the `guests` parameter is 'number' and  that the value of the guests variable is greater than zero and less than 30.  If all these conditions return true, code the body of the conditional as described in the next step. If they don't all return true, code the body of the else conditional as instructed in step 12.

// **Step 11:** Inside the if statment, declare a new variable, named `discount`, and set it to 0. On the next line, add another if...else if: in the first if, you'll check that the value of the `guests` variable is less than 5. If that's the case, reassign the value of the discount variable to 5; 
// - Inside the else if condition, check that the value of the guests variable is greater than or equal to 5 - if that's the case, reassign the discount variable to 10.
// - Console log the following after closing your else-if statement: `'Discount is: $' + discount);`


// **Step 12:** In the else condition, console log the following string: `'The second argument must be a number between 0 and 30'`. Since you've finished declaring both the `getPrices()` and the `getDiscount()` functions, you can now invoke the `getDiscount()` function several times, with various combinations of arguments, to check the behavior. <br>

// Here are two examples: 
// - `getDiscount(true, 2) `
// - `getDiscount(false, 10)`

// What happens when you don't pass-in any arguments?  

// What happens when you pass values that are not expected?


// 1. Variable Declarations:

// Declare variables to store your name, age, and favorite color. Assign appropriate values to each variable and print them to the console.


let nameStr = `Abiola`;
let age = 24;
let favColor = `Black`;

console.log(`my name is ${nameStr}, I am ${age}, my fav color is ${favColor}. `);


const person = {
    name: `Abiola`,
    age: 24,
    color: `Black`
};


console.log(`my name is ${person.name}, I am ${person.age}, my fav color is ${person.color}. `)


// 2. Arithmetic Operations:

// Write a program to calculate the area of a rectangle.
//  Prompt the user to enter the width and height of the rectangle,
//  calculate the area, and display the result.

// let width = prompt(`What is the width of a rectangle`)
// let height = prompt(`What is the height of a rectangle`)

// function rectangle(sum){
//     if (typeof(width) === Number && typeof(height) === Number  ) {
//         let sum = width * height;
//     }
//     return sum
// }







// let width = prompt(`What is the width of a rectangle`);
// let height = prompt(`What is the height of a rectangle`);

// // Convert the input strings to numbers
// width = parseFloat(width);
// height = parseFloat(height);

// function calculateRectangleArea(width, height) {
//     // Check if both width and height are valid numbers
//     if (!isNaN(width) && !isNaN(height)) {
//         return width * height;
//     } else {
//         return "Invalid input. Please enter valid numbers for width and height.";
//     }
// }

// console.log(calculateRectangleArea(6,9))

// // Call the function to calculate the area
// let area = calculateRectangleArea(width, height);

// // Display the result
// if (typeof area === 'number') {
//     console.log(`The area of the rectangle is: ${area}`);
// } else {
//     console.log(area);
// }







// Conditional Statements:

// Create variables to store two numbers. Write a program that compares the two numbers and prints whether the first number is greater than, less than, or equal to the second number.



function comparism(x,y){
  
     if (x == 100 || y == 100){
        console.log(true)
    } else if (x + y == 100){
        console.log(`equals 100`)
    }
    else{
        console.log(`yada`)
}
    
}

let plus = 50;
let minus = 50;

console.log(comparism(plus,minus))


function getFileExtension(extended){
  let newmax = extended.slice(extended.lastIndexOf('.'))
  return newmax
}

console.log(getFileExtension(`index.html`))









