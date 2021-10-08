const _ = {
  clamp(num, lower, upper) {
    const lowerClampedValue = Math.max(num, lower);
    return Math.min(lowerClampedValue, upper);
  },

  inRange(num, start, end) {
    if (!end) {
      end = start;
      start = 0;
    }

    if (start > end) {
      const temp = start;
      start = end;
      end = temp;
    }

    return num >= start && num < end;
  },

  words(string) {
    return string.split(" ");
  },

  pad(string, length) {
    if (string.length > length) return string;
    const startPaddingLength = Math.floor((length - string.length) / 2);
    const endPaddingLength = length - string.length - startPaddingLength;

    const paddedString =
      " ".repeat(startPaddingLength) + string + " ".repeat(endPaddingLength);

    return paddedString;
  },

  has(obj, key) {
    return key in obj;
  },

  invert(obj) {
    let temp = {};

    for (let key in obj) {
      temp[obj[key]] = key;
    }
    return temp;
  },

  findKey(obj, func) {
    for (let key in obj) {
      const value = obj[key];
      const temp = func(value);

      if (temp) return key;
    }

    return undefined;
  },

  drop(array, num) {
    if (!num) {
      array.shift();
      return array;
    }

    let i = 1;
    while (i <= num) {
      array.shift();
      i++;
    }

    return array;
  },

  dropWhile(array, func) {
    const index = array.findIndex((num, index) => !func(num, index, array));

    return this.drop(array, index);
  },

  chunk(array, size) {
    const temp = [];

    if (!size) size = 1;

    while (array.length > 0) {
      temp.push(array.splice(0, size));
    }
    return temp;
  },
};

// Do not write or modify code below this line.
module.exports = _;
