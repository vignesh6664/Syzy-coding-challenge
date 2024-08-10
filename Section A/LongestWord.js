// function findLongestWord(text) {

const findLongestWord=(text)=>{
    // Split's text into words using regular expression
    const words = text.match(/\b\w+\b/g);
  
    let longestWord = "";
  
    // Iterate through the words to find the longest one
    words.forEach((word) => {
      if (word.length > longestWord.length) {
        longestWord = word;
      }
    });
  
    return longestWord;
  }
  
  // Example
  const text = "This is a coding challenge for interview process";
  const longestWord = findLongestWord(text);
  console.log(longestWord);
  