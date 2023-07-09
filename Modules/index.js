const fs = require("fs");

const readFileAsync = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, "utf8", (err, data) => {
      if (err) reject("Error, File not found in the system.");
      resolve(data);
    });
  });
};

module.exports = { readFileAsync };
