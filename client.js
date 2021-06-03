const net = require("net");

const connect = function (key) {
  const conn = net.createConnection({
    host: '135.23.222.131',
    port: 50542,
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