document.addEventListener("DOMContentLoaded", function() {
    const startButton = document.querySelector("button");
    let gameStarted = false; // Variable para controlar si el juego ya está en marcha

    startButton.addEventListener("click", startGame);

    function startGame() {
        if (gameStarted) return; // Si el juego ya está en marcha, no hagas nada
        gameStarted = true; // Establece el estado del juego en marcha

        let score = 0;
        const scoreDisplay = document.querySelector('.score');
        const timerDisplay = document.querySelector('.countdown');
        const holes = document.querySelectorAll('.hole');

        let timeLeft = 10; // Tiempo en segundos
        let centisecondsLeft = 99; // Centésimas de segundo
        timerDisplay.textContent = formatTime(timeLeft, centisecondsLeft);

        function showMole() {
            const randomHoleIndex = getRandomNumber(0, holes.length - 1);
            const randomHole = holes[randomHoleIndex];
            const mole = randomHole.querySelector('.mole');

            if (!mole.classList.contains('up')) { // Asegurarse de que el agujero esté vacío antes de mostrar el topo
                mole.classList.add('up');
                setTimeout(() => {
                    mole.classList.remove('up');
                }, getRandomNumber(500, 1500)); // Mostrar el topo durante un tiempo aleatorio
            }

            setTimeout(showMole, getRandomNumber(500, 1500)); // Llamar a showMole de nuevo después de un tiempo aleatorio
        }

        function bonkMole(e) {
            if (!e.isTrusted) return; // Evitar clics simulados
            if (!this.classList.contains('up')) return; // No sumar puntos si no hay topo
            score++;
            this.classList.remove('up');
            scoreDisplay.textContent = score;
        }

        holes.forEach(hole => hole.addEventListener('click', bonkMole));

        let gameOver = false;

        showMole(); // Comienza a mostrar los topos

        const timerInterval = setInterval(() => {
            centisecondsLeft--;
            if (centisecondsLeft < 0) {
                centisecondsLeft = 99;
                timeLeft--;
            }
            timerDisplay.textContent = formatTime(timeLeft, centisecondsLeft);

            if (timeLeft < 0) {
                clearInterval(timerInterval);
                gameOver = true;
                gameStarted = false; // Reiniciar el estado del juego
                alert('¡Fin del juego! Tu puntuación final es: ' + score);
                timeLeft = 0;
            }
        }, 10); // Actualizar cada centésima de segundo
    }
});

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function formatTime(seconds, centiseconds) {
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
    const formattedCentiseconds = centiseconds < 10 ? `0${centiseconds}` : centiseconds;
    return `${formattedSeconds}:${formattedCentiseconds}`;
}
