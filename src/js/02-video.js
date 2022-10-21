import Player from '@vimeo/player';  
var throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);


const onPlay = function(data) {
    // data is an object containing properties specific to that event
};

player.on('timeupdate', throttle(onPlay, 1000));


player.setCurrentTime(savedTime).then(function (seconds) {
const savedTime = localStorage.setItem(`videoplayer-current-time`,seconds)
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
