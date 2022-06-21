const isPerfectSquare = (num: number): boolean | string => {
  if (num < 0) {
    throw new Error('A negative number cannot be a perfect square');
  }
  const sqrt = num ** 0.5;

  return sqrt % 1 === 0;
};

export default isPerfectSquare;
