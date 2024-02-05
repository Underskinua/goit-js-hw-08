import VimeoPlayer from "@vimeo/player";
import throttle from "lodash.throttle";

// Зберігання ключа для локального сховища
const localStorageTime = "videoplayer-current-time";

// Ініціалізація плеєра

const player = new VimeoPlayer("vimeo-player");

player.on('play', function() {
  console.log('played the video!');
});
  

