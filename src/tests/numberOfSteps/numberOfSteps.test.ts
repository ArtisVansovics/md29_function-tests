import numberOfSteps from './numberOfSteps';

test('if it is defined', () => {
  const response = numberOfSteps(2);

  expect(response).toBeDefined();
});

test('if it returns a truthy value', () => {
  const response = numberOfSteps(2);

  expect(response).toBeTruthy();
});

test('if it returns steps required to reduce number to zero', () => {
  const response = numberOfSteps(14);

  expect(response).toEqual(6);
});

test('if it can handle large numbers', () => {
  const response = numberOfSteps(9001);

  expect(response).toEqual(19);
});

test('if it returns zero when zero is given as a parameter', () => {
  const response = numberOfSteps(0);

  expect(response).toEqual(0);
});

test('if it can accept negative numbers', () => {
  const response = numberOfSteps(-8);

  expect(response).toEqual(4);
});
