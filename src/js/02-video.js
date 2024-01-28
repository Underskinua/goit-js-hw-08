import VimeoPlayer from "@vimeo/player";
const player = new VimeoPlayer({
    id: "vimeo-player",
    videoId: "236203659",
  });

  player.on("timeupdate", () => {
    localStorage.setItem("videoplayer-current-time", player.currentTime);
  });