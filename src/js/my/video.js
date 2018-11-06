var videoEl = document.getElementsByTagName('video')[0];
if(videoEl){
// если браузер может воспроизводить видео удаляем класс
videoEl.addEventListener('canplaythrough', function () {

}, false);
// запускам или останавливаем воспроизведение
videoEl.addEventListener('click', function () {
    if (videoEl.paused) {
        videoEl.play();
        videoEl.classList.remove('play');
        videoEl.classList.add('pause');
    } else {
        videoEl.pause();
        videoEl.classList.remove('pause');
        videoEl.classList.add('play');
    }
}, false);

videoEl.addEventListener('ended', function () {
    videoEl.currentTime = 0;
    videoEl.classList.remove('pause');
    videoEl.classList.add('play');
}, false);
}


