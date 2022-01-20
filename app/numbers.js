exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    const binary = num.toString(2);

    if (binary.length < bit) {
      return null;
    }

    const bitIndex = binary.length - bit;
    return Number(binary[bitIndex]);
  },

  base10: function(str) {
    return parseInt(str, 2);
  },

  convertToBinary: function(num) {
    const binary = num.toString(2);

    if (binary.length > 8) {
      return false;
    }

    const eightBitBinary = binary.padStart(8, '0');
    return eightBitBinary;
  },

  multiply: function(a, b) {
    const result = a * b;
    if (result === Math.round(result)) {
      return result;
    }

    const fractionParts = result.toString().split('.');
    const [ even, fractional ] = fractionParts;
    const index = fractional.search(/[1-9]/);
    const shortFractional = fractional.slice(0, index + 1);
    return Number(`${even}.${shortFractional}`);
  }
};
