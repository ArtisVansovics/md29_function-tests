import count from './count';

test('if it accepts strings', () => {
  const response = count('I have eaten');

  expect(response).toBeTruthy();
});

test('if it returns word as a property', () => {
  const response = count('I have eaten');

  expect(response).toHaveProperty('i');
});

test('if it returns count for words that repeat several times', () => {
  const response = count('I have I eaten I');

  expect(response).toEqual({ eaten: 1, have: 1, i: 3 });
});

test('if it doesnt count capitalized words as separate', () => {
  const response = count('Have have');

  expect(response).not.toBe({ Have: 1, have: 1 });
});

test('if the sum of five word occurrences equals 5', () => {
  const response = count('I have eaten eaten well');

  expect(Object.values(response).reduce((a, b) => a + b)).toEqual(5);
});
