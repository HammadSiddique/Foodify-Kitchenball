import './index.css';
import displayCards from './modules/displayItems.js';

// mobile menu section
const mainMenu = document.querySelector('.nav-items');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const menuItems = document.querySelectorAll('nav .nav-items li');

const contactBtn = document.querySelector('#contactSection');
const recipesSection = document.querySelector('#recipesSection');

const recipes = document.querySelector('#recipe-section');
const contact = document.querySelector('#contact');

// mobile menu section
openMenu.addEventListener('click', () => {
  mainMenu.style = 'display: flex; top:0;';
});

closeMenu.addEventListener('click', () => {
  mainMenu.style = 'display: none;';
});

menuItems.forEach((item) => {
  item.addEventListener('click', () => {
    mainMenu.style = 'display: ';
  });
});

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