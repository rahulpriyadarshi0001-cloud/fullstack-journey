function greet(name){
  return `Hello , ${name}`;
}

const greetarrow = (name) =>{
  return `Hello , ${name}`;
};

const greetpro = (name) => `Hello , ${name}`;

const square = (number) => number*number;

console.log(greet("rahul"));
console.log(greetarrow("rahul"));
console.log(greetpro("rahul"));
console.log(square(2));


const numbers = [1,2,3,4,5,6,7,8,9,10];
const squared = numbers.map(num =>num *num);

console.log("Squared Array:" , squared);

const evens = numbers.filter(num => num %2 === 0);
console.log("even number:",evens);

const totalsum = numbers.reduce((acc,curr) =>acc + curr, 0);
console.log("total sum:",totalsum);

const projects = [
  { name: "Portfolio", score: 90, completed: true },
  { name: "Weather App", score: 70, completed: false },
  { name: "Task Manager", score: 85, completed: true },
  { name: "Landing Page", score: 60, completed: false },
];

const finishedProjects = projects.filter(project => project.completed === true) .map(project => project.name);
const projectNames = projects.map(project => project.name);

console.log(finishedProjects);
console.log(projectNames);

const highScoreNames = projects
      .filter(project => project.score > 80)
      .map(project => project.name);

console.log(highScoreNames);



console.log(".....destructuring & spread .....");


const devProfile ={
  name: "Rahul",
  locations : "patna",
  skills:["HTML" , "CSS" , "Git"],
  experience:{
    years: 0 ,
    status: "Learning"
  }
};

const {name , locations , experience:{status}} = devProfile;
console.log(`${name} is based in ${locations} and is currently ${status}.`);

const updatedSkills = [...devProfile.skills,"javaScript","Tailwind"];
console.log("all skills:" , updatedSkills);

const [bestSkill , ...otherSkills] = updatedSkills;
console.log("Best skill:" , bestSkill);
console.log("Other skills to master :" , otherSkills);

console.log("....scope & Hoisting....");
if(true){
  let blockVariable = "I only exist inside this If block!";
  console.log(blockVariable);

}
