exports = typeof window === 'undefined' ? global : window;

exports.regexAnswers = {
  containsNumber: function(str) {
    return (/\d/).test(str);
  },

  containsRepeatingLetter: function(str) {
    return (/([a-z])\1/i).test(str);
  },

  endsWithVowel: function(str) {
    return (/[aeiouy]$/i).test(str);
  },

  captureThreeNumbers: function(str) {
    const searchResult = str.match(/\d{3}/);
    if (searchResult) {
      return searchResult[0];
    }
    return false;
  },

  matchesPattern: function(str) {
    return (/(\b\d{3}\b[-]){2}\b\d{4}\b/).test(str);
  },

  isUSD: function(str) {
    const regexp = /^\$(\b\d{1,3}\b,?)?(\b\d{3}\b,?)*(\.\b\d{2}\b)?$/;
    return regexp.test(str);
  }
};
