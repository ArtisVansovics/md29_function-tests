import lengthOfLastWord from './lengthOfLastWord';

test('if it returns the length of last word', () => {
  const response = lengthOfLastWord('Hello World');

  expect(response).toEqual(5);
});
