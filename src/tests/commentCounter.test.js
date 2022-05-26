/**
 * @jest-environment jsdom
 * */

import commentsCounter from '../modules/commentCounter.js';

describe('Testing the comments counter', () => {
  const link = document.createElement('p');

  const emptyList = [];

  const commentsList = [{
    username: 'Hammad',
    creation_date: '2022-05-25',
    comment: 'Test 1',
  },
  {
    username: 'Ibrahim',
    creation_date: '2022-05-26',
    comment: 'Test 2',
  },
  ];

  const count = commentsCounter(commentsList, link);
  const empty = commentsCounter(emptyList, link);

  test('The comments are 2', () => {
    expect(count).toBe(2);
  });

  test('The are no comments (0)', () => {
    expect(empty).toBe(0);
  });
});