// Write your code below:
const body = document.querySelector('body');
const ul = document.createElement('ul');
body.appendChild(ul);
console.log(body);

function handleFormSubmit(event) {
  event.preventDefault();
  const username = event.target.username.value;
  const email = event.target.email.value;
  const phone = event.target.phone.value;
  
  const obj = {
    'username': username,
    'email': email,
    'phone': phone
  }

  localStorage.setItem(event.target.email.value, JSON.stringify(obj));

  const li = document.createElement('li');
  const text = document.createTextNode(`${username} - ${email} - ${phone}`);
  li.appendChild(text);
  ul.appendChild(li);
}