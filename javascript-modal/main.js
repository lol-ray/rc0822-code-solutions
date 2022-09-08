var $modalButton = document.querySelector('.modal-button');
var $modal = document.querySelector('.modal');
var $responseButton = document.querySelector('.response-button');

$modalButton.addEventListener('click', openModal);
$responseButton.addEventListener('click', closeModal);

function openModal(event) {
  $modal.style.display = 'flex';
}

function closeModal(event) {
  $modal.style.display = 'none';
}
