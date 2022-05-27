import './index.css';
import displayCards from './modules/displayItems.js';

const contactBtn = document.querySelector('#contactSection');
const recipesSection = document.querySelector('#recipesSection');

const recipes = document.querySelector('#recipe-section');
const contact = document.querySelector('#contact');

contactBtn.addEventListener('click', () => {
  recipes.classList.add('hidden');
  contact.classList.remove('hidden');
});

recipesSection.addEventListener('click', () => {
  contact.classList.add('hidden');
  recipes.classList.remove('hidden');
});

window.addEventListener('DOMContentLoaded', () => {
  displayCards();
  contact.classList.add('hidden');
  recipes.classList.remove('hidden');
});