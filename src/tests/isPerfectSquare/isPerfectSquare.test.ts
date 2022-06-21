import isPerfectSquare from './isPerfectSquare';

test('if it returns true, if the number is a perfect square', () => {
  const response = isPerfectSquare(16);

  expect(response).toEqual(true);
});
