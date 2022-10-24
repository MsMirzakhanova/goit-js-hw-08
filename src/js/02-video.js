import Player from '@vimeo/player';  
var throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);



player.on('timeupdate', throttle(onPlay, 1000));

function onPlay({ seconds }) {
  localStorage.setItem('videoplayer-current-time', seconds);
}
   
const savedMessage = localStorage.getItem('videoplayer-current-time');
  if (savedMessage) {
    console.log(savedMessage);
};

player.setCurrentTime(savedMessage).then(function(seconds) {
    // seconds = the actual time that the player seeked to
  
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});
