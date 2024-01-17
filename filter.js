const fruits = document.querySelectorAll('.fruit');

fruits.forEach((fruit) => {
    const before = fruit.querySelector('.delete-btn');

    /**********     DOMParser    **********/

    const htmlString = '<p><em>' + fruit.firstChild.textContent + '</em></p>';
    const parser = new DOMParser();
    const parsedDocument = parser.parseFromString(htmlString, 'text/html');
    const node = parsedDocument.body.firstChild;

    fruit.insertBefore(node, before);
});

// Add input element inside form, before button, to take fruit description
const input = document.createElement('input');
input.setAttribute('type', 'text');
input.setAttribute('name', 'description')
input.id= 'fruit-description';

const formElement = document.querySelector('form');
const btnElement = document.querySelector('button');
formElement.insertBefore(input, btnElement);



// Show the fruit description in italics on the next line
function addFruit(event) {
    // prevent default submit event
    event.preventDefault();
  
    // get the fruit to be added
    let fruitToAdd = document.querySelector('#fruit-to-add');
    let fruitDescription = document.querySelector('#fruit-description');
  
    // create a li element
    const li = document.createElement('li');
    li.innerHTML = fruitToAdd.value + '<p><em>' + fruitDescription.value + '</em></p>' + '<button class="delete-btn">x</button>';
  
    // add li element to ul
    const fruits = document.querySelector('.fruits');
    fruits.appendChild(li);
}


// Create a filter that shows only those fruits whose either name or description or both matches the entered text
const filter = document.querySelector('#filter');
filter.addEventListener('keyup', (event) => {
    let enteredText = event.target.value.toLowerCase();

    document.querySelectorAll('li').forEach((item) => {
        console.log(item);
        let curr = item.firstChild.textContent.toLowerCase();
        if (curr.includes(enteredText)) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }

    });
})

