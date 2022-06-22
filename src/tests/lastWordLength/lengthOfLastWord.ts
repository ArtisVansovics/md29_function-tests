const lengthOfLastWord = (s: string): number => {
  const filteredWords = s.split(' ').filter((word) => word !== '');

  if (filteredWords.length) {
    return filteredWords[filteredWords.length - 1].length;
  } return 0;
};

export default lengthOfLastWord;
