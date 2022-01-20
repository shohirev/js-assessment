/* eslint-env es6 */
exports = typeof window === 'undefined' ? global : window;

// utility functions for sorting arrays
var findMinElemIndex = function(arr) {
  var minElemIndex = 0;

  for (var i = 1; i < arr.length; i += 1) {
    if (arr[i] < arr[minElemIndex]) {
      minElemIndex = i;
    }
  }

  return minElemIndex;
};

var sort = function(arr) {
  var draftArr = [...arr];
  var sortedArr = [];

  while (draftArr.length > 0) {
    var index = findMinElemIndex(draftArr);
    sortedArr.push(draftArr[index]);
    draftArr.splice(index, 1);
  }

  return sortedArr;
};

exports.asyncAnswers = {
  async: function(value) {
    return new Promise(function(resolve) {
      return resolve(value);
    });
  },

  manipulateRemoteData: function(url) {
    return fetch(url).
    then(function(response) {
      return response.json();
    }).
    then(function({people}) {
      const names = [];

      for (let i = 0; i < people.length; i += 1) {
        names.push(people[i].name);
      }

      return sort(names);
    });
  }
};
