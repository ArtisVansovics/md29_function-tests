import numberOfSteps from './numberOfSteps';

test('if it returns steps required to reduce number to zero', () => {
  const response = numberOfSteps(14);

  expect(response).toEqual(6);
});
