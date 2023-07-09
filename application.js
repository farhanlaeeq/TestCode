const express = require("express");
const { readFileAsync } = require("./Modules");
const userRouter = require("./routes/userRoutes.js");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//TASK 1
// Respond to any request from any URL
app.use((req, resp, next) => {
  //restricting it to "/" so that we can work on other https request
  //to send this message for all request just remove the if statement
  if (req.url == "/") {
    resp.writeHead(200, {
      "content-type": "application/json",
    });
    resp.end("Welcome to the Node.js server!");
  } else {
    next();
  }
});

//TASK 2
//Read any file using readFileAsync Module
const readFile = async () => {
  try {
    const data = await readFileAsync("./data/users.json");
    console.log(`Users Array: ${data}`);
  } catch (error) {
    console.log(error);
  }
};
// readFile();

//TASK 3
//HTTP CRUD requests
app.use("/", userRouter);

//SERVER
module.exports = app;
