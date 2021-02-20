module.exports = function repeater(str, options) {
  let result = '';
  options.separator = options.separator || '+';
  options.additionSeparator = options.additionSeparator || '||';

  if (!options.repeatTimes) {
    return str + options.addition;
  }

  for (let i = 0; i < options.repeatTimes; i++) {
    let additionSeparator = options.additionSeparator;
    let additionString = '';
    if (i === options.repeatTimes - 1) {
      options.separator = '';
    }

    for (let j = 0; j < options.additionRepeatTimes; j++) {
      if (j === options.additionRepeatTimes - 1) {
        additionSeparator = '';
      }
      additionString += options.addition + additionSeparator;
    }
    result += str + additionString + options.separator;
  }

  return result;
};