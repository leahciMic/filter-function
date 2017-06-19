import isPlainObject from 'lodash/isPlainObject';
import isRegExp from 'lodash/isRegExp';
import isString from 'lodash/isString';

export default function createMatchFn(filterObj) {
  return function matchFn(obj) {
    return Object.keys(filterObj).reduce((isMatching, checkForMatch) => {
      const value = obj[checkForMatch];
      const checker = filterObj[checkForMatch];

      if (isRegExp(checker)) {
        if (!isString(value)) {
          throw new Error('RegExp\'s can only be used to match against strings');
        }
        return isMatching && checker.test(value);
      }

      if (isPlainObject(checker)) {
        if (!isPlainObject(value)) {
          throw new Error('cannot use an object to test against a non object');
        }
        return createMatchFn(checker)(value);
      }

      return value === checker;
    }, true);
  };
}

if (module) {
  module.exports = createMatchFn;
}
