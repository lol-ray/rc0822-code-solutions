var contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', contactSubmit);

function contactSubmit(event) {
  event.preventDefault();
  const messageData = {
    name: contactForm.elements.name.value,
    email: contactForm.elements.email.value,
    message: contactForm.elements.message.value
  };
  console.log('messageData: ', messageData);
  contactForm.reset();
}
