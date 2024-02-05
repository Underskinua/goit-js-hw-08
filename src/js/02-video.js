import VimeoPlayer from "@vimeo/player";
import throttle from "lodash.throttle";

// Сохранение ключа для локального хранилища 
//const localStorageTime = "videoplayer-current-time";

// Инициалзация плеера
//const player = new VimeoPlayer("vimeo-player");

const iframe = document.querySelector("iframe");
const player = new Vimeo.Player(iframe);

player.on('play', function() {
  console.log('played the video!');
});
  

