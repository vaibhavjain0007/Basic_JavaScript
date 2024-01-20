// Write your code below:
const body = document.querySelector('body');
const ul = document.createElement('ul');
body.appendChild(ul);
console.log(body);

const formDetails = document.getElementById('form-details');
formDetails.addEventListener('submit', function(event) {
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
  li.innerHTML = `${username} - ${email} - ${phone}` + '<button class="delete-btn">Delete</button>' + '<button class="edit-btn">Edit</button>';
  ul.appendChild(li);
});

ul.addEventListener('click', (event) => {
    event.preventDefault();

    if (event.target.classList.contains('delete-btn')) {
        const elementToDelete = event.target.parentElement;
        
        let email = elementToDelete.firstChild.textContent.split(' - ')[1];
        console.log(email);
        elementToDelete.remove();
        localStorage.removeItem(email);
    }
});

ul.addEventListener('click', (event) => {
    event.preventDefault();

    if (event.target.classList.contains('edit-btn')) {
        const elementToDelete = event.target.parentElement;

        let email = elementToDelete.firstChild.textContent.split(' - ')[1];
        
        let arr = elementToDelete.firstChild.textContent.split(' - ');
        let count = 0;
        formDetails.querySelectorAll('input').forEach((item) => {
            item.value = arr[count++];
        });
        elementToDelete.remove();

        localStorage.removeItem(email);
    }
});
