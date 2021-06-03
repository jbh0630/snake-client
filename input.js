
let connection;
const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};


const handleUserInput = function (key) {
  
  if (key === '\u0003') {
    process.exit();
  } else if (key === 'w') {
    connection.write('Move: up');
    console.log('Move up');
  } else if (key === 's') {
    connection.write('Move: down');
    console.log('Move down');
  } else if (key === 'a') {
    connection.write('Move: left');
    console.log('Move left');
  } else if (key === 'd') {
    connection.write('Move: right');
    console.log('Move right');
  }

};

module.exports = { setupInput };