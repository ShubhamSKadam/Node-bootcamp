## What is Node.js ?

NODE.JS IS A JAVASCRIPT RUNTIME BUILT ON GOOGLE’S OPEN-SOURCE V8 JAVASCRIPT ENGINE.

#### Node.js Pros

-   Single-threaded, based on event driven, non-blocking I/O model.

-   Perfect for building fast and scalable data-intensive apps.
-   Companies like Netflix, Uber, PayPal, ebay have started using node in production.
-   JavaScript across the entire stack: faster and more efficient development.
-   NPM: huge library of open-source packages available for everyone for free.
-   Very active developer community.

#### Use Node.js

-   API with database behind it (preferably NoSQL);

-   Data streaming (think YouTube);
-   Real-time chat application;
-   Server-side web application

#### Don't use

Applications with heavy server-side processing
(CPU-intensive).

### SYNCHRONOUS VS. ASYNCHRONOUS CODE (BLOCKING VS. NON-BLOCKING)

#### Synchronous Code :

Below is an example of Synchronous code.

```js
const fs = require("fs");
// Blocking Synchronous way
const textIn = fs.readFileSync("txt/input.txt", "utf-8");
console.log(textIn);
```

It's your job to avoid this type of situation.

<img src="Notes-Img\N1.png" alt="N1" style="zoom:30%;" />

#### Asynchronous Code :

Below is an example of Asynchronous code.
It is also known as CallBack Hell.

```js
fs.readFile("txt/start.txt", "utf-8", (err, data1) => {
    if (err) return console.log("ERR");
    fs.readFile(`txt/${data1}.txt`, "utf-8", (err, data2) => {
        console.log(data2);
        fs.readFile("txt/append.txt", "utf-8", (err, data3) => {
            console.log(data3);
            fs.writeFile(
                "txt/final.txt",
                `${data2}\n${data3}`,
                "utf-8",
                (err) => {
                    console.log("Your file has been written !");
                }
            );
        });
    });
});
```

The solution to this is to Using Promises or Async/Await

Non Blocking I/O model :

<img src="Notes-Img\N2.png" alt="N2" style="zoom:30%;" />
