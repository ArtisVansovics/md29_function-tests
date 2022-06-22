import maximumWealth from './maximumWealth';

test('if it is defined', () => {
  const response = maximumWealth([[1, 5], [7, 3], [3, 5]]);

  expect(response).toBeDefined();
});

test('if it returns a truthy value', () => {
  const response = maximumWealth([[7, 3], [3, 5]]);

  expect(response).toBeTruthy();
});

test('if it returns the wealth of the richest costumer', () => {
  const response = maximumWealth([[1, 5], [7, 3], [3, 5]]);

  expect(response).toEqual(10);
});

test('if it can handle only one costumer account', () => {
  const response = maximumWealth([[7, 1, 3]]);

  expect(response).toEqual(11);
});

test('if it can handle empty account arrays', () => {
  const response = maximumWealth([[], []]);

  expect(response).toEqual(0);
});

test('if it can handle some accounts being empty', () => {
  const response = maximumWealth([[], [2, 8, 7], [7, 1, 3], []]);

  expect(response).toEqual(17);
});
