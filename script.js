let frameGame = document.querySelector("#frameGame");

let pincel = frameGame.getContext('2d');

pincel.fillStyle = 'red'
pincel.fillRect (55,55,90,90);

pincel.strokeStyle = 'blue'
pincel.lineWidth = '5'
pincel.strokeRect (45,45,110,110);

pincel.strokeStyle = 'blue'
pincel.lineWidth = '5'
pincel.strokeRect (35,35,130,130);

pincel.lineWidth = '5'
pincel.beginPath()
pincel.moveTo(300,50)
pincel.lineTo(200,200)
pincel.lineTo(400,100)
pincel.stroke()


pincel.moveTo(300,50)
pincel.lineTo(50,50)
pincel.lineTo(400,100)
pincel.fill()

