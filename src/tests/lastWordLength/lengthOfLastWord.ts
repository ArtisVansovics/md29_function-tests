const lengthOfLastWord = (s: string): number => {
  const filteredWords = s.split(' ').filter((word) => word !== '');

  return filteredWords[filteredWords.length - 1].length;
};

export default lengthOfLastWord;
