const mySqrt = (x: number): number => {
  if (x < 0) return NaN;

  let n = 0;
  let m = x;

  while (n <= m) {
    const o = Math.floor((n + m) / 2);

    if (o * o > x) {
      m = o - 1;
    } else n = o + 1;
  }

  return m;
};

export default mySqrt;
