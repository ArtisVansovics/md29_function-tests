const mySqrt = (x: number): number => {
  let n = 0;
  let m = x / 2;

  do {
    n = m;
    m = (n + (x / n)) / 2;
  } while (n !== m);

  const splitNumber = n.toString().split('.');

  return Number(splitNumber[0]);
};

export default mySqrt;
