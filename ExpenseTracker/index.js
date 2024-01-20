const formElement = document.getElementById('form1');
const ul = document.createElement('ul');
let obj = {};

formElement.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(event.target);
    obj = {
        expenseAmount: event.target.amount.value,
        description: event.target.description.value,
        category: event.target.category.value

    }
    localStorage.setItem(event.target.category.value, JSON.stringify(obj));
    addList();
});

// Add buttons to delete and edit expenses

// unordered list after form
function addList() {
    const divElement = document.querySelector('#main-form');
    
    const li = document.createElement('li');
    li.innerHTML = `${obj.expenseAmount} ${obj.description} ${obj.category}` + '<button class="delete-btn">Delete Exp</button>' + '<button class="edit-btn">Edit Exp</button>';
    ul.appendChild(li);
    
    divElement.appendChild(ul);
    console.log(divElement);
}

ul.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete-btn')) {
        deleteExp(event);
    }
    if (event.target.classList.contains('edit-btn')) {
        editExp(event);
    }
});

function deleteExp(event) {
    const element = event.target.parentElement;
    const arr = element.firstChild.textContent.split(' ');
    console.log(element);
    element.remove();
    localStorage.removeItem(arr[2]);
}

function editExp(event) {
    const element = event.target.parentElement;
    console.log(element);
    const arr = element.firstChild.textContent.split(' ');
    element.remove();
    localStorage.removeItem(arr[2]);

    formElement.querySelectorAll('input').forEach((el, idx) => {
        el.value = arr[idx];
    })
    formElement.querySelector('select').value = arr[2];
    
}