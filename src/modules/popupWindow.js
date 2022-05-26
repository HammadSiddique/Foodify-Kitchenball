import { postComment, getComments } from './comment.js';

const popupContainer = document.querySelector('.popup-container');
const popupImage = document.querySelector('.popup-image img');
const dishName = document.querySelector('.dish-name');
const recipe = document.querySelector('.recipe');
const close = document.querySelector('#close');
const formContainer = document.querySelector('.add-comment');

const baseURL = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';

const createForm = (id) => {
    formContainer.innerHTML = '<h4> Add a comment</h4>';
    const form = document.createElement('form');
    form.classList.add('form');
    form.id = id;
    form.innerHTML = `<input class='name' name='name' type="text" placeholder="Your Name" pattern="[a-zA-Z ]{1,30}" required>
          <input class='new-comment' name='comment' type="text" placeholder="Write your comment here" pattern="[a-zA-Z9-0 ]{1,150}" required>
          <input class="btn" name='comment-button' type="submit" value="Comment">`;
    formContainer.appendChild(form);
    const name = document.querySelector('.name');
    const comment = document.querySelector('.new-comment');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (name.value && comment.value) {
            postComment(name.value, comment.value, form.id);
            form.reset();
        }
    });
};

const displayPopup = () => {
    const commentButtons = document.querySelectorAll('.comment-btn');

    commentButtons.forEach((button) => {
        button.addEventListener('click', () => {
            createForm(button.id);
            getComments(button.id);
            fetch(`${baseURL}${button.id}`)
                .then((response) => response.json())
                .then((elem) => {
                    popupContainer.classList.remove('hidden');
                    document.querySelector('body').classList.add('no-scroll');
                    popupImage.setAttribute('src', elem.meals[0].strMealThumb);
                    dishName.innerHTML = elem.meals[0].strMeal;
                    recipe.innerHTML = elem.meals[0].strInstructions;
                });
        });
    });

    close.addEventListener('click', () => {
        popupContainer.classList.add('hidden');
        document.querySelector('body').classList.remove('no-scroll');
    });
};

export default displayPopup;