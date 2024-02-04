import VimeoPlayer from "@vimeo/player";
const vimeoElement = document.getElementById("vimeo-player");
const player = new VimeoPlayer(vimeoElement, {
  videoId: "236203659",
});

  player.on("timeupdate", () => {
    localStorage.setItem("videoplayer-current-time", player.currentTime);
  });

  player.on("ready", () => {
    
    const localStorageTime = localStorage.getItem("videoplayer-current-time");
  
    if (localStorageTime !== null) {
      player.currentTime = localStorageTime;
    }
  });