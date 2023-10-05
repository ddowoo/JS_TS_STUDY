function solution(begin, target, words) {
  if (words.includes(target) === false) return 0;
  let answerCount = [];

  const dfs = (now, _words) => {
    if (target === now) return answerCount.push(words.length - _words.length);
    const canNext = [];

    for (let i = 0; i < _words.length; i++) {
      const word = _words[i];
      let diffrentCount = 0;
      for (let j = 0; j < word.length; j++) {
        now[j] !== word[j] && diffrentCount++;
      }
      diffrentCount === 1 && canNext.push(word);
    }

    canNext.forEach((word) => {
      const nextWords = [..._words];
      const index = nextWords.indexOf(word);
      nextWords.splice(index, 1);
      dfs(word, nextWords);
    });
  };

  dfs(begin, words);

  return console.log(Math.min(...answerCount));
}

solution("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]);
