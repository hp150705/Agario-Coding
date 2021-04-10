console.log('hey')
let players = [];

class Player {
  constructor(x,y,color) {
    this.x = x;
    this.y = y;
    this.diameter = 50;
    this.color = color;
  }
  drawPlayer(){
    fill(this.color);
    circle(this.x,this.y,this.diameter)
  }
  updatePlayer(){
    this.x = mouseX +50;
    this.y = mouseY + 50;
 
  }
  eat(ppcs){
    ppcs.forEach(ppc => {
      let d = dist(ppc.x,ppc.y,this.x,this.y);
      if (d < (this.diameter + ppc.diameter-50)) {
        let index = ppcs.indexOf(ppc);
        ppcs.splice(index,1);
        this.diameter += 1;
      }
    })
  }
}

const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, showListen);


function showListen() {
	const port = server.address().port;
	console.log("je suis en train d'écouter le port" + port);
}

app.use(express.static('public'));

const io = require('socket.io')(server);

setInterval(heartbeat,33)
function heartbeat(){
	io.sockets.emit('heartbeat',players)
}

io.sockets.on('connection',(socket) => {
	console.log("we have a new websocket connection " + socket.id);

	socket.on('start', (data) => {
		console.log(data)
		let player = new Player(data.x,data.y,data.color)
		players.push(player)
	})

})



