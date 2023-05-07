/*
const form = document.querySelector('#contact-form');
form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const response = await fetch('/contact', {
    method: 'POST',
    body: formData
  });
  if (response.ok) {
    const message = await response.text();
    alert(message);
  } else {
    alert('Error sending message');
  }
});
*/

const form = document.querySelector('#contact-form');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  // Get form data
  const formData = new FormData(form);
  const name = formData.get('name');
  const email = formData.get('email');
  const subject = formData.get('subject');
  const message = formData.get('message');

  // Build email message body
  const messageBody = `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`;

  // Build email URL
  const url = `https://mail.google.com/mail/?view=cm&fs=1&to=kpiscontactus@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(messageBody)}`;
  


  // Open email client and display success message
  try {
    const success = await window.open(url, '_blank');
    if (success) {
      alert('Your message has been sent successfully!');
      form.reset();
    }
  } catch (error) {
    alert('An error occurred while sending your message. Please try again later.');
  }
});
