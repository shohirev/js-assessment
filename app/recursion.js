/* eslint max-params: ["error", 5] */

exports = typeof window === 'undefined' ? global : window;

const isFile = function(node) {
  return typeof node === 'string';
};

const findSubdir = function(node, dirname, acc = {}) {
  if (isFile(node)) {
    return null;
  }

  if (node.dir === dirname) {
    return Object.assign(acc, node);
  }

  for (const child of node.files) {
    findSubdir(child, dirname, acc);
  }
  return acc;
};

const collectFiles = function(node) {
  const files = [];

  if (isFile(node)) {
    files.push(node);
    return files;
  }
  const children = node.files;
  for (const child of children) {
    const filesByChild = collectFiles(child);
    files.push(...filesByChild);
  }
  return files;
};

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    const searchDir = dirName ? findSubdir(data, dirName) : data;
    const files = collectFiles(searchDir);
    return files;
  },

  permute: function(arr, permutations = [], memo = []) {
    if (arr.length === 0) {
      return arr;
    }

    for (let i = 0; i < arr.length; i += 1) {
      const currentElem = arr[i];
      const currentBranchMemo = [ ...memo, currentElem ];

      if (arr.length === 1) {
        permutations.push(currentBranchMemo);
      }

      const restElems = [ ...arr ];
      restElems.splice(i, 1);

      this.permute(restElems, permutations, currentBranchMemo);
    }

    return permutations;
  },

  fibonacci: function(n) {
    if (n === 1) {
      return 1;
    }
    if (n === 2) {
      return 1;
    }
    return this.fibonacci(n - 1) + this.fibonacci(n - 2);
  },

  validParentheses: function(n, brackets = [], memo = '', open = 0, close = 0) {
    if (close === n) {
      brackets.push(memo);
    }

    if (open < n) {
      this.validParentheses(n, brackets, memo.concat('('), open + 1, close);
    }

    if (open > close) {
      this.validParentheses(n, brackets, memo.concat(')'), open, close + 1);
    }

    return brackets;
  }
};
