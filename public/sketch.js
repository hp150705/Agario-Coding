let socket;
socket = io.connect('http://localhost:3000'  );
console.log(socket);

let ppc1;
let ppcs = [];
let ppcnumber = 100;
let player1;
let colors = ['red','yellow','blue','purple','pink','light-blue','green','orange','turquoise','black'];
let players = [];

function setup() {

  createCanvas(500, 500);
  for(let i = 0; i < ppcnumber; i++ ) {
    let pColor = color(random(255),random(255),random(255));
    ppc = new Phytoplancton(pColor);
    ppc.drawPlancton();
    ppcs.push(ppc);
  }
  player1 = new Player(200,200,random(colors));

  let data = {
    x : player1.x,
    y : player1.y,
    color : player1.color,
    diameter : player1.diameter
  };
  socket.emit('start',data);
  socket.on('heartbeat', (data) => {
    players = data;
  })


}

function draw() {
  background(220);
  ppcs.forEach(ppc => {
    ppc.drawPlancton();
  });

  player1.updatePlayer();
  player1.drawPlayer();
  player1.eat(ppcs);


  let data = {
    x : player1.x,
    y : player1.y,
    color : player1.color,
    diameter : player1.diameter
  }
  
/*  console.log(player1.x)*/
  socket.emit("updatePlayer", data);

  players.forEach( (player) => {
    player.drawPlayer();
    player.eat(ppcs);
  })

}










