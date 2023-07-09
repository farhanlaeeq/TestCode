const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const aplication = require("./application");

//---------------SERVER----------------
aplication.listen(process.env.PORT, () => {
  console.log("Welcome to the Node.js server!");
});
("");
