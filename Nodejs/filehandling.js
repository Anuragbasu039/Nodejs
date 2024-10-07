const { log } = require("console");
const fs = require("fs");


// //Sync... call     //current directory  
// fs.writeFileSync('./test.txt', 'hello bro Sync')
// //Async..
// fs.writeFile("./test.txt", "hello Anurag Async", (err) => {})

// const result = fs.readFileSync('./contact.txt', 'utf-8')  //Sync..
// console.log(result); 

// fs.readFile("./contact.txt", "utf-8", (err, result) => {  //Async...
//     if(err){
//         console.log("error", err);
//                                                             //give callback function 
//     }else{
//         console.log(result);
        
//     }
// })

fs.appendFileSync("./test.txt", new Date().getDate().toLocaleString())
fs.appendFileSync("./test.txt",`hey there\n`)
fs.copyFileSync('./test.txt', './copy.txt')
fs.unlinkSync("./copy.txt")   //delete the file
console.log(fs.statSync('./test.txt'))