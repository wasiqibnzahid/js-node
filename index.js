var wordBreak = function (s, wordDict) {
  let myS = s;

  for (let i = 0; i < wordDict.length; i++) {
    if (myS.includes(wordDict[i])) {
      myS = myS.replace(wordDict[i], " ");
      if (wordBreak(s, wordDict.slice(i + 1))) {
        return true;
      }
    }
  }
  return myS.replaceAll(" ", "") === "";
};

console.log(wordBreak("ccaccc", ["cc", "ac"]));
