import mySqrt from './mySqrt';

test('if it is defined', () => {
  const response = mySqrt(1);

  expect(response).toBeDefined();
});

test('if it returns a truthy value', () => {
  const response = mySqrt(1);

  expect(response).toBeTruthy();
});

test('if it returns the square root of a number', () => {
  const response = mySqrt(4);

  expect(response).toEqual(2);
});

test('if it returns the square root as an integer rounded down', () => {
  const response = mySqrt(8);

  expect(response).toEqual(2);
  expect(response).not.toEqual(Math.sqrt(8));
  expect(response).toBeLessThan(Math.sqrt(8));
});

test('if it can handle large numbers', () => {
  const response = mySqrt(348034828);

  expect(response).toEqual(Math.floor(Math.sqrt(348034828)));
});

test('if it return the square root of negative', () => {
  const response = mySqrt(348034828);

  expect(response).toEqual(Math.floor(Math.sqrt(348034828)));
});

test('if negative number is given return NaN', () => {
  const response = mySqrt(-4);

  expect(response).toBeNaN();
});
