// Write your code here!
// index.js

// Remove the DOM node with id 'main'
document.querySelector('main#main').remove();


const newHeader = document.createElement('h1')
newHeader.id = 'victory';
const championName = "John"; 
newHeader.textContent = `${championName} is the champion`;
document.body.appendChild(newHeader);
