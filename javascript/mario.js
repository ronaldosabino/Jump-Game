const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const start = document.querySelector('.start');
const gameOver = document.querySelector('.game-over')

audioStart = new Audio('./src/audio/audio_theme.mp3')
audioGameOver = new Audio('./src/audio/audio_gameover.mp3')

const jump = () => {
    //adicionando a classe jump
    mario.classList.add('jump');

    //removendo a classe jump --reset
    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');


    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = 'img/mario-game-over.png'
        mario.style.width = '140px'
        mario.style.height= '140px'
        mario.style.margin = '0'

        clearInterval(loop);
    }

}, 10);

document.addEventListener('keydown', jump);

document.addEventListener('touchstart', jump);