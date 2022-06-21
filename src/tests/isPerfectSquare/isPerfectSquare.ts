const isPerfectSquare = (num: number): boolean => {
  const sqrt = num ** 0.5;

  return sqrt % 1 === 0;
};

export default isPerfectSquare;
