var $tabContainer = document.querySelector('.tab-container');
var $tabNodeList = document.querySelectorAll('.tab');
var $viewNodeList = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', tabClick);

function tabClick(event) {
  if (event.target.matches('.tab')) {
    for (const x of $tabNodeList) {
      if (x === event.target) {
        x.className = 'tab active';
      } else {
        x.className = 'tab';
      }
    }
    var dataView = event.target.getAttribute('data-view');
    for (const x of $viewNodeList) {
      if (x.getAttribute('data-view') === dataView) {
        x.className = 'view';
      } else {
        x.className = 'view hidden';
      }
    }
  }
}
