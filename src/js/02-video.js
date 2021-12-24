import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const STORAGE_KEY = 'videoplayer-current-time';
const saveSeconds = localStorage.getItem('STORAGE_KEY');

player.on('timeupdate', throttle(throttled, 1000));

function throttled(data) {
  localStorage.setItem('STORAGE_KEY', data.seconds);
}

player
  .setCurrentTime(saveSeconds)
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
