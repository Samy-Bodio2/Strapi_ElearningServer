(self["webpackChunkstrapi_elearning"] = self["webpackChunkstrapi_elearning"] || []).push([[7874],{

/***/ 44174:
/***/ ((module) => {

/**
 * A specialized version of `baseAggregator` for arrays.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} setter The function to set `accumulator` values.
 * @param {Function} iteratee The iteratee to transform keys.
 * @param {Object} accumulator The initial aggregated object.
 * @returns {Function} Returns `accumulator`.
 */
function arrayAggregator(array, setter, iteratee, accumulator) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    var value = array[index];
    setter(accumulator, value, iteratee(value), array);
  }
  return accumulator;
}

module.exports = arrayAggregator;


/***/ }),

/***/ 47443:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIndexOf = __webpack_require__(42118);

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && baseIndexOf(array, value, 0) > -1;
}

module.exports = arrayIncludes;


/***/ }),

/***/ 1196:
/***/ ((module) => {

/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludesWith(array, value, comparator) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}

module.exports = arrayIncludesWith;


/***/ }),

/***/ 48983:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseProperty = __webpack_require__(40371);

/**
 * Gets the size of an ASCII `string`.
 *
 * @private
 * @param {string} string The string inspect.
 * @returns {number} Returns the string size.
 */
var asciiSize = baseProperty('length');

module.exports = asciiSize;


/***/ }),

/***/ 81119:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseEach = __webpack_require__(89881);

/**
 * Aggregates elements of `collection` on `accumulator` with keys transformed
 * by `iteratee` and values set by `setter`.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} setter The function to set `accumulator` values.
 * @param {Function} iteratee The iteratee to transform keys.
 * @param {Object} accumulator The initial aggregated object.
 * @returns {Function} Returns `accumulator`.
 */
function baseAggregator(collection, setter, iteratee, accumulator) {
  baseEach(collection, function(value, key, collection) {
    setter(accumulator, value, iteratee(value), collection);
  });
  return accumulator;
}

module.exports = baseAggregator;


/***/ }),

/***/ 41848:
/***/ ((module) => {

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

module.exports = baseFindIndex;


/***/ }),

/***/ 42118:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseFindIndex = __webpack_require__(41848),
    baseIsNaN = __webpack_require__(62722),
    strictIndexOf = __webpack_require__(42351);

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  return value === value
    ? strictIndexOf(array, value, fromIndex)
    : baseFindIndex(array, baseIsNaN, fromIndex);
}

module.exports = baseIndexOf;


/***/ }),

/***/ 62722:
/***/ ((module) => {

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

module.exports = baseIsNaN;


/***/ }),

/***/ 27561:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var trimmedEndIndex = __webpack_require__(67990);

/** Used to match leading whitespace. */
var reTrimStart = /^\s+/;

/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */
function baseTrim(string) {
  return string
    ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '')
    : string;
}

module.exports = baseTrim;


/***/ }),

/***/ 45652:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var SetCache = __webpack_require__(88668),
    arrayIncludes = __webpack_require__(47443),
    arrayIncludesWith = __webpack_require__(1196),
    cacheHas = __webpack_require__(74757),
    createSet = __webpack_require__(23593),
    setToArray = __webpack_require__(21814);

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * The base implementation of `_.uniqBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 */
function baseUniq(array, iteratee, comparator) {
  var index = -1,
      includes = arrayIncludes,
      length = array.length,
      isCommon = true,
      result = [],
      seen = result;

  if (comparator) {
    isCommon = false;
    includes = arrayIncludesWith;
  }
  else if (length >= LARGE_ARRAY_SIZE) {
    var set = iteratee ? null : createSet(array);
    if (set) {
      return setToArray(set);
    }
    isCommon = false;
    includes = cacheHas;
    seen = new SetCache;
  }
  else {
    seen = iteratee ? [] : result;
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee ? iteratee(value) : value;

    value = (comparator || value !== 0) ? value : 0;
    if (isCommon && computed === computed) {
      var seenIndex = seen.length;
      while (seenIndex--) {
        if (seen[seenIndex] === computed) {
          continue outer;
        }
      }
      if (iteratee) {
        seen.push(computed);
      }
      result.push(value);
    }
    else if (!includes(seen, computed, comparator)) {
      if (seen !== result) {
        seen.push(computed);
      }
      result.push(value);
    }
  }
  return result;
}

module.exports = baseUniq;


/***/ }),

/***/ 9872:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayAggregator = __webpack_require__(44174),
    baseAggregator = __webpack_require__(81119),
    baseIteratee = __webpack_require__(67206),
    isArray = __webpack_require__(1469);

/**
 * Creates a function like `_.groupBy`.
 *
 * @private
 * @param {Function} setter The function to set accumulator values.
 * @param {Function} [initializer] The accumulator object initializer.
 * @returns {Function} Returns the new aggregator function.
 */
function createAggregator(setter, initializer) {
  return function(collection, iteratee) {
    var func = isArray(collection) ? arrayAggregator : baseAggregator,
        accumulator = initializer ? initializer() : {};

    return func(collection, setter, baseIteratee(iteratee, 2), accumulator);
  };
}

module.exports = createAggregator;


/***/ }),

/***/ 23593:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Set = __webpack_require__(58525),
    noop = __webpack_require__(50308),
    setToArray = __webpack_require__(21814);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Creates a set object of `values`.
 *
 * @private
 * @param {Array} values The values to add to the set.
 * @returns {Object} Returns the new set.
 */
var createSet = !(Set && (1 / setToArray(new Set([,-0]))[1]) == INFINITY) ? noop : function(values) {
  return new Set(values);
};

module.exports = createSet;


/***/ }),

/***/ 42351:
/***/ ((module) => {

/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

module.exports = strictIndexOf;


/***/ }),

/***/ 88016:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var asciiSize = __webpack_require__(48983),
    hasUnicode = __webpack_require__(62689),
    unicodeSize = __webpack_require__(21903);

/**
 * Gets the number of symbols in `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the string size.
 */
function stringSize(string) {
  return hasUnicode(string)
    ? unicodeSize(string)
    : asciiSize(string);
}

module.exports = stringSize;


/***/ }),

/***/ 67990:
/***/ ((module) => {

/** Used to match a single whitespace character. */
var reWhitespace = /\s/;

/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */
function trimmedEndIndex(string) {
  var index = string.length;

  while (index-- && reWhitespace.test(string.charAt(index))) {}
  return index;
}

module.exports = trimmedEndIndex;


/***/ }),

/***/ 21903:
/***/ ((module) => {

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsAstral = '[' + rsAstralRange + ']',
    rsCombo = '[' + rsComboRange + ']',
    rsFitz = '\\ud83c[\\udffb-\\udfff]',
    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange + ']',
    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsZWJ = '\\u200d';

/** Used to compose unicode regexes. */
var reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange + ']?',
    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

/**
 * Gets the size of a Unicode `string`.
 *
 * @private
 * @param {string} string The string inspect.
 * @returns {number} Returns the string size.
 */
function unicodeSize(string) {
  var result = reUnicode.lastIndex = 0;
  while (reUnicode.test(string)) {
    ++result;
  }
  return result;
}

module.exports = unicodeSize;


/***/ }),

/***/ 7739:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseAssignValue = __webpack_require__(89465),
    createAggregator = __webpack_require__(9872);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an object composed of keys generated from the results of running
 * each element of `collection` thru `iteratee`. The order of grouped values
 * is determined by the order they occur in `collection`. The corresponding
 * value of each key is an array of elements responsible for generating the
 * key. The iteratee is invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
 * @returns {Object} Returns the composed aggregate object.
 * @example
 *
 * _.groupBy([6.1, 4.2, 6.3], Math.floor);
 * // => { '4': [4.2], '6': [6.1, 6.3] }
 *
 * // The `_.property` iteratee shorthand.
 * _.groupBy(['one', 'two', 'three'], 'length');
 * // => { '3': ['one', 'two'], '5': ['three'] }
 */
var groupBy = createAggregator(function(result, value, key) {
  if (hasOwnProperty.call(result, key)) {
    result[key].push(value);
  } else {
    baseAssignValue(result, key, [value]);
  }
});

module.exports = groupBy;


/***/ }),

/***/ 47037:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(44239),
    isArray = __webpack_require__(1469),
    isObjectLike = __webpack_require__(37005);

/** `Object#toString` result references. */
var stringTag = '[object String]';

/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */
function isString(value) {
  return typeof value == 'string' ||
    (!isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag);
}

module.exports = isString;


/***/ }),

/***/ 50308:
/***/ ((module) => {

/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */
function noop() {
  // No operation performed.
}

module.exports = noop;


/***/ }),

/***/ 84238:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseKeys = __webpack_require__(280),
    getTag = __webpack_require__(64160),
    isArrayLike = __webpack_require__(98612),
    isString = __webpack_require__(47037),
    stringSize = __webpack_require__(88016);

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    setTag = '[object Set]';

/**
 * Gets the size of `collection` by returning its length for array-like
 * values or the number of own enumerable string keyed properties for objects.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object|string} collection The collection to inspect.
 * @returns {number} Returns the collection size.
 * @example
 *
 * _.size([1, 2, 3]);
 * // => 3
 *
 * _.size({ 'a': 1, 'b': 2 });
 * // => 2
 *
 * _.size('pebbles');
 * // => 7
 */
function size(collection) {
  if (collection == null) {
    return 0;
  }
  if (isArrayLike(collection)) {
    return isString(collection) ? stringSize(collection) : collection.length;
  }
  var tag = getTag(collection);
  if (tag == mapTag || tag == setTag) {
    return collection.size;
  }
  return baseKeys(collection).length;
}

module.exports = size;


/***/ }),

/***/ 18601:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toNumber = __webpack_require__(14841);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308;

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

module.exports = toFinite;


/***/ }),

/***/ 40554:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toFinite = __webpack_require__(18601);

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

module.exports = toInteger;


/***/ }),

/***/ 7334:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toString = __webpack_require__(79833);

/**
 * Converts `string`, as a whole, to lower case just like
 * [String#toLowerCase](https://mdn.io/toLowerCase).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the lower cased string.
 * @example
 *
 * _.toLower('--Foo-Bar--');
 * // => '--foo-bar--'
 *
 * _.toLower('fooBar');
 * // => 'foobar'
 *
 * _.toLower('__FOO_BAR__');
 * // => '__foo_bar__'
 */
function toLower(value) {
  return toString(value).toLowerCase();
}

module.exports = toLower;


/***/ }),

/***/ 14841:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseTrim = __webpack_require__(27561),
    isObject = __webpack_require__(13218),
    isSymbol = __webpack_require__(33448);

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),

/***/ 44908:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseUniq = __webpack_require__(45652);

/**
 * Creates a duplicate-free version of an array, using
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons, in which only the first occurrence of each element
 * is kept. The order of result values is determined by the order they occur
 * in the array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @returns {Array} Returns the new duplicate free array.
 * @example
 *
 * _.uniq([2, 1, 2]);
 * // => [2, 1]
 */
function uniq(array) {
  return (array && array.length) ? baseUniq(array) : [];
}

module.exports = uniq;


/***/ }),

/***/ 56233:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: () => (/* binding */ SubNav)
/* harmony export */ });
/* unused harmony export subNavWidth */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88972);
/* harmony import */ var _Grid_Grid_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31988);




const subNavWidth = `${232 / 16}rem`;
const SubNavWrapper = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_Grid_Grid_mjs__WEBPACK_IMPORTED_MODULE_2__/* .Grid */ .r)) `
  width: ${subNavWidth};
  background: ${({ theme }) => theme.colors.neutral100};
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;
  border-right: 1px solid ${({ theme }) => theme.colors.neutral200};
  z-index: 1;
`;
const SubNav = ({ ariaLabel, ...props }) => {
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SubNavWrapper, { "aria-label": ariaLabel, as: "nav", ...props });
};




/***/ }),

/***/ 32974:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* binding */ SubNavHeader)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(90272);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(88972);
/* harmony import */ var _helpers_keyboardKeys_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(40840);
/* harmony import */ var _hooks_useId_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(92058);
/* harmony import */ var _hooks_usePrevious_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(61682);
/* harmony import */ var _Divider_Divider_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26910);
/* harmony import */ var _Box_Box_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(16607);
/* harmony import */ var _Searchbar_SearchForm_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(49185);
/* harmony import */ var _Searchbar_Searchbar_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(35987);
/* harmony import */ var _Flex_Flex_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(96987);
/* harmony import */ var _Typography_Typography_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(71068);
/* harmony import */ var _IconButton_IconButton_mjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(96208);















const CustomDivider = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_Divider_Divider_mjs__WEBPACK_IMPORTED_MODULE_3__/* .Divider */ .i)) `
  width: ${24 / 16}rem;
  background-color: ${({ theme }) => theme.colors.neutral200};
`;
const SubNavHeader = ({ as = 'h2', label, searchLabel = '', searchable = false, onChange = () => { }, value = '', onClear = () => { }, onSubmit = () => { }, id, }) => {
    const [isSearchOpen, setSearchOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const previousSearchOpenValue = (0,_hooks_usePrevious_mjs__WEBPACK_IMPORTED_MODULE_4__/* .usePrevious */ .D)(isSearchOpen);
    const clearButtonId = (0,_hooks_useId_mjs__WEBPACK_IMPORTED_MODULE_5__/* .useId */ .M)(id);
    const searchRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(undefined);
    const searchButtonRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(undefined);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        if (isSearchOpen && searchRef.current) {
            searchRef.current.focus();
        }
        if (previousSearchOpenValue && !isSearchOpen && searchButtonRef.current) {
            searchButtonRef.current.focus();
        }
    }, [isSearchOpen, previousSearchOpenValue]);
    const toggleSearch = () => {
        setSearchOpen((isOpen) => !isOpen);
    };
    const handleClear = (e) => {
        onClear(e);
        searchRef.current.focus();
    };
    const handleBlur = (e) => {
        if (e.relatedTarget?.id !== clearButtonId) {
            setSearchOpen(false);
        }
    };
    const handleKeyDown = (e) => {
        if (e.key === _helpers_keyboardKeys_mjs__WEBPACK_IMPORTED_MODULE_6__/* .KeyboardKeys */ .y.ESCAPE) {
            setSearchOpen(false);
        }
    };
    if (isSearchOpen) {
        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Box_Box_mjs__WEBPACK_IMPORTED_MODULE_7__/* .Box */ .x, { paddingLeft: 4, paddingTop: 5, paddingBottom: 2, paddingRight: 4, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Searchbar_SearchForm_mjs__WEBPACK_IMPORTED_MODULE_8__/* .SearchForm */ .U, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Searchbar_Searchbar_mjs__WEBPACK_IMPORTED_MODULE_9__/* .Searchbar */ .w, { name: "searchbar", value: value, onChange: onChange, placeholder: "e.g: strapi-plugin-abcd", onKeyDown: handleKeyDown, ref: searchRef, onBlur: handleBlur, onClear: handleClear, onSubmit: onSubmit, clearLabel: "Clear", size: "S", children: searchLabel }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Box_Box_mjs__WEBPACK_IMPORTED_MODULE_7__/* .Box */ .x, { paddingLeft: 2, paddingTop: 4, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(CustomDivider, {}) })] }));
    }
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Box_Box_mjs__WEBPACK_IMPORTED_MODULE_7__/* .Box */ .x, { paddingLeft: 6, paddingTop: 6, paddingBottom: 2, paddingRight: 4, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Flex_Flex_mjs__WEBPACK_IMPORTED_MODULE_10__/* .Flex */ .k, { justifyContent: "space-between", alignItems: "flex-start", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Typography_Typography_mjs__WEBPACK_IMPORTED_MODULE_11__/* .Typography */ .Z, { variant: "beta", as: as, children: label }), searchable && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_IconButton_IconButton_mjs__WEBPACK_IMPORTED_MODULE_12__/* .IconButton */ .h, { ref: searchButtonRef, onClick: toggleSearch, label: searchLabel, icon: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_icons__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {}) }))] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Box_Box_mjs__WEBPACK_IMPORTED_MODULE_7__/* .Box */ .x, { paddingTop: 4, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(CustomDivider, {}) })] }));
};




/***/ }),

/***/ 36636:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ SubNavLink)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(59233);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(88972);
/* harmony import */ var _Box_Box_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16607);
/* harmony import */ var _Typography_Typography_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71068);
/* harmony import */ var _Flex_Flex_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(96987);
/* harmony import */ var _BaseLink_BaseLink_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(53342);









const SubNavLinkWrapper = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_Box_Box_mjs__WEBPACK_IMPORTED_MODULE_3__/* .Box */ .x)) `
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.neutral800};
  svg > * {
    fill: ${({ theme }) => theme.colors.neutral600};
  }

  &.active {
    ${({ theme }) => {
    return `
      background-color: ${theme.colors.primary100};
      border-right: 2px solid ${theme.colors.primary600};
      svg > * {
        fill: ${theme.colors.primary700};
      }
      ${_Typography_Typography_mjs__WEBPACK_IMPORTED_MODULE_4__/* .Typography */ .Z} {
        color: ${theme.colors.primary700};
        font-weight: 500;
      }
      `;
}}
  }

  &:focus-visible {
    outline-offset: -2px;
  }
`;
const CustomBullet = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_strapi_icons__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)) `
  width: ${12 / 16}rem;
  height: ${4 / 16}rem;
  * {
    fill: ${({ theme, $active }) => ($active ? theme.colors.primary600 : theme.colors.neutral600)};
  }
`;
const IconWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div `
  svg {
    height: ${12 / 16}rem;
    width: ${12 / 16}rem;
  }
`;
const SubNavLink = react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ children, icon = null, withBullet = false, as = _BaseLink_BaseLink_mjs__WEBPACK_IMPORTED_MODULE_6__/* .BaseLink */ .f, isSubSectionChild = false, ...props }, ref) => {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(SubNavLinkWrapper, { as: as, icon: icon, background: "neutral100", paddingLeft: isSubSectionChild ? 9 : 7, paddingBottom: 2, paddingTop: 2, ref: ref, ...props, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Flex_Flex_mjs__WEBPACK_IMPORTED_MODULE_7__/* .Flex */ .k, { children: [icon ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(IconWrapper, { children: icon }) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(CustomBullet, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Box_Box_mjs__WEBPACK_IMPORTED_MODULE_3__/* .Box */ .x, { paddingLeft: 2, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Typography_Typography_mjs__WEBPACK_IMPORTED_MODULE_4__/* .Typography */ .Z, { as: "span", children: children }) })] }), withBullet && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Box_Box_mjs__WEBPACK_IMPORTED_MODULE_3__/* .Box */ .x, { as: _Flex_Flex_mjs__WEBPACK_IMPORTED_MODULE_7__/* .Flex */ .k, paddingRight: 4, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(CustomBullet, { "$active": true }) }))] }));
});




/***/ }),

/***/ 21660:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  D: () => (/* binding */ SubNavSection)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 4 modules
var styled_components_browser_esm = __webpack_require__(88972);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/CarretDown.mjs
var CarretDown = __webpack_require__(58471);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.mjs
var Flex = __webpack_require__(96987);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.mjs
var Box = __webpack_require__(16607);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.mjs
var Typography = __webpack_require__(71068);
;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/v2/SubNav/SubNavSectionLabel.mjs







const SubNavSectionLabelWrapper = (0,styled_components_browser_esm["default"])((0,Flex/* Flex */.k)) `
  border: none;
  padding: 0;
  background: transparent;
`;
const DropDownIconWrapper = styled_components_browser_esm["default"].div `
  display: flex;
  align-items: center;
  transform: rotateX(${({ rotated }) => (rotated ? '0deg' : '180deg')});
`;
const SubNavSectionLabel = ({ collapsable = false, label, onClick = () => { }, ariaExpanded, ariaControls, }) => {
    if (collapsable) {
        return ((0,jsx_runtime.jsxs)(SubNavSectionLabelWrapper, { as: "button", onClick: onClick, "aria-expanded": ariaExpanded, "aria-controls": ariaControls, textAlign: "left", children: [(0,jsx_runtime.jsx)(Box/* Box */.x, { paddingRight: 1, children: (0,jsx_runtime.jsx)(Typography/* Typography */.Z, { variant: "sigma", textColor: "neutral600", children: label }) }), collapsable && ((0,jsx_runtime.jsx)(DropDownIconWrapper, { rotated: ariaExpanded, children: (0,jsx_runtime.jsx)(CarretDown/* default */.Z, { "aria-hidden": true }) }))] }));
    }
    return ((0,jsx_runtime.jsx)(SubNavSectionLabelWrapper, { children: (0,jsx_runtime.jsx)(Box/* Box */.x, { paddingRight: 1, children: (0,jsx_runtime.jsx)(Typography/* Typography */.Z, { variant: "sigma", textColor: "neutral600", children: label }) }) }));
};



// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/hooks/useId.mjs
var useId = __webpack_require__(92058);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Badge/Badge.mjs
var Badge = __webpack_require__(18787);
;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/v2/SubNav/SubNavSection.mjs









const SubNavSectionWrapper = (0,styled_components_browser_esm["default"])((0,Box/* Box */.x)) `
  svg {
    height: ${4 / 16}rem;
    path {
      fill: ${({ theme }) => theme.colors.neutral500};
    }
  }
`;
const SubNavSection = ({ collapsable = false, label, badgeLabel, children, id }) => {
    const [isOpen, setOpenLinks] = (0,react.useState)(true);
    const listId = (0,useId/* useId */.M)(id);
    const handleClick = () => {
        setOpenLinks((prev) => !prev);
    };
    return ((0,jsx_runtime.jsxs)(Flex/* Flex */.k, { direction: "column", alignItems: "stretch", gap: 1, children: [(0,jsx_runtime.jsx)(SubNavSectionWrapper, { paddingLeft: 6, paddingTop: 2, paddingBottom: 2, paddingRight: 4, children: (0,jsx_runtime.jsxs)(Box/* Box */.x, { position: "relative", paddingRight: badgeLabel ? 6 : 0, children: [(0,jsx_runtime.jsx)(SubNavSectionLabel, { onClick: handleClick, ariaExpanded: isOpen, ariaControls: listId, collapsable: collapsable, label: label }), badgeLabel && ((0,jsx_runtime.jsx)(Badge/* Badge */.C, { backgroundColor: "neutral150", textColor: "neutral600", position: "absolute", right: 0, top: "50%", transform: "translateY(-50%)", children: badgeLabel }))] }) }), (!collapsable || isOpen) && ((0,jsx_runtime.jsx)("ol", { id: listId, children: react.Children.map(children, (child, index) => {
                    // eslint-disable-next-line react/no-array-index-key
                    return (0,jsx_runtime.jsx)("li", { children: child }, index);
                }) }))] }));
};




/***/ }),

/***/ 61499:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ SubNavSections)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var _Box_Box_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16607);
/* harmony import */ var _Flex_Flex_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(96987);





const SubNavSections = ({ children, spacing = 2, horizontal = false, ...props }) => {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Box_Box_mjs__WEBPACK_IMPORTED_MODULE_2__/* .Box */ .x, { paddingTop: 2, paddingBottom: 4, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Flex_Flex_mjs__WEBPACK_IMPORTED_MODULE_3__/* .Flex */ .k, { as: "ol", gap: spacing, direction: horizontal ? 'row' : 'column', alignItems: horizontal ? 'center' : 'stretch', ...props, children: react__WEBPACK_IMPORTED_MODULE_1__.Children.map(children, (child, index) => {
                /* eslint-disable react/no-array-index-key */
                return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", { children: child }, index);
            }) }) }));
};




/***/ })

}]);