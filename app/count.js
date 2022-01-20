/* eslint-disable no-console */
exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {
    console.log(start);

    var counter = start;

    var timerId = setInterval(function() {
      if (counter < end) {
        counter += 1;
        console.log(counter);
      } else {
        clearInterval(timerId);
      }
    }, 100);

    return {cancel: function() { clearInterval(timerId); }};
  }
};
