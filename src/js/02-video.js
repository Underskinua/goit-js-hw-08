import VimeoPlayer from "@vimeo/player";
import throttle from "lodash.throttle";

// Восстановление воспроизведения
const localStorageTime = localStorage.getItem("videoplayer-current-time");

const iframe = document.getElementById("vimeo-player");
const player = new VimeoPlayer(iframe, {
  loop: true,
});

const throttledTimeupdate = throttle(() => {
const currentTime = player.getCurrentTime();
  
  localStorage.setItem("videoplayer-current-time", currentTime);
}, 1000);

player.on("timeupdate", throttledTimeupdate);

if (localStorageTime !== null & !isNaN(localStorageTime)) {
  player.setCurrentTime(localStorageTime).then((seconds) => {
    // ...
    console.log("Video playback successfully restored to", seconds, "seconds");
  }).catch((error) => {
    // ...
    console.error("Error restoring video playback:", error);
  });
}

  