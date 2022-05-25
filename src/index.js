import './index.css';
import getComments from './modules/comment.js';
import displayCards from './modules/displayItems.js';

// const closeComment = document.querySelector('#close');
// closeComment.addEventListener('click', () => {
//     document.getElementById('comments-container').classList.add('hidden');
// });

// displayCards();
console.log(getComments());
window.addEventListener('load', displayCards);