document.body.addEventListener('click', function() {
    const video = document.getElementById('background-video');
    if (video.paused) {
        video.muted = false; // Desactivar el mute solo si se hace clic
        video.play().catch(error => {
            console.error("Error al intentar reproducir el video: ", error);
        });
    }
});
