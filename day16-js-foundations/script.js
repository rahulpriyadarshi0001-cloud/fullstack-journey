console.log("Hello Rahul  kaise hai aap");
const Name = "rahul";
const birthYear = 2006;

let currentDay = 16;
let mood = "excied";

console.log("--- Initial Memory ---");
console.log("Name:", Name);
console.log("Day:", currentDay);
console.log("Mood:", mood);

currentDay = 17;
mood = "mind-blown";
// myName = "satish";

console.log("--- Updated Memory ---");
console.log("New Day:", currentDay);
console.log("New Mood:", mood);


const city = "patna";
const greeting = "welcome to " + city;
console.log("string ressult:" , greeting);

let hoursStudied = 2;
let dayInWeek = 7;
let totalStudiedHours = hoursStudied * dayInWeek ;
console.log("Number result:" , totalStudiedHours, "hours per week");

let isDay16Complete = false;
console.log("Is Day 16 done?:" , isDay16Complete);

let result = "The toal is : " + totalStudiedHours;
console.log("mixed result :" ,result);

const myName = "Rahul";
const goal = "Full-stack Developer";
const days = 60;
const summary = `My name is ${myName} . My goal is to become a ${goal} in ${days} Days!`;

console.log(summary);

const totalDays = 60;
let daysCompleted = 16;
let daysRemaining = totalDays - daysCompleted;
console.log(`Days left in the journey : ${daysRemaining}`);

let progressPercent = (daysCompleted / totalDays) * 100;
console.log(`progress : ${progressPercent.toFixed(2)} %`);

let isHalfway = daysCompleted >= (totalDays/2);

console.log("Am I halfway done?:" ,isHalfway);

let currentDayType = "number";
let a = 10;
let b = "10";

console.log("strict equality (10===10) :" , a===b);