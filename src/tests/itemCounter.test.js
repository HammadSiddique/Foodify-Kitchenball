/**
 * @jest-environment jsdom
 * */

import itemsCounter from '../modules/itemCounter.js';

describe('Testing items counter', () => {
  const link = document.createElement('p');
  const data = [
    {
      strMeal: 'Baingan Bharta',
      strMealThumb:
        'https://www.themealdb.com/images/media/meals/urtpqw1487341253.jpg',
      idMeal: '52807',
    },
    {
      strMeal: 'Chickpea Fajitas',
      strMealThumb:
        'https://www.themealdb.com/images/media/meals/tvtxpq1511464705.jpg',
      idMeal: '52870',
    },
    {
      strMeal: 'Egg Drop Soup',
      strMealThumb:
        'https://www.themealdb.com/images/media/meals/1529446137.jpg',
      idMeal: '52955',
    },
  ];

  const count = itemsCounter(data, link);

  test('Number of items are 3', () => {
    expect(count).toBe(3);
  });
});
