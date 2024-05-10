// const friend = {
//     name: "Dato",
//     age: 17,
//     favoriteColor: "blue",
// }

// const me = {
//     name: "Soso",
//     age: 15,
//     favoriteColor: "green",
// };

// console.log(friend.name); 
// console.log(me.favoriteColor); 

// me.name = "Soso";

// me.favoriteColor = "green";

// console.log(me.name); 
// console.log(me.favoriteColor); 

// let car = {
//     name: "Bmw",
//     model: "E46",
//     weight: 1450,
//     start: function() {
//         console.log("Starting the car...");
//     },
//     brake: function(seconds) {
//         console.log("The car will brake in " + seconds + " seconds.");
//     }
// };

// car.start = function() {
//     console.log("Hello world");
// };

// car.start(3); 

// car.brake(5);

// let car = {
//     name: "Bmw",
//     model: "E46",
//     weight: 1450,
//     start: function(startingg) {
//         console.log("car is starting");
//     },

//     break: function(seconds) {
//         console.log("car will break in" + second + "second")
//         for (let i = seconds; i > 0; i--) {
//             console.log(i + " second");
//         };
//     }

// };

// function displayObject() {
//     let name = document.getElementById("nameInput").value;

//     let obj = {
//         name: name,
//     };

//     document.getElementById("result").innerText = "You Get: " + obj.name;
// }



// const me = {
//     name: "Soso",
//     age: 15,
//     city: "Gurjaani"
// };

// me.age = 15;

// console.log(me.name);

// const person = {
//     name: "Luka",
//     age: 17,
//     city: "Kutaisi",
//     greet: function() {
//         console.log("Hello, my name is " + this.name + "!");
//     }
// };

// person.greet(); // გამოიტანს გამარჯობა ჩემი სახელი არის ლუკა


// const person1 = {
//     name: "Soso",
//     age: 15,
//     city: "Gurjaani"
// };

// const person2 = {
//     name: "Luka",
//     age: 17,
//     city: "Kutaisi"
// };

// console.log(person1 === person2); // გამოიტანს false


// const school = {
//     name: "GOA School",
//     students: [
//         { name: "Soso", age: 15 },
//         { name: "Daniel", age: 15 },
//         { name: "Mate", age: 15 }
//     ]
// };

// console.log(school)


// document.getElementById("userForm").addEventListener("submit", function(event) { // სარეგისტრაციო ფორმა
// event.preventDefault(); 
    

//     const username = document.getElementById("username").value;
//     const password = document.getElementById("password").value;
    
 
//     if (username.length >= 5 && password.length >= 8) {

//         const userObject = {
//             username: username,
//             password: password
//         };

//         console.log(userObject);
        
//         document.getElementById("userForm").reset();
//     } else {
//         alert("Username must be at least 5 characters long and password must be at least 8 characters long.");
//     }
// }); // ...


// function StudentID(name, lastName, score) { // კონსტრუქტორი.
//     this.name = name;
//     this.lastName = lastName;
//     this.score = score;
// }


// const student1 = new StudentID("Soso", "Valishvuli", 90);
// console.log("Student 1:", student1.name, student1.lastName, "-", "Score:", student1.score);

// const student2 = new StudentID("Daniel", "Abramiani", 88);
// console.log("Student 2:", student2.name, student2.lastName, "-", "Score:", student2.score);

// const student3 = new StudentID("Mate", "Rekhviashvili", 78);
// console.log("Student 3:", student3.name, student3.lastName, "-", "Score:", student3.score);

// const student4 = new StudentID("Giorgi", "Qimeridze", 85);
// console.log("Student 4:", student4.name, student4.lastName, "-", "Score:", student4.score);

// const student5 = new StudentID("Luka", "Zazashvili", 90);
// console.log("Student 5:", student5.name, student5.lastName, "-", "Score:", student5.score);


// function Person(name, lastname, age) { // Person namelastnameage:
//     this.name = name;
//     this.lastname = lastname;
//     this.age = age;
    
//     this.person = function() {
//         console.log("Name: " + this.name);
//         console.log("Lastname: " + this.lastname);
//         console.log("Age: " + this.age);
//     };
// }

// const person = new Person("Soso", "Valishvili", 15);

// console.log(person);

// document.getElementById('registrationForm').addEventListener('submit', function(event) { // სარეგისტრაციო ფორმა 2.
//     const password = document.getElementById('password').value;
//     const confirmPassword = document.getElementById('confirmPassword').value;
//     const passwordMatchError = document.getElementById('passwordMatchError');

//     if (password !== confirmPassword) {
//         passwordMatchError.textContent = "პაროლი რომელიც თქვენ ჩაწერეთ არ ემთხვევა ზემოთ მოცემულ პაროლს.";
//         event.preventDefault();
//     } else {
//         passwordMatchError.textContent = "";
//         alert("ანგარიში წარმატებით შეიქმნა„!");
//     }
// }); //...

// setTimeout(code)
// setTimeout(code, delay)

// setTimeout(functionRef)
// setTimeout(functionRef, delay)
// setTimeout(functionRef, delay, param1)
// setTimeout(functionRef, delay, param1, param2)
// setTimeout(functionRef, delay, param1, param2, /* …, */ paramN)


// function digitalClock() {
//     setInterval(() => {
//         const now = new Date();
//         const hours = String(now.getHours()).padStart(2, '0');
//         const minutes = String(now.getMinutes()).padStart(2, '0');
//         const seconds = String(now.getSeconds()).padStart(2, '0');
//         console.log(`${hours}:${minutes}:${seconds}`);
//     }, 1000);
// }

//  digitalClock();



// function calculateCircleArea(radius) {
//     return Math.PI * Math.pow(radius, 2);
// }

//  console.log(calculateCircleArea(5)); 



// function toKebabCase(str) {
//     return str.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`).replace(/^-/, '');
// }

//  console.log(toKebabCase("helloWorld"))



// function countdownTimer(targetDate) {
//     setInterval(() => {
//         const now = new Date();
//         const difference = Math.floor((targetDate - now) / 1000);
//         const days = Math.floor(difference / (60 * 60 * 24));
//         const hours = Math.floor((difference % (60 * 60 * 24)) / (60 * 60));
//         const minutes = Math.floor((difference % (60 * 60)) / 60);
//         const seconds = difference % 60;
//         console.log(`${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds remaining`);
//     }, 1000);
// }


//  countdownTimer(new Date(Date.now() + 10000)); 



// function fibonacciSequence(numTerms) {
//     const sequence = [0, 1];
//     for (let i = 2; i < numTerms; i++) {
//         sequence[i] = sequence[i - 1] + sequence[i - 2];
//     }
//     return sequence;
// }

//  console.log(fibonacciSequence(10));



// function getDayOfWeek(date) {
//     const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//     return daysOfWeek[date.getDay()];
// }

//  console.log(getDayOfWeek(new Date())); 


 
// function currentDateFormats() {
//     const now = new Date();
//     const ddmmYYYY = `${String(now.getDate()).padStart(2, '0')}/${String(now.getMonth() + 1).padStart(2, '0')}/${now.getFullYear()}`;
//     const mmddYYYY = `${String(now.getMonth() + 1).padStart(2, '0')}/${String(now.getDate()).padStart(2, '0')}/${now.getFullYear()}`;
//     const yyyyMMdd = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
//     return { ddmmYYYY, mmddYYYY, yyyyMMdd };
// }


//  console.log(currentDateFormats());



// function isLeapYear(date) {
//     const year = date.getFullYear();
//     return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
// }

// console.log(isLeapYear(new Date(2024, 1, 29))); 



// function differenceInDays(date1, date2) {
//     const oneDay = 24 * 60 * 60 * 1000; 
//     return Math.round(Math.abs((date1 - date2) / oneDay));
// }


//  const startDate = new Date(2024, 0, 1);
//  const endDate = new Date(2024, 0, 10);
//  console.log(differenceInDays(startDate, endDate)); 



// function calculateAge(birthDate) {
//     const now = new Date();
//     const diff = now - birthDate;
//     const ageDate = new Date(diff);
//     return Math.abs(ageDate.getUTCFullYear() - 1970);
// }


//  console.log(calculateAge(new Date(1990, 0, 1)));

// setTimeout(function() {
//     console.log("wait 3 more seconds for you get hello GOA")
// },2000);

// setTimeout(function() {
//     console.log("hello GOA")
// }, 5000);

// setTimeout(function() {
//     console.log("and you get 100pts")
// }, 5700);

// let counter = 99;

// setTimeout(function() {
//     counter++;
//     console.log(counter);
// },7000); // ++ გამოიტანს 121, -- გამოიტანს 119.


// let counter = 0;  //davaleba 1

//   function incrementCounter() {
//     counter++;
//     document.getElementById('counterText').textContent = 'Counter: ' + counter;

//     let backgroundColors = ['#ff9999', '#99ff99', '#9999ff', '#ffff99', '#99ffff'];
//     let randomIndex = Math.floor(Math.random() * backgroundColors.length);
//     document.getElementById('counterDiv').style.backgroundColor = backgroundColors[randomIndex];

//     let textColors = ['#ffffff', '#000000', '#ff00ff', '#00ffff', '#ff6600'];
//     randomIndex = Math.floor(Math.random() * textColors.length);
//     document.getElementById('counterText').style.color = textColors[randomIndex];
//   }


// function changeImage() {  //davaleba 2.
//   var currentSrc = document.getElementById('image').src;
//   if (currentSrc.endsWith('image1.jpg')) {
//     document.getElementById('image').src = 'images/image2.jpg';
//   } else {
//     document.getElementById('image').src = 'images/image1.jpg';
//   }
// }


// function generateRandomNumbers() {  //davaleba 3.
//   var numbers = [];
//   while (numbers.length < 5) {
//     var randomNumber = Math.floor(Math.random() * 10) + 1;
//     if (!numbers.includes(randomNumber)) {
//       numbers.push(randomNumber);
//     }
//   }

//   document.getElementById('para1').innerText = 'Random Number: ' + numbers[0];
//   document.getElementById('para2').innerText = 'Random Number: ' + numbers[1];
//   document.getElementById('para3').innerText = 'Random Number: ' + numbers[2];
//   document.getElementById('para4').innerText = 'Random Number: ' + numbers[3];
//   document.getElementById('para5').innerText = 'Random Number: ' + numbers[4];
// }

// function changeURL() {  //davaleba 4.
//   var link = document.getElementById('link');
//   var newURL = 'https://www.youtube.com/@Goal_Oriented_Academy__GOA';
//   link.href = newURL;

//   var container = document.querySelector('.container');
//   container.style.backgroundColor = '#ff6347';
// }

// let tasks = []; //to do list

// function addTask() {
//     const taskInput = document.getElementById("taskInput");
//     const task = taskInput.value.trim();
//     if (task !== "") {
//         tasks.push(task);
//         displayTasks();
//         taskInput.value = "";
//     }
// }

// function editTask(index) {
//     const newTask = prompt("Enter the new task:");
//     if (newTask !== null && newTask.trim() !== "") {
//         tasks[index] = newTask.trim();
//         displayTasks();
//     }
// }

// function deleteTask(index) {
//     tasks.splice(index, 1);
//     displayTasks();
// }

// function displayTasks() {
//     const taskList = document.getElementById("taskList");
//     taskList.innerHTML = "";
//     tasks.forEach((task, index) => {
//         const li = document.createElement("li");
//         li.textContent = task;
//         const modifyBtn = createButton("Edit", () => editTask(index));
//         const deleteBtn = createButton("Delete", () => deleteTask(index));
//         li.appendChild(modifyBtn);
//         li.appendChild(deleteBtn);
//         taskList.appendChild(li);
//     });
// }

// function createButton(text, onClick) {
//     const button = document.createElement("button");
//     button.textContent = text;
//     button.addEventListener("click", onClick);
//     return button;
// }

// displayTasks();


// // String methods
// let str = "   Hello, Goa!   ";
// console.log(str.toUpperCase()); 
// console.log(str.trim()); 
// console.log(str.charAt(7)); 
// console.log(str.indexOf("goa")); 
// console.log(str.split(", ")); 
// console.log(str.substring(3, 8)); 
// console.log(str.startsWith("Hello")); 
// console.log(str.endsWith("goa!"));
// console.log(str.replace("goa", "academy")); 


// // Array methods
// let arr1 = [1, 2, 3];
// arr1.push(4);
// console.log(arr1); 
// arr1.pop();
// console.log(arr1); 
// let arr2 = [4, 5, 6];
// console.log(arr1.concat(arr2)); 
// console.log(arr1.join(" - ")); 
// console.log(arr1.slice(1, 2)); 
// console.log(arr1.indexOf(2)); 
// arr1.forEach(function(item) {
//     console.log(item);
// });


// // Object methods
// let obj = { a: 1, b: 2, c: 3 };
// console.log(Object.keys(obj)); 
// console.log(Object.values(obj)); 
// console.log(Object.entries(obj)); 
// let newObj = Object.assign({}, obj, { d: 4 });
// console.log(newObj); 
// console.log(obj.hasOwnProperty('a'));


// // Math methods
// console.log(Math.abs(-5));
// console.log(Math.max(2, 5, 10)); 
// console.log(Math.min(2, 5, 10)); 
// console.log(Math.round(3.7)); 
// console.log(Math.floor(3.7));
// console.log(Math.ceil(3.2)); 
// console.log(Math.random()); 


// const container = document.getElementById("container"); // Move with Arrow Keys
// const block = document.getElementById("block");

// let left = 0;
// let topPos = 0;
// const step = 5;

// function moveBlock(direction) {
//     switch (direction) {
//         case "ArrowUp":
//             topPos = Math.max(topPos - step, 0);
//             break;
//         case "ArrowDown":
//             topPos = Math.min(topPos + step, container.clientHeight - block.clientHeight);
//             break;
//         case "ArrowLeft":
//             left = Math.max(left - step, 0);
//             break;
//         case "ArrowRight":
//             left = Math.min(left + step, container.clientWidth - block.clientWidth);
//             break;
//     }
//     block.style.left = left + "px";
//     block.style.top = topPos + "px";
// }

// document.addEventListener("keydown", function(event) {
//     const key = event.key;
//     if (key.startsWith("Arrow")) {
//         event.preventDefault();
//         moveBlock(key);
//     }
// });


// document.addEventListener("DOMContentLoaded", () => { //Remove event listener
//     let counter = 0;
//     const maxValue = 10;

//     const incrementCounter = () => {
//         counter++;
//         document.getElementById("counterValue").textContent = counter;

//         if (counter === maxValue) {
//             document.getElementById("incrementButton").removeEventListener("click", incrementCounter);
//             alert("შენ მიაღწიე ლიმიტს, მოვლენის მსმენელი წაიშალა!");
//         }
//     };

//     document.getElementById("incrementButton").addEventListener("click", incrementCounter);
// });


// function myFunction() { //variables
//     let localVar = "I am a local";
//     console.log(localVar);
// }


// myFunction();

// let globalVar = "I am a global";

// function myFunction() {
//     console.log(globalVar);  
// }

// myFunction();
// console.log(globalVar);  


                 //HW FOR DAY 80
    
//     const people = [ // 1
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 30 },
//     { name: 'Charlie', age: 20 }
//   ];
  
//   const names = people.map(person => person.name);
//   console.log(names);


//   function isPrime(num) { // 2
//     if (num <= 1) return false;
//     if (num <= 3) return true;
//     if (num % 2 === 0 || num % 3 === 0) return false;
//     for (let i = 5; i * i <= num; i += 6) {
//       if (num % i === 0 || num % (i + 2) === 0) return false;
//     }
//     return true;
//   }
  
//   const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];
//   const primeStatus = numbers.map(num => isPrime(num));
//   console.log(primeStatus); 
  
  

//   const students = [ // 3
//     { name: 'Alice', grade: 70 },
//     { name: 'Bob', grade: 55 },
//     { name: 'Charlie', grade: 85 }
//   ];
  
//   const passedStudents = students.filter(student => student.grade > 60);
//   console.log(passedStudents); 


  
//   const files = ['image1.jpg', 'document.pdf', 'image2.jpg', 'script.js']; // 4

// const jpgFiles = files.filter(fileName => fileName.endsWith('.jpg'));
// console.log(jpgFiles);

  

// function customMap(arr, callback) { // 5
//     const mappedArray = [];
//     for (let i = 0; i < arr.length; i++) {
//       mappedArray.push(callback(arr[i], i, arr));
//     }
//     return mappedArray;
//   }
  
//   const originalArray = [1, 2, 3];
//   const doubledArray = customMap(originalArray, num => num * 2);
//   console.log(doubledArray); 



    // const ages = [32, 33, 16, 40]; // filter

    // document.getElementById("demo").innerHTML = ages.filter(checkAdult);
               
    // function checkAdult(age) {
    
    //   return age >= 18;
    // }

    
    // const fruits = new Map([ //map create
    //   ["apples", 500],
    //   ["bananas", 300],
    //   ["oranges", 200]
    // ]);
    
    // document.getElementById("demo").innerHTML = fruits.get("apples");



                       // DAY 82 CW - DICTIONARY 

  

                      //DAY 83 HW

function sumArrayElements(arr) { //1
    let sum = 0;
    arr.forEach(num => {
        sum += num;
    });
    return sum;
}

const numbers = [1, 2, 3, 4, 5];
console.log(sumArrayElements(numbers)); 



function logArrayElements(arr) { //2
    arr.forEach((element, index) => {
        console.log(`Element at index ${index}: ${element}`);
    });
}

const strings = ["apple", "banana", "orange"];
logArrayElements(strings);



function productOfArrayElements(arr) { //3
    return arr.reduce((product, num) => {
        return product * num;
    }, 1);
}

const numbers = [2, 3, 4];
console.log(productOfArrayElements(numbers));



function mergeArrayOfArrays(arr) { //4
    return arr.reduce((merged, currentArray) => {
        return merged.concat(currentArray);
    }, []);
}

const arrayOfArrays = [
    [{ id: 1, name: 'John' }, { id: 2, name: 'Alice' }],
    [{ id: 3, name: 'Bob' }]
];

console.log(mergeArrayOfArrays(arrayOfArrays));



function customForEach(arr, callback) { //5
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i, arr);
    }
}

const numbers = [1, 2, 3];
customForEach(numbers, (num, index) => {
    console.log(`Element at index ${index}: ${num}`);
});



function customReduce(arr, callback, initialValue) { //6
    let accumulator = initialValue === undefined ? arr[0] : initialValue;
    const startIndex = initialValue === undefined ? 1 : 0;

    for (let i = startIndex; i < arr.length; i++) {
        accumulator = callback(accumulator, arr[i], i, arr);
    }

    return accumulator;
}

const numbers = [1, 2, 3, 4];
const sum = customReduce(numbers, (acc, num) => acc + num, 0);
console.log(sum); 



function countWordFrequencies(arr) { //7
    return arr
        .flatMap(sentence => sentence.split(' '))
        .reduce((wordCounts, word) => {
            wordCounts[word] = (wordCounts[word] || 0) + 1;
            return wordCounts;
        }, {});
}

const sentences = ["Hello world", "This is a world of hello"];
console.log(countWordFrequencies(sentences));
