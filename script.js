document.body.addEventListener('click', function() {
    const video = document.getElementById('background-video');
    if (video.muted) {
        video.muted = false;
    }
});
