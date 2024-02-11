import VimeoPlayer from "@vimeo/player";
import throttle from "lodash.throttle";

// Сохранение ключа для локального хранилища --Шаг-5
const localStorageTime = "videoplayer-current-time";
// Инициалзация плеера ---Шаг-3
const player = new VimeoPlayer('vimeo-player');
// Функция для обработки события 'play' --Шаг-4
function onPlay() {
  console.log('played the video!');
}
// Добавление события 'play'
player.on('play', onPlay);


// Отслеживание события timeupdate --Шаг-4
//player.on('timeupdate', function(data) {
  // Обновление времени воспроизведения
  //console.log('Отображено:', data.seconds, 'секунд');
  //console.log('Процент:', data.percent);
  // Сохранение текущего времени в локальном хранилище--Шаг-5
  //localStorage.setItem(localStorageTime, data.seconds);
  //console.log('Я сохраняюсь в localStorageTime');
//});

// Восстановление воспроизведения с сохраненной позиции
//const savedTime = localStorage.getItem(localStorageTime);
//if (savedTime) {
  //player.setCurrentTime(savedTime);
//}

// Функция для обновления времени воспроизведения
const throttledUpdate = throttle(function(data) {
  // Обновление времени воспроизведения
  console.log('Отображено:', data.seconds, 'секунд');
  console.log('Процент:', data.percent);

  // Сохранение текущего времени в локальном хранилище
  localStorage.setItem(localStorageTime, data.seconds);
  console.log('Время воспроизведения обновлено в хранилище')
}, 1000);

//Восстановление воспроизведения с сохраненной позиции
const savedTime = localStorage.getItem(localStorageTime);
if (savedTime) {
  player.setCurrentTime(savedTime);
}

// Отслеживание события timeupdate
player.on('timeupdate', throttledUpdate);