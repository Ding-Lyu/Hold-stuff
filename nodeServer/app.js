// const http = require("http");
// const url = require("url");
// const fs = require("fs");
// const path = require("path");

// const server = http.createServer((req, res) => {
//   if (req.url == "/") {
//     fs.readFile(path.join(__dirname, "index.html"), (err, data) => {
//       res.writeHead(200, { "Content-Type": "text.html" });
//       res.write(data);
//       res.end();
//     });
//   } else {
//     let parsedURL = url.parse(req.url);

//     res.write("Hello, " + parsedURL.pathname);
//     res.end();
//   }
// });

// server.listen(3501, () => {
//   console.log("Server is running on port 3501.");
// });

const express = require("express");
const app = express();
// 如果你从HTMl中传输数据以POST的形式，就要使用以下的声明：
const path = require("path");
// const bodyParser = require("body-parser");
// app.use(bodyParser.urlencoded({ extended: true }));
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "index.html"));
// });

//routing for query ===  POST
// app.post("/formHandling", (req, res) => {
//   let { fullName, age } = req.body;
//   res.send(
//     `Hi ${fullName}, we have received your application with age of ${age}.`
//   );
// });

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});
app.get("/formHandling", (req, res) => {
  console.log(req.query);
  res.send("Thanks for your submmition.");
});

app.get("/:fruit/:someFruits", (req, res) => {
  // Destructing an object like:
  // let {someFruits} = req.params;
  //以下就可以直接使用someFruits;
  res.send("You are looking for " + req.params.someFruits + ".");
});

//routing for everything
app.get("*", (req, res) => {
  res.status(404);
  console.log(res.statusCode);
  res.sendFile(path.join(__dirname, "error.html"));
});

app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});
