/*
console.log("Hello World!!");

const myVariable = "Mathematics";

console.log(myVariable.length);

console.log(myVariable.charAt(5));

console.log(myVariable.indexOf("th"));

console.log(myVariable.slice(5, 8));
*/

//////////////////////////////////////////////////////////////////////////////////

/*
const myNumber = 42;
const myFloat = 42.01145;
const myString = "42";
const myFloat2 = 42.01165;


console.log(myFloat);

console.log(myNumber === myString);

console.log(myNumber == myString);

console.log(myString + 3);

console.log(Number(myString) + 3);

console.log(Number.isInteger(myNumber));

console.log(Number.isInteger(myFloat));

console.log(Number.parseFloat(myFloat));

console.log(myFloat2.toFixed(3));
*/

//////////////////////////////////////////////////////////////////////////////////

/*
console.log(Math.PI);
console.log(Math.trunc(Math.PI));
console.log(Math.round(Math.PI));
console.log(Math.round(3.5));
console.log(Math.ceil(3.4));
console.log(Math.floor(3.9));
console.log(Math.pow(2, 10));
console.log(Math.min(2, 5, 9));
console.log(Math.max(10, 20, 11));
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log((Math.random() * 10) + 1);
console.log((Math.random() * 10) + 1);
*/

//////////////////////////////////////////////////////////////////////////////////

/*
code challenge

write code that will return a random letter from your name

const myName = "Dania";
let l = myName.length;

let r =Math.random() * l;

let num = Math.floor(r);

let letter = myName.charAt(num);

console.log(letter);
*/

//////////////////////////////////////////////////////////////////////////////////

// if statements

/*
let customerIsBanned = false;
let soup = "chicken noodle soup";
let crackers = true;
let reply;

if (customerIsBanned) {
    reply = "No soup for you!";
} else if(soup && crackers) {
    reply = `Here's your order of ${soup} & crackers.`;
} else if (soup) {
    reply = `Here's your order of ${soup}`;
} else {
    reply = "Sorry, we're out of soup.";
}

console.log(reply);
*/

//////////////////////////////////////////////////////////////////////////////////

// User input 

/*
alert("Hello World!");

let myBoolean =  confirm("Ok === True\nCancle === False");
console.log(myBoolean);

let name1 = prompt("pleaase enter your name.");

if (name1) {
    console.log(name1.length);
    console.log(name1.trim().length);
    console.log(name1.trim());
} else {
    console.log("You didn't enter your name.");
}
*/

//////////////////////////////////////////////////////////////////////////////////

// Interactive Game

// rock, paper, scissors

/*
let playGame = confirm("shall we play rock, paper, or scissors?");

if(playGame) {
    let playerChoice = prompt("Please enter rock, paper, or scissors");
    if(playerChoice) {
        let playerOne = playerChoice.trim().toLowerCase();
        if(playerOne === "rock" || playerOne === "paper" || playerOne === "scissors") {
            let computerChoice = Math.floor(Math.random() * 3 + 1);
            let computer = computerChoice === 1 ? "rock": 
            computerChoice === 2 ? "paper":
            "scissors";

            let result = 
            playerOne === computer
            ? "Tie game!"
            : playerOne === "rock" && computer === "paper"
            ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
            : playerOne === "paper" && computer === "scissors"
            ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
            : playerOne === "scissors" && computer === "rock"
            ? `playerone: ${playerOne}\nComputer: ${computer}\nComputer wins!`
            : `playerOne: ${playerOne}\nComputer: ${computer}\nplayerOne wins!`;
        alert(result);
        let playAgain = confirm("Play again?");
        playAgain ? location.reload() : alert("Ok, thanks for playing.")
        } else {
            alert("You didn't entered rock, paper, or scissors");
        }
    } else {
        alert("I guess youchanged your mind. Maybe next time.");
    }

} else {
    alert("Ok, maybe next time.");
}
*/

//////////////////////////////////////////////////////////////////////////////////

// do while loop

/*
let myNumber = 0; 

do {
    myNumber += 2;
    console.log(myNumber);
}
while (myNumber < 50);
*/

//////////////////////////////////////////////////////////////////////////////////

// Functions
/*
function sum(num1, num2) {
    if (num2 === undefined) {
        num2 = 0;
    }
    return num1 + num2;
}

console.log(sum(2, 7));

function getUserNameFromEmail (email) {
    return email.slice(0, email.indexOf("@"));
}

console.log(getUserNameFromEmail("playerOne@gmail.com"));
console.log(getUserNameFromEmail("user@gmail.com"));

const getUserNameFromEmail1 = function (email) {
    return email.slice(0, email.indexOf("@"));
}

console.log(getUserNameFromEmail1("dania@gmail.com"));

// Arrow Function

const getUserNameFromEmail2 = (email) => {
    return email.slice(0, email.indexOf("@"));
}

console.log(getUserNameFromEmail2("user1@gmail.com"));


const toProperCase = (name1) => {
    return name1.charAt(0).toUpperCase() + name1.slice(1).toLowerCase();
}

console.log(toProperCase("daNia"));
*/

//////////////////////////////////////////////////////////////////////////////////

// Arrays
/*
const myArray = [];

myArray[0] = "Dania";
myArray[1] = 2000;
myArray[2] = false;

console.log(myArray);
console.log(myArray.length);
console.log(myArray[myArray.length - 1]);
console.log(myArray);

myArray.push("school");

console.log(myArray);

const lastItem = myArray.pop();

console.log(myArray);
console.log(lastItem);

const newLength = myArray.unshift(42);

console.log(myArray);
console.log(newLength);

const firstItem = myArray.shift();

console.log(firstItem);
console.log(myArray);

myArray.splice(1, 1, 42);
console.log(myArray);

myArray.splice(1, 1);

console.log(myArray);
console.log(myArray[1]);

myArray.splice(1, 0, 50);
console.log(myArray);

const newArray = ['A', 'B', 'C', 'D', 'E', 'F'];

const array1 = newArray.slice(2, 5);
console.log(array1);

newArray.reverse();
console.log(newArray);

newArray.sort();
console.log(newArray);

const newString = newArray.join();
console.log(newString);

const array2 = newString.split(",");
console.log(array2);

const arrayA = ['A', 'B', 'C'];
const arrayB = ['D', 'E', 'F'];
const arrayC = arrayB.concat(arrayA);
console.log(arrayC);

const equipShelfA = ["baseball", "football", "volleyball"];
const equipShelfB = ["basketball", "golf balls", "tennis balls"];

const clothesShelfA = ["tank tops", "t-shirts", "jerseys"];
const clothesShelfB = ["sweat tops", "sweat pants", "hoodies"];

console.log(equipShelfA[1]);
console.log(clothesShelfB[0]);

const equipDept = [equipShelfA, equipShelfB];
const clothesDept = [clothesShelfA, clothesShelfB];

console.log(equipDept[0][1]);
console.log(clothesDept[1][0]);

const sportStore = [equipDept, clothesDept];
console.log(sportStore);
console.log(sportStore[0][0][1]);
console.log(sportStore[1][1][0]);
*/

//////////////////////////////////////////////////////////////////////////////////

// Objects
/*
const myObj = {name: "Dania"};

const anotherObj = {
    alive: true,
    answer: 30,
    hobbies: ["Eat", "sleep", "code"],
    beverage: {
        morning: "Coffee",
        afternoon: "Iced Tea"
    },
    action: function() {
        return `Time for ${this.beverage.afternoon}`;
    }
};

console.log(myObj);
console.log(anotherObj.alive);
console.log(anotherObj.hobbies[1]);
console.log(anotherObj.beverage.morning);
console.log(anotherObj["answer"]);
console.log(anotherObj.action());

const vehicle = {
    wheels: 4,
    engine: function() {
        return "Vrroooom!";
    }
}

const truck = Object.create(vehicle);
truck.doors = 2;

console.log(truck);
console.log(truck.wheels);
console.log(truck.engine());

const car = Object.create(vehicle);
car.doors = 4;
car.engine = function() {
    return "............";
}

console.log(car.engine());
console.log(car.wheels);

const tesla = Object.create(car);

console.log(tesla.wheels);
console.log(tesla.engine());

tesla.engine = function() {
    return "shhhhh...";
}

console.log(tesla.engine());

const band = {
    vocals: "Robert Plant",
    guitar: "Jimmy Page",
    bass: "John Paul Jones",
    drums: "John Bonham"
};

delete band.drums;

console.log(band.hasOwnProperty("drums"));
console.log(Object.keys(band));
console.log(Object.values(band));

for (let job in band) {
    console.log(`On ${job}, it's ${band[job]}!`);
}

const {guitar: myVariable, bass: myBass} = band;
console.log(myVariable);
console.log(myBass);

const {vocals, guitar, bass, drums} = band;
console.log(vocals);
*/

// Classes
/*
class Pizza {
    constructor(pizzaType) {
        this.type = pizzaType;
        this.size = "medium";
        this.crust = "original";
    }
    getCrust() {
        return this.crust;
    }
    setCrust(pizzaCrust) {
        this.crust = pizzaCrust;
    }
    bake() {
        console.log(`Baking a ${this.size} ${this.type} ${this.crust} crust pizza.`);
    }
}

const myPizza = new Pizza("pepperoni");
myPizza.setCrust("thin");
myPizza.bake();
console.log(myPizza.getCrust());
*/

//////////////////////////////////////////////////////////////////////////////////

// JSON
/*
const myObj = {
    myname: "Dania",
    hobbies: ["Eat", "sleep", "code"],
    hello: function() {
        console.log("Hello!");
    }
};

console.log(myObj);
console.log(myObj.myname);
myObj.hello();
console.log(typeof myObj);

const sendJSON = JSON.stringify(myObj);
console.log(sendJSON);
console.log(typeof sendJSON);
console.log(sendJSON.myname);

const recieveJSON = JSON.parse(sendJSON);
console.log(recieveJSON);
console.log(typeof recieveJSON);
*/

//////////////////////////////////////////////////////////////////////////////////

// Errors

// https://www.youtube.com/watch?v=blBoIyNhGvY&list=PL0Zuz27SZ-6Oi6xNtL_fwCrwpuqylMsgT&index=20

//////////////////////////////////////////////////////////////////////////////////

// 