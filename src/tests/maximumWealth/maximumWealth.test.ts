import maximumWealth from './maximumWealth';

test('if it returns the wealth of the richest costumer', () => {
  const response = maximumWealth([[1, 5], [7, 3], [3, 5]]);

  expect(response).toEqual(10);
});
