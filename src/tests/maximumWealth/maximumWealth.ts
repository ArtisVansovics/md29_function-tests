const maximumWealth = (accounts: number[][]): number => {
  const arr: number[] = [];

  if (accounts.flat().length) {
    accounts.forEach((account) => (
      arr.push(account.reduce((a, b) => a + b))
    ));

    return Math.max(...arr);
  } return 0;
};

export default maximumWealth;
