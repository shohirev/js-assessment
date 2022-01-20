exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn(...arr);
  },

  speak: function(fn, obj) {
    const boundFn = fn.bind(obj);
    return boundFn();
  },

  functionFunction: function(str) {
    return function(str1) {
      return `${str}, ${str1}`;
    };
  },

  makeClosures: function(arr, fn) {
    const result = [];

    for (let i = 0; i < arr.length; i += 1) {
      const currentElem = arr[i];
      result.push(function() {
        return fn(currentElem);
      });
    }

    return result;
  },

  partial: function(fn, str1, str2) {
    return function(str3) {
      return fn(str1, str2, str3);
    };
  },

  useArguments: function() {
    let sum = 0;

    for (const arg of arguments) {
      sum += arg;
    }

    return sum;
  },

  callIt: function(fn) {
    const cb = arguments[0];
    const args = [];

    for (let i = 1; i < arguments.length; i += 1) {
      args.push(arguments[i]);
    }

    return cb(...args);
  },

  partialUsingArguments: function(fn) {
    if (arguments.length === 1) {
      return fn;
    }
    const args = [];

    for (let i = 1; i < arguments.length; i += 1) {
      args.push(arguments[i]);
    }

    return function(anotherArgs) {
      const finalArgsSet = [...args, ...arguments];
      return fn(...finalArgsSet);
    };
  },

  curryIt: function(fn) {
    return function(a) {
      return function(b) {
        return function(c) {
          return fn(a, b, c);
        };
      };
    };
  }
};
