exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    var itemIndex = -1;

    for (var i = 0; i < arr.length; i += 1) {
      if (arr[i] === item) {
        itemIndex = i;
        break;
      }
    }

    return itemIndex;
  },

  sum: function(arr) {
    var amount = 0;

    for (var i = 0; i < arr.length; i += 1) {
      amount += arr[i];
    }

    return amount;
  },

  remove: function(arr, item) {
    var filteredArr = [];

    for (var i = 0; i < arr.length; i += 1) {
      var currentItem = arr[i];

      if (currentItem !== item) {
        filteredArr.push(currentItem);
      }
    }

    return filteredArr;
  },

  removeWithoutCopy: function(arr, item) {
    var i = 0;

    while (i < arr.length) {
      if (arr[i] === item) {
        for (var j = i; j < arr.length - 1; j += 1) {
          arr[j] = arr[j + 1];
        }
        arr.pop();
      } else {
        i += 1;
      }
    }

    return arr;
  },

  append: function(arr, item) {
    return arr.concat(item);
  },

  truncate: function(arr) {
    return arr.slice(0, arr.length - 1);
  },

  prepend: function(arr, item) {
    return [item].concat(arr);
  },

  curtail: function(arr) {
    var result = [];

    for (var i = 1; i < arr.length; i += 1) {
      result.push(arr[i]);
    }

    return result;
  },

  concat: function(arr1, arr2) {
    var result = [];

    for (var i = 0; i < arr1.length; i += 1) {
      result.push(arr1[i]);
    }

    for (var j = 0; j < arr2.length; j += 1) {
      result.push(arr2[j]);
    }

    return result;
  },

  insert: function(arr, item, index) {
    var result = [];

    for (var i = 0; i < arr.length; i += 1) {
      if (i === index) {
        result.push(item);
      }
      result.push(arr[i]);
    }

    return result;
  },

  count: function(arr, item) {
    var counter = 0;

    for (var i = 0; i < arr.length; i += 1) {
      if (arr[i] === item) {
        counter += 1;
      }
    }

    return counter;
  },

  duplicates: function(arr) {
    var duplicatedItems = [];

    for (var i = 0; i < arr.length; i += 1) {
      var currentItem = arr[i];
      if (this.count(arr, currentItem) >= 2 && this.indexOf(duplicatedItems, currentItem) < 0) {
        duplicatedItems.push(currentItem);
      }
    }

    return duplicatedItems;
  },

  square: function(arr) {
    var result = [];

    for (var i = 0; i < arr.length; i += 1) {
      result.push(Math.pow(arr[i], 2));
    }

    return result;
  },

  findAllOccurrences: function(arr, target) {
    var targetIndexes = [];

    for (var i = 0; i < arr.length; i += 1) {
      if (arr[i] === target) {
        targetIndexes.push(i);
      }
    }

    return targetIndexes;
  }
};
