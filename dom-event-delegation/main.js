var $taskList = document.querySelector('.task-list');
$taskList.addEventListener('click', clickTask);

function clickTask(event) {
  console.log('event.target:', event.target);
  console.log('event.target.tagName:', event.target.tagName);
  console.log('closest .task-list-item', event.target.closest('.task-list-item'));
  if (event.target && event.target.nodeName === 'BUTTON') {
    event.target.closest('.task-list-item').remove();
  }
}
