// import getComments from './comment.js';

const displayCards = () => {
  const recipeCards = document.querySelector('.recipe-cards');
  fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegetarian')
    .then((response) => response.json())
    .then((data) => {
      let html = '';
      data.meals.forEach((meal) => {
        html += `<div class="card" id="${meal.idMeal}">
               <div class="card-img">
                   <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
               </div>
               <div class="card-info">
                   <h2>${meal.strMeal}</h2>
                   <ul>
                       <li><button class="comment-btn" type="button">Comments</button></li>
                       <li><button class="like-btn"><i class="fa-regular fa-heart"></i><span class="like-count">15</span></button></li>
                   </ul>
               </div>
             </div>`;
        recipeCards.innerHTML = html;
      });
    });
};

// const renderComents = () => {
//   getComments();
// };

// const commentBtn = document.querySelector('.coomment-btn');
// commentBtn.addEventListener('click', renderComents);

export default displayCards;