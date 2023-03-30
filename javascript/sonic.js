const sonic = document.querySelector('.sonic');
const pipe = document.querySelector('.pipe');

const start = document.querySelector('.start');
const gameOver = document.querySelector('.game-over')

const jump = () => {
    //adicionando a classe jump
    sonic.classList.add('jump');

    //removendo a classe jump --reset
    setTimeout(() => {
        sonic.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const sonicPosition = +window.getComputedStyle(sonic).bottom.replace('px', '');

    if (pipePosition <= 110 && pipePosition > 0 && sonicPosition < 80) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        sonic.style.animation = 'none';
        sonic.style.bottom = `${sonicPosition}px`;

        sonic.src = 'img/sonic-game-over.png'
        sonic.style.width = '140px'
        sonic.style.height= '140px'
        sonic.style.margin = '0'

        clearInterval(loop);
    }

}, 10);

document.addEventListener('keydown', jump);

document.addEventListener('touchstart', jump);