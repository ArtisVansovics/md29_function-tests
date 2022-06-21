const maximumWealth = (accounts: number[][]): number => {
  const arr: number[] = [];

  accounts.forEach((account) => (
    arr.push(account.reduce((a, b) => a + b))
  ));

  return Math.max(...arr);
};

export default maximumWealth;
