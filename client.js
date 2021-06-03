const net = require("net");
const { IP, PORT } = require("./constants");
const connect = function (key) {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  conn.setEncoding("utf8");

  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    conn.write('Name: BHJ');
    
    if (key === '\0075') {
      conn.write('Move: up');
    }
  });



  return conn;
};


module.exports = { connect };