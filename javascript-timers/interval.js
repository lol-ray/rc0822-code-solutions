var countdown = document.querySelector('.countdown-display');

var time = 4;

var interval = setInterval(function () {
  --time;
  countdown.textContent = time;
  if (time === 0) {
    countdown.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(interval);
  }
}, 1000);
