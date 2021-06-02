const { myNumber, myString, myFunction } = require("./client");

let conn;
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", (key) => {handleUserInput(key)});
  return stdin;
};


const handleUserInput = function (key) {
  
  if (key === '\u0075') {
    conn.write('Move: up');
  } else if (key === '\u0064') {
    conn.write('Move: down');
  } else if (key === '\u006c') {
    conn.write('Move: left');
  } else if (key === '\u0072') {
    conn.write('Move: right');
  }

};

module.exports = { setupInput };