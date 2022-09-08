var $bulb = document.querySelector('div.bulb-on');
var $body = document.querySelector('body.bulb-on');

$bulb.addEventListener('click', switchOnClick);

function switchOnClick(event) {
  $bulb.className = $bulb.className === 'bulb-on' ? 'bulb-off' : 'bulb-on';
  $body.className = $body.className === 'bulb-on' ? 'bulb-off' : 'bulb-on';
}
