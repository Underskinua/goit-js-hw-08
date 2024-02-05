import VimeoPlayer from "@vimeo/player";
import throttle from "lodash.throttle";

// Сохранение ключа для локального хранилища 
//const localStorageTime = "videoplayer-current-time";

// Инициалзация плеера
const player = new VimeoPlayer('vimeo-player');



player.on('play', function() {
  console.log('played the video!');
});
  

// Запуск плеєра
player.play();