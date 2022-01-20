exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function(fn, obj) {
    return fn.bind(obj)();
  },

  alterObjects: function(constructor, greeting) {
    constructor.prototype.greeting = greeting;
  },

  iterate: function(obj) {
    const entries = [];

    for (const key of Object.keys(obj)) {
      const value = obj[key];
      entries.push(`${key}: ${value}`);
    }

    return entries;
  }
};
