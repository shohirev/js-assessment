exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    let result = '';
    let currentChar = str[0];
    let counter = 0;

    for (const char of str) {
      if (char === currentChar && counter < amount) {
        result += char;
        counter += 1;
      }
      if (char !== currentChar) {
        currentChar = char;
        result += char;
        counter = 1;
      }
    }

    return result;
  },

  wordWrap: function(str, cols) {
    const output = [];
    let acc = '';

    const words = str.split(' ');

    for (let i = 0; i < words.length; i += 1) {
      const word = words[i];

      if (!acc.length) {
        acc += word;
      } else if (`${acc} ${word}`.length > cols) {
        output.push(acc);
        acc = word;
      } else {
        acc += ` ${word}`;
      }
      if (i === words.length - 1) {
        output.push(acc);
      }
    }

    return output.join('\n');
  },

  reverseString: function(str) {
    let reversedStr = '';
    const chars = str.split('');

    for (let i = chars.length - 1; i >= 0; i -= 1) {
      reversedStr += chars[i];
    }

    return reversedStr;
  }
};
