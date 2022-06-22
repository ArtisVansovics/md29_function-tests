const numberOfSteps = (num: number): number => {
  let i = 0;
  let n = Math.abs(num);

  while (n > 0) {
    if (n % 2 === 0) {
      n /= 2;
    } else n -= 1;
    i += 1;
  }

  return i;
};

export default numberOfSteps;
