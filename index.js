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
let library = [];

function addBook (title,author,genre){
        let book = {
            title: title,
            author: author,
            genre:genre,
        }

        library.push(book);
}

addBook("The Great Gatsby", "F. Scott Fitzgerald", "Classic Literature");
addBook("To Kill a Mockingbird", "Harper Lee", "Classic Literature");


console.log(addBook());
// Listing Books: Implement a function listBooks that iterates over the library's collection of books and logs each book's details to the console.

function listBooks() {
    for (let i = 0; i < library.length; i++) {
        console.log(library[i]);
    }
    
}

listBooks();



// Searching Books: Implement a function searchBook that takes a search query as input and returns an array of books that match the query (search by title, author, or genre).

// Searching Books: Implement a function searchBook that takes a search query as input and returns an array of books that match the query (search by title, author, or genre).

function searchBook(query) {
    let result = [];
    for (let i = 0; i < library.length; i++) {
        let newbook = library[i];
        if ((newbook.title && newbook.title.includes(query)) ||
            (newbook.author && newbook.author.includes(query)) ||
            (newbook.genre && newbook.genre.includes(query))) {
            result.push(newbook);
        }
    }
    return result;
}




// Removing Books: Implement a function removeBook that takes a book title as input and removes the corresponding book from the library's collection.

// Removing Books: Implement a function removeBook that takes a book title as input and removes the corresponding book from the library's collection.

function removeBook(title) {
    for (let i = 0; i < library.length; i++) {
        if (library[i].title === title) {
            // Remove the book from the library's collection
            library.splice(i, 1);
            console.log(`Book "${title}" has been removed from the library.`);
            return; // Exit the function after removing the book
        }
    }
    console.log(`Book "${title}" was not found in the library.`);
}

// Example usage:
removeBook("The Great Gatsby");
console.log(library); // Verify that "The Great Gatsby" has been removed from the library


// Borrowing Books: Implement a function borrowBook that takes a book title as input and marks the book as borrowed if it's available. If the book is already borrowed, log a message indicating that the book is not available.

function borrowBook(){
    for (let i = 0; i < library.length; i++) {
        if (library[i].title !== title) {
            console.log(`Book "${title}" has been removed from the library.`);
            return; // Exit the function after removing the book
        }
    }
    console.log(`Book "${title}" was not found in the library.`);
}
}


// Returning Books: Implement a function returnBook that takes a book title as input and marks the book as returned if it was borrowed. If the book is not in the borrowed state, log a message indicating that the book was not borrowed.

// function returnBook(){

// }


// Display Menu: Implement a menu-driven interface that allows users to interact with the library system. The menu should provide options for adding, listing, searching, removing, borrowing, and returning books. Use a switch statement to handle different menu options.

// Example of a constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
}

const personObj = new Person('John', 30); // Creating a new object using the Person constructor function
