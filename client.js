const net = require("net");

const myNumber = 42;
const myString = "hello";
const myFunction = () => {
  // myFunction's code
  connect();
};

const connect = function () {
  const conn = net.createConnection({
    host: '135.23.222.131',
    port: 50542,
  });

  conn.setEncoding("utf8");

  conn.on('connect', () => {
    console.log('you are connected');
  });
  return conn;
};


module.exports = {
  myNumber, // stores 42 as myNumber
  myString, // stores "hello" as myString
  myFunction, // stores the function as myFunction
};