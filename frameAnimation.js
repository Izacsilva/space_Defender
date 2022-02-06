let frameBolAnimation = document.querySelector("#frameAnimation");
let pincelAnime = frameBolAnimation.getContext('2d');

// Dados da bola
let x = 20;
let y = 50;
let raio = 10;

// requestAnimationFrame(mexerBola)

// function mexerBola() {
//     pincelAnime.clearRect(0,0, 600,400);


//     pincelAnime.beginPath();
//     pincelAnime.fillStyle = 'blue'
//     pincelAnime.arc(x, y, raio, 0, Math.PI*2);
//     pincelAnime.fill();

    
//     y += 2;
//     requestAnimationFrame(mexerBola)
    
//     if (x >= 600 || y >= 400) {
//         x += 10
//         y = 0
//     }
// }

let anterior = new Date().getTime();

requestAnimationFrame(mexerBola)

function mexerBola() {
    let agora = new Date().getTime();

    let decorrido = agora - anterior;
    
    pincelAnime.beginPath();
    pincelAnime.fillStyle = 'blue'
    pincelAnime.arc(x, y, raio, 0, Math.PI*2);
    pincelAnime.fill();

    let velocidade = 20;
    x += velocidade * decorrido / 1000

    
    anterior = agora;// 
    requestAnimationFrame(mexerBola)
}
