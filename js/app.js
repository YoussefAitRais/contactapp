document.addEventListener('DOMContentLoaded', () => {
  const firstName = document.getElementById('firstName');
  const lastName = document.getElementById('lastName');
  const phone = document.getElementById('phone');
  const email = document.getElementById('email');
  const submit = document.getElementById('submit');

  submit.addEventListener('click', () => {
      // Retrieve existing contacts from localStorage
      let contacts = JSON.parse(localStorage.getItem('contacts')) || [];

      // Create a new contact object
      let contactInfo = {
          firstName: firstName.value,
          lastName: lastName.value,
          phone: phone.value,
          email: email.value,
      };

      // Add the new contact to the contacts array
      contacts.push(contactInfo);

      // Save the updated contacts array back to localStorage
      localStorage.setItem('contacts', JSON.stringify(contacts));

      // Optionally, clear the input fields after saving
      firstName.value = '';
      lastName.value = '';
      phone.value = '';
      email.value = '';
  });
});
