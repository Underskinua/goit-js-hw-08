import VimeoPlayer from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.getElementById("vimeo-player");
const player = new VimeoPlayer(iframe, {
  loop: true,
});

const throttledTimeupdate = throttle(() => {
  localStorage.setItem("videoplayer-current-time", player.currentTime);
}, 1000);

player.on("timeupdate", throttledTimeupdate);

const localStorageTime = localStorage.getItem("videoplayer-current-time");

if (localStorageTime !== null) {
  player.setCurrentTime(localStorageTime).then(function(seconds) {
    // ...
  }).catch(function(error) {
    // ...
  });
}

  