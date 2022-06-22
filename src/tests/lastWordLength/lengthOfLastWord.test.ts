import lengthOfLastWord from './lengthOfLastWord';

test('if it is defined', () => {
  const response = lengthOfLastWord('Hello');

  expect(response).toBeDefined();
});

test('if it returns a truthy value', () => {
  const response = lengthOfLastWord('Hello World');

  expect(response).toBeTruthy();
});

test('if it returns the length of the last word', () => {
  const response = lengthOfLastWord('Hello World');

  expect(response).toEqual(5);
});

test('if it handles trailing comas', () => {
  const response = lengthOfLastWord('   fly me   to   the moon  ');

  expect(response).toEqual(4);
});

test('if it returns zero when receiving an empty string', () => {
  const response = lengthOfLastWord(' ');

  expect(response).toEqual(0);
});
