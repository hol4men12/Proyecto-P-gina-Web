const video = document.getElementById('myVideo');
const playIcon = document.getElementById('playIcon');
const pauseIcon = document.getElementById('pauseIcon');
const playPauseButton = document.getElementById('playPauseButton');

function playPause() {
    if (video.paused) {
        video.play();
        playIcon.style.display = 'none';
        pauseIcon.style.display = 'block';
    } else {
        video.pause();
        pauseIcon.style.display = 'none';
        playIcon.style.display = 'block';
    }
}

video.addEventListener('timeupdate', () => {
    const progress = (video.currentTime / video.duration) * 100;
    progressBar.value = progress;

    // Actualizar el contador de tiempo
    const minutes = Math.floor(video.currentTime / 60);
    const seconds = Math.floor(video.currentTime % 60);
    currentTime.textContent = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
});

// Control de la barra de progreso
progressBar.addEventListener('input', () => {
    const newTime = (progressBar.value / 100) * video.duration;
    video.currentTime = newTime;
});

// Cuando el documento esté completamente cargado
window.addEventListener("load", function() {
    document.body.classList.add("loaded");
});

   