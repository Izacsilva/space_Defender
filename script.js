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
pincel.moveTo(75, 250);
pincel.lineTo(150, 50);
pincel.lineTo(225, 250);
pincel.lineTo(50, 120);
pincel.lineTo(250, 120);
pincel.lineTo(75, 250);
pincel.stroke()

pincel.fillStyle = 'lightgray'
pincel.strokeStyle = 'lightcoral'
pincel.lineWidth = 3;
pincel.beginPath()
pincel.arc(
    300,  // O centro do arco X
    200,  // O centro do arco X
    50,     // Raio == tamanho
    90*Math.PI/180, // 180 é == a metade de um círculo
    270*Math.PI/180, // Final do arco
    false
)
pincel.fill()
pincel.stroke();

// pincel.beginPath();
pincel.arc(
    400,
    200,
    50,
    90*Math.PI/180,
    270*Math.PI/180,
    true
);
pincel.fill();
pincel.stroke();

            // Objeto construtor
let imagem = new Image(); // Objeto Imagem.

imagem.src = './imagens/ovni.png'

imagem.onload = function() {

    pincel.drawImage(imagem, 400, 200, 64, 32);
    
    let x = 20;

    for (let i = 1; i <= 4; i++) {
        pincel.drawImage(imagem, x, 20, 64, 32);
        x += 70;
    }
}

let explosion = new Image();
explosion.src = './imagens/explosao.png'

explosion.onload = function() {
    pincel.drawImage(
        explosion,

        80, 10, 60, 65,
        20, 20, 60, 65
    );
}

pincel.fillStyle = 'green'
pincel.fillRect(50,300, 25,25);
pincel.save() // Irá empilhar a configuração a cima e manter - la salva

pincel.fillStyle = 'purple'
pincel.fillRect(150,300, 25,25);
pincel.restore() // Irá voltar na pilha, pegar o verder e aplicar no proxímo quadrado

pincel.fillRect(250,300, 25,25);
