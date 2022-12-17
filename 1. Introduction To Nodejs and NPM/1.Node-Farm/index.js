// fs is a module used for working over  file systems
const fs = require("fs");
const http = require("http");

/// WORKING WITH FILES

// Blocking Synchronous way
// const textIn = fs.readFileSync("txt/input.txt", "utf-8");
// console.log(textIn);

// const textOut = `This is what we know about Avocado: ${textIn}.\nCreated on ${Date.now()}`;

// fs.writeFileSync("txt/newOutput.txt", textOut);
// console.log("File written");

// Non-blocking asynchronous way
// fs.readFile("txt/start.txt", "utf-8", (err, data) => {
//   console.log(data);
// });

// fs.readFile("txt/start.txt", "utf-8", (err, data1) => {
//   if (err) return console.log("ERR");
//   fs.readFile(`txt/${data1}.txt`, "utf-8", (err, data2) => {
//     console.log(data2);
//     fs.readFile("txt/append.txt", "utf-8", (err, data3) => {
//       console.log(data3);
//       fs.writeFile("txt/final.txt", `${data2}\n${data3}`, "utf-8", (err) => {
//         console.log("Your file has been written !");
//       });
//     });
//   });
// });

// CREATING A WEB SERVER
const server = http.createServer((req, res) => {
  res.end("Hello from the server !");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to requests at port 8000");
});
