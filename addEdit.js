// Add the Edit Button:
const fruits = document.querySelectorAll('.fruit');

fruits.forEach((fruit) => {
  const editBtn = document.createElement('button');
  const text = document.createTextNode('Edit');
  editBtn.appendChild(text);
  editBtn.className = 'edit-btn';
  fruit.appendChild(editBtn);
});

// Implement the code as in video but with one extra 'Edit' button in 'li'
function addFruit(event) {
  // prevent default submit event
  event.preventDefault();

  // get the fruit to be added
  let fruitToAdd = document.querySelector('#fruit-to-add');

  // create a li element
  const li = document.createElement('li');
  li.innerHTML = fruitToAdd.value + '<button class="delete-btn">x</button>' + '<button class="edit-btn">Edit</button>';

  // add li element to ul
  const fruits = document.querySelector('.fruits');
  fruits.appendChild(li);







  // console.log(event);
  // console.log(event.target.elements.fruit.value);
  // const fruits = document.querySelector('.fruits');
  // const add = document.createElement('li');
  // add.className = 'fruit';
  // const addText = document.createTextNode(event.target.elements.fruit.value);
  // add.appendChild(addText);

  // const btn = document.createElement('button');
  // btn.className = 'delete-btn';
  // const btnText = document.createTextNode('x');
  // btn.appendChild(btnText);

  // add.appendChild(btn);

  // add.innerHTML = '<button class="edit-btn">Edit</button>';

  // const editBtn = document.createElement('button');
  // const text = document.createTextNode('Edit');
  // editBtn.appendChild(text);
  // editBtn.className = 'edit-btn';

  // add.appendChild(editBtn);

  // fruits.appendChild(add);
  
}
 
const fruitss = document.querySelector('.fruits');
fruitss.addEventListener('click', (event) => {
  if (event.target.classList.contains('delete-btn')) {
    const fruitToDelete = event.target.parentElement;
    fruitToDelete.remove();
  }
});