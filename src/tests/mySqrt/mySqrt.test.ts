import mySqrt from './mySqrt';

test('if ir returns the square root of a number', () => {
  const response = mySqrt(4);

  expect(response).toEqual(2);
});
