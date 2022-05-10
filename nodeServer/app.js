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

app.get("/", (req, res) => {
  res.send("You are on the homepage.");
});

app.get("/:fruit/:someFruits", (req, res) => {
  // Destructing an object like:
  // let {someFruits} = req.params;
  //以下就可以直接使用someFruits;
  res.send("You are looking for " + req.params.someFruits + ".");
});

//routing for query

//routing for everything
app.get("*", (req, res) => {
  res.send("Cannot find waht you ware looking for.");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});
