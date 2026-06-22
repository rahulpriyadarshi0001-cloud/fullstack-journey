// // const simulateServerRequest = () =>{
// //   return new Promise((resolve,reject) =>{
// //     console.log("Server: I'm thinking...(2 seconds");

// //     setTimeout(() =>{
// //       const success = true;
// //       if(success) {
// //         resolve("Success: Here is your data from the server!");
// //       } else{
// //         reject("Error: Server is down!");
// //       }
// //     },2000);
// //   });
// // };

// // async function getMyData() {
// //   console.log("1.Requesting data...");

// //   try {
// //     const result = await simulateServerRequest();
// //     console.log("2." + result);
// //   } catch(error) {
// //     console.log("Catch block caught an error:" ,error);
// //   }
// //   console.log("3. I am now running AFTER the data arrived!");
// // }
// // console.log("START");
// // getMyData();
// // console.log("END");


// // console.log("1. I am the first line.");

// // // setTimeout takes two things: 
// // // 1. A function to run (the "What")
// // // 2. The time in milliseconds (the "When") -> 1000ms = 1 second

// // setTimeout(() => {
// //     console.log("2. I am fast timer");
// // }, 100);

// // setTimeout(() => {
// //     console.log("2. I am the slower timer");
// // }, 5000);

// // console.log("3. I am the last line of the script.");



// console.log("--- Promise Test ---");

// // This function returns a PROMISE
// const fetchUserData = () => {
//     return new Promise((resolve, reject) => {
//         console.log("📡 Requesting data from server...");
        
//         setTimeout(() => {
//             const success = true; // Change to false to test the 'reject' (error) case!

//             if (success) {
//                 resolve("User Data: { name: 'Rahul', level: 'Pro' }"); // This 'resolves' the promise
//             } else {
//                 reject("❌ Server Error: Could not fetch data!"); // This 'rejects' the promise
//             }
//         }, 2000);
//     });
// };

// // // How to use the Promise
// // console.log("1. I'm calling the server now...");

// // fetchUserData()
// //     .then((data) => {
// //         // This runs ONLY if the promise is RESOLVED
// //         console.log("2. Promise Resolved! Result:", data);
// //     })
// //     .catch((err) => {
// //         // This runs ONLY if the promise is REJECTED
// //         console.log("3. Promise Rejected!", err);
// //     })
// //     .finally(() => {
// //         // This runs NO MATTER WHAT (resolved or rejected)
// //         console.log("4. Operation complete. Closing connection.");
// //     });

// // console.log("5. I am the last line, and I run while the server is still thinking!");

// async function getMyDataProfessional() {
//   console.log("1. Requesting data (Modern way)...");

//   try {
//     const result = await fetchUserData();

//     console.log("2. " +result);
//   } catch(error){
//     console.log("Error caught:", error);
//   } finally{
//     console.log("3.Operation complete. Closing connection.");
//   }

//   console.log("4. I am now running AFTER the data arrived!");
// }

// console.log("START");
// getMyDataProfessional();
// console.log("END");

const apiText = document.querySelector('#api-text');
const refreshBtn = document.querySelector('#refresh-btn');

async function getRealData() {
  apiText.innerText = "fectching data.... please wait...";
  apiText.computedStyleMap.color = "#8888A0";
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');

    const data = await response.json();

    apiText.innerText = `Task: ${data.title}`;
    apiText.computedStyleMap.color = "#00E5FF";
  }catch (error){
    apiText.innerText = "failsed to load data.";
    apiText.computedStyleMap.color = "#FF6B6B";
  }
}


getRealData();
refreshBtn.addEventListener('click',getRealData);