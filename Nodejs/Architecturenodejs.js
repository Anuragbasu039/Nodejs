// const { log } = require("console");
// const fs = require("fs")
// console.log("1");

//     //Blocking
//     const result = fs.readFileSync("contact.txt", "utf-8");
//     console.log(result);
//     console.log("2");


const { log } = require("console");
const os = require("os");
const fs = require("fs");

console.log(os.cpus().length)//size of cpu 

// console.log("1");

//Non-Blocking
const result = fs.readFile("contact.txt", "utf-8", (err, result) => {
    // console.log(result);
});
// console.log("2");



