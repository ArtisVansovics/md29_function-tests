import isPerfectSquare from './isPerfectSquare';

test('if it is defined', () => {
  const response = isPerfectSquare(16);

  expect(response).toBeDefined();
});

test('if it returns true, if the number is a perfect square', () => {
  const response = isPerfectSquare(16);

  expect(response).toEqual(true);
});

test('if it returns false, if the number is not a perfect square', () => {
  const response = isPerfectSquare(14);

  expect(response).not.toEqual(true);
});

test('if it handles zero', () => {
  const response = isPerfectSquare(0);

  expect(response).toEqual(true);
});

test('if negative numbers throw an error message', () => {
  expect(() => isPerfectSquare(-16))
    .toThrow('A negative number cannot be a perfect square');
});
