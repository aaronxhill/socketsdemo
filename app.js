var fs = require('fs');
var data1 = fs.readFileSync(__dirname + '/index1.html');
var data2 = fs.readFileSync(__dirname + '/index2.html');
var data3 = fs.readFileSync(__dirname + '/index3.html');

var app = require('http').createServer(handler)
var io = require('socket.io')(app);

app.listen(8080);

// function handler (req, res) {
//   fs.readFile(__dirname + '/index.html',
//   function (err, data) {
//     if (err) {
//       res.writeHead(500);
//       return res.end('Error loading index.html');
//     }

//     res.writeHead(200);
//     res.end(data);
//   });
// }

function handler (req, res) {
  // fs.readFile(__dirname + '/index.html',
  // function (err, data) {
  //   if (err) {
  //     res.writeHead(500);
  //     return res.end('Error loading index.html');
  //   }

    res.writeHead(200);
    res.write(data1);
    res.write(data2);
    res.end(data3);
  });
}


io.on('connection', function (socket) {
  // socket.emit('news', { hello: 'world' });
  socket.on('buttonPress', function (data) {
    io.emit('newData', { newD : 'relay data to browser' });
    console.log('button was pressed on local client');
  });
});
