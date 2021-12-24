import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

// player.on('play', function () {
//   console.log('played the video!');
// });

// player.on('ended', function () {
//   console.log('ended the video!');
// });

const STORAGE_KEY = 'videoplayer-current-time';

player.on('timeupdate', throttle(throttled, 1000));

function throttled(data) {
  localStorage.setItem('STORAGE_KEY', data.seconds);
}

const saveSeconds = localStorage.getItem('STORAGE_KEY');
player.setCurrentTime(saveSeconds).then(function (seconds) {});
