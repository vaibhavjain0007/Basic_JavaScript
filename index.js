// Write the code as shown in the video below:

const header = document.querySelector('#basket-heading');
header.style.color = 'brown';
// header.style.textAlign = 'right'
const liItems = Array.from(document.querySelectorAll('.fruit'));
let count = 1;
liItems
  .forEach((item) => {
  // return count++ % 2 == 0 ? true : false;
    item.style.borderRadius = '2px';
    item.style.marginBottom = '2px';
    item.style.paddingLeft = '4px';
    item.style.listStyleType = 'None';
    if (count++ % 2) {
      item.style.background = '#cccccc';
      item.style.color = 'black';
      return true;
    } else {
      item.style.background = 'brown';
    item.style.color = 'white';
      
      return false;
    }
});

const fr = document.querySelector('.fruits');
fr.style.background = '#555555';
fr.style.borderRadius = '2px';
fr.style.padding = '10px';
fr.style.margin = '0 70% 0 2%';






// Write answer to the questions asked below:
