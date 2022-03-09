/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/constants/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/constants/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "daysInWeek": () => (/* binding */ daysInWeek),
/* harmony export */   "maxTime": () => (/* binding */ maxTime),
/* harmony export */   "millisecondsInMinute": () => (/* binding */ millisecondsInMinute),
/* harmony export */   "millisecondsInHour": () => (/* binding */ millisecondsInHour),
/* harmony export */   "millisecondsInSecond": () => (/* binding */ millisecondsInSecond),
/* harmony export */   "minTime": () => (/* binding */ minTime),
/* harmony export */   "minutesInHour": () => (/* binding */ minutesInHour),
/* harmony export */   "monthsInQuarter": () => (/* binding */ monthsInQuarter),
/* harmony export */   "monthsInYear": () => (/* binding */ monthsInYear),
/* harmony export */   "quartersInYear": () => (/* binding */ quartersInYear),
/* harmony export */   "secondsInHour": () => (/* binding */ secondsInHour),
/* harmony export */   "secondsInMinute": () => (/* binding */ secondsInMinute)
/* harmony export */ });
/**
 * Days in 1 week.
 *
 * @name daysInWeek
 * @constant
 * @type {number}
 * @default
 */
var daysInWeek = 7;
/**
 * Maximum allowed time.
 *
 * @name maxTime
 * @constant
 * @type {number}
 * @default
 */

var maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1000;
/**
 * Milliseconds in 1 minute
 *
 * @name millisecondsInMinute
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInMinute = 60000;
/**
 * Milliseconds in 1 hour
 *
 * @name millisecondsInHour
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInHour = 3600000;
/**
 * Milliseconds in 1 second
 *
 * @name millisecondsInSecond
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInSecond = 1000;
/**
 * Minimum allowed time.
 *
 * @name minTime
 * @constant
 * @type {number}
 * @default
 */

var minTime = -maxTime;
/**
 * Minutes in 1 hour
 *
 * @name minutesInHour
 * @constant
 * @type {number}
 * @default
 */

var minutesInHour = 60;
/**
 * Months in 1 quarter
 *
 * @name monthsInQuarter
 * @constant
 * @type {number}
 * @default
 */

var monthsInQuarter = 3;
/**
 * Months in 1 year
 *
 * @name monthsInYear
 * @constant
 * @type {number}
 * @default
 */

var monthsInYear = 12;
/**
 * Quarters in 1 year
 *
 * @name quartersInYear
 * @constant
 * @type {number}
 * @default
 */

var quartersInYear = 4;
/**
 * Seconds in 1 hour
 *
 * @name secondsInHour
 * @constant
 * @type {number}
 * @default
 */

var secondsInHour = 3600;
/**
 * Seconds in 1 minute
 *
 * @name secondsInMinute
 * @constant
 * @type {number}
 * @default
 */

var secondsInMinute = 60;

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameDay/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameDay/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameDay)
/* harmony export */ });
/* harmony import */ var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfDay/index.js */ "./node_modules/date-fns/esm/startOfDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day (and year and month)?
 *
 * @description
 * Are the given dates in the same day (and year and month)?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same day (and year and month)
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * var result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
 * //=> true
 * 
 * @example
 * // Are 4 September and 4 October in the same day?
 * var result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))
 * //=> false
 * 
 * @example
 * // Are 4 September, 2014 and 4 September, 2015 in the same day?
 * var result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))
 * //=> false
 */

function isSameDay(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeftStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRightStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isToday/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isToday/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isToday)
/* harmony export */ });
/* harmony import */ var _isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameDay/index.js */ "./node_modules/date-fns/esm/isSameDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isToday
 * @category Day Helpers
 * @summary Is the given date today?
 * @pure false
 *
 * @description
 * Is the given date today?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is today
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 6 October 2014, is 6 October 14:00:00 today?
 * var result = isToday(new Date(2014, 9, 6, 14, 0))
 * //=> true
 */

function isToday(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, Date.now());
}

/***/ }),

/***/ "./node_modules/date-fns/esm/parseISO/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/parseISO/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ parseISO)
/* harmony export */ });
/* harmony import */ var _constants_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/index.js */ "./node_modules/date-fns/esm/constants/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");



/**
 * @name parseISO
 * @category Common Helpers
 * @summary Parse ISO string
 *
 * @description
 * Parse the given string in ISO 8601 format and return an instance of Date.
 *
 * Function accepts complete ISO 8601 formats as well as partial implementations.
 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
 *
 * If the argument isn't a string, the function cannot parse the string or
 * the values are invalid, it returns Invalid Date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The previous `parse` implementation was renamed to `parseISO`.
 *
 *   ```javascript
 *   // Before v2.0.0
 *   parse('2016-01-01')
 *
 *   // v2.0.0 onward
 *   parseISO('2016-01-01')
 *   ```
 *
 * - `parseISO` now validates separate date and time values in ISO-8601 strings
 *   and returns `Invalid Date` if the date is invalid.
 *
 *   ```javascript
 *   parseISO('2018-13-32')
 *   //=> Invalid Date
 *   ```
 *
 * - `parseISO` now doesn't fall back to `new Date` constructor
 *   if it fails to parse a string argument. Instead, it returns `Invalid Date`.
 *
 * @param {String} argument - the value to convert
 * @param {Object} [options] - an object with options.
 * @param {0|1|2} [options.additionalDigits=2] - the additional number of digits in the extended year format
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Convert string '2014-02-11T11:30:30' to date:
 * const result = parseISO('2014-02-11T11:30:30')
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert string '+02014101' to date,
 * // if the additional number of digits in the extended year format is 1:
 * const result = parseISO('+02014101', { additionalDigits: 1 })
 * //=> Fri Apr 11 2014 00:00:00
 */

function parseISO(argument, dirtyOptions) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var options = dirtyOptions || {};
  var additionalDigits = options.additionalDigits == null ? 2 : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(options.additionalDigits);

  if (additionalDigits !== 2 && additionalDigits !== 1 && additionalDigits !== 0) {
    throw new RangeError('additionalDigits must be 0, 1 or 2');
  }

  if (!(typeof argument === 'string' || Object.prototype.toString.call(argument) === '[object String]')) {
    return new Date(NaN);
  }

  var dateStrings = splitDateString(argument);
  var date;

  if (dateStrings.date) {
    var parseYearResult = parseYear(dateStrings.date, additionalDigits);
    date = parseDate(parseYearResult.restDateString, parseYearResult.year);
  }

  if (!date || isNaN(date.getTime())) {
    return new Date(NaN);
  }

  var timestamp = date.getTime();
  var time = 0;
  var offset;

  if (dateStrings.time) {
    time = parseTime(dateStrings.time);

    if (isNaN(time)) {
      return new Date(NaN);
    }
  }

  if (dateStrings.timezone) {
    offset = parseTimezone(dateStrings.timezone);

    if (isNaN(offset)) {
      return new Date(NaN);
    }
  } else {
    var dirtyDate = new Date(timestamp + time); // js parsed string assuming it's in UTC timezone
    // but we need it to be parsed in our timezone
    // so we use utc values to build date in our timezone.
    // Year values from 0 to 99 map to the years 1900 to 1999
    // so set year explicitly with setFullYear.

    var result = new Date(0);
    result.setFullYear(dirtyDate.getUTCFullYear(), dirtyDate.getUTCMonth(), dirtyDate.getUTCDate());
    result.setHours(dirtyDate.getUTCHours(), dirtyDate.getUTCMinutes(), dirtyDate.getUTCSeconds(), dirtyDate.getUTCMilliseconds());
    return result;
  }

  return new Date(timestamp + time + offset);
}
var patterns = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
};
var dateRegex = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/;
var timeRegex = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/;
var timezoneRegex = /^([+-])(\d{2})(?::?(\d{2}))?$/;

function splitDateString(dateString) {
  var dateStrings = {};
  var array = dateString.split(patterns.dateTimeDelimiter);
  var timeString; // The regex match should only return at maximum two array elements.
  // [date], [time], or [date, time].

  if (array.length > 2) {
    return dateStrings;
  }

  if (/:/.test(array[0])) {
    timeString = array[0];
  } else {
    dateStrings.date = array[0];
    timeString = array[1];

    if (patterns.timeZoneDelimiter.test(dateStrings.date)) {
      dateStrings.date = dateString.split(patterns.timeZoneDelimiter)[0];
      timeString = dateString.substr(dateStrings.date.length, dateString.length);
    }
  }

  if (timeString) {
    var token = patterns.timezone.exec(timeString);

    if (token) {
      dateStrings.time = timeString.replace(token[1], '');
      dateStrings.timezone = token[1];
    } else {
      dateStrings.time = timeString;
    }
  }

  return dateStrings;
}

function parseYear(dateString, additionalDigits) {
  var regex = new RegExp('^(?:(\\d{4}|[+-]\\d{' + (4 + additionalDigits) + '})|(\\d{2}|[+-]\\d{' + (2 + additionalDigits) + '})$)');
  var captures = dateString.match(regex); // Invalid ISO-formatted year

  if (!captures) return {
    year: NaN,
    restDateString: ''
  };
  var year = captures[1] ? parseInt(captures[1]) : null;
  var century = captures[2] ? parseInt(captures[2]) : null; // either year or century is null, not both

  return {
    year: century === null ? year : century * 100,
    restDateString: dateString.slice((captures[1] || captures[2]).length)
  };
}

function parseDate(dateString, year) {
  // Invalid ISO-formatted year
  if (year === null) return new Date(NaN);
  var captures = dateString.match(dateRegex); // Invalid ISO-formatted string

  if (!captures) return new Date(NaN);
  var isWeekDate = !!captures[4];
  var dayOfYear = parseDateUnit(captures[1]);
  var month = parseDateUnit(captures[2]) - 1;
  var day = parseDateUnit(captures[3]);
  var week = parseDateUnit(captures[4]);
  var dayOfWeek = parseDateUnit(captures[5]) - 1;

  if (isWeekDate) {
    if (!validateWeekDate(year, week, dayOfWeek)) {
      return new Date(NaN);
    }

    return dayOfISOWeekYear(year, week, dayOfWeek);
  } else {
    var date = new Date(0);

    if (!validateDate(year, month, day) || !validateDayOfYearDate(year, dayOfYear)) {
      return new Date(NaN);
    }

    date.setUTCFullYear(year, month, Math.max(dayOfYear, day));
    return date;
  }
}

function parseDateUnit(value) {
  return value ? parseInt(value) : 1;
}

function parseTime(timeString) {
  var captures = timeString.match(timeRegex);
  if (!captures) return NaN; // Invalid ISO-formatted time

  var hours = parseTimeUnit(captures[1]);
  var minutes = parseTimeUnit(captures[2]);
  var seconds = parseTimeUnit(captures[3]);

  if (!validateTime(hours, minutes, seconds)) {
    return NaN;
  }

  return hours * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInHour + minutes * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInMinute + seconds * 1000;
}

function parseTimeUnit(value) {
  return value && parseFloat(value.replace(',', '.')) || 0;
}

function parseTimezone(timezoneString) {
  if (timezoneString === 'Z') return 0;
  var captures = timezoneString.match(timezoneRegex);
  if (!captures) return 0;
  var sign = captures[1] === '+' ? -1 : 1;
  var hours = parseInt(captures[2]);
  var minutes = captures[3] && parseInt(captures[3]) || 0;

  if (!validateTimezone(hours, minutes)) {
    return NaN;
  }

  return sign * (hours * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInHour + minutes * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInMinute);
}

function dayOfISOWeekYear(isoWeekYear, week, day) {
  var date = new Date(0);
  date.setUTCFullYear(isoWeekYear, 0, 4);
  var fourthOfJanuaryDay = date.getUTCDay() || 7;
  var diff = (week - 1) * 7 + day + 1 - fourthOfJanuaryDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
} // Validation functions
// February is null to handle the leap year (using ||)


var daysInMonths = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function isLeapYearIndex(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}

function validateDate(year, month, date) {
  return month >= 0 && month <= 11 && date >= 1 && date <= (daysInMonths[month] || (isLeapYearIndex(year) ? 29 : 28));
}

function validateDayOfYearDate(year, dayOfYear) {
  return dayOfYear >= 1 && dayOfYear <= (isLeapYearIndex(year) ? 366 : 365);
}

function validateWeekDate(_year, week, day) {
  return week >= 1 && week <= 53 && day >= 0 && day <= 6;
}

function validateTime(hours, minutes, seconds) {
  if (hours === 24) {
    return minutes === 0 && seconds === 0;
  }

  return seconds >= 0 && seconds < 60 && minutes >= 0 && minutes < 60 && hours >= 0 && hours < 25;
}

function validateTimezone(_hours, minutes) {
  return minutes >= 0 && minutes <= 59;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfDay/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfDay/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */

function startOfDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/controller.js":
/*!***************************!*\
  !*** ./src/controller.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Controller": () => (/* binding */ Controller)
/* harmony export */ });
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ "./src/project.js");
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task.js */ "./src/task.js");
/* harmony import */ var _model_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model.js */ "./src/model.js");
/* harmony import */ var _view_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view.js */ "./src/view.js");
/* harmony import */ var date_fns_parseISO__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns/parseISO */ "./node_modules/date-fns/esm/parseISO/index.js");
/* harmony import */ var date_fns_isToday__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns/isToday */ "./node_modules/date-fns/esm/isToday/index.js");
/* harmony import */ var _idFunction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./idFunction */ "./src/idFunction.js");








class Controller {
  constructor() {
    this.view = new _view_js__WEBPACK_IMPORTED_MODULE_3__.View();
    this.model = new _model_js__WEBPACK_IMPORTED_MODULE_2__.Model();
    this.view.sendControllerProjectData(this.addProjectToModel.bind(this));
    this.view.sendControllerEditProjectData(this.editProjectInModel.bind(this));
    this.view.sendControllerTaskData(this.addTaskToModel.bind(this));
    this.view.sendControllerEditTaskData(this.editTaskInModel.bind(this));
    this.view.deleteProjectFromView(this.deleteProjectFromModel.bind(this));
    this.view.deleteTaskFromView(this.deleteTaskFromModel.bind(this));
    this.view.updateControllerPriority(this.updateModelPriority.bind(this));
    this.view.updateControllerCompleteStatus(
      this.updateModelCompleteStatus.bind(this)
    );
    this.view.updateControllerCurrentProject(
      this.updateModelCurrentProject.bind(this)
    );
    this.view.updateControllerAllProjects(
      this.updateModelAllProjects.bind(this)
    );
    this.view.updateControllerAllTasks(this.updateModelAllTasks.bind(this));
    this.view.updateControllerTodayTasks(this.updateModelTodayTasks.bind(this));
  }

  initDefaultProject() {
    const defaultProject = new _project_js__WEBPACK_IMPORTED_MODULE_0__.Project();
    this.model.array.push(defaultProject);
    this.model.currentProject = defaultProject;
    defaultProject.title = "Default";
    (0,_idFunction__WEBPACK_IMPORTED_MODULE_4__.createIdForArrayElements)(this.model.array);
    this.view.renderProjectsSidebar(this.model.array);
    this.view.renderCurrentProject(this.model.currentProject);
  }
  addProjectToModel(title) {
    const newProject = new _project_js__WEBPACK_IMPORTED_MODULE_0__.Project();
    this.model.array.push(newProject);
    newProject.title = title;
    (0,_idFunction__WEBPACK_IMPORTED_MODULE_4__.createIdForArrayElements)(this.model.array);
    this.model.currentProject = newProject;
    this.view.renderProjectsSidebar(this.model.array);
    this.view.renderCurrentProject(this.model.currentProject);
    this.view.renderTasks(this.model.currentProject.array);
  }

  editProjectInModel(id, title) {
    this.model.array.forEach((e) => {
      if (parseInt(id) === e.id) {
        e.title = title;
      }
    });
    this.view.renderAllProjects(this.model.array);
    this.view.renderProjectsSidebar(this.model.array);
  }

  deleteProjectFromModel = (id) => {
    this.model.array = this.model.array.filter(function (e) {
      return e.id !== parseInt(id);
    });
    this.view.renderAllProjects(this.model.array);
    this.view.renderProjectsSidebar(this.model.array);
  };
  addTaskToModel(title, description, dueDate, notes) {
    let newTask = new _task_js__WEBPACK_IMPORTED_MODULE_1__.Task();
    this.model.currentProject.array.push(newTask);
    this.model.taskArray.push(newTask);
    newTask.title = title;
    (0,_idFunction__WEBPACK_IMPORTED_MODULE_4__.createIdForArrayElements)(this.model.taskArray);
    newTask.project = this.model.currentProject.title;
    newTask.description = description;
    newTask.dueDate = dueDate;
    newTask.notes = notes;
    if (this.view.mainContainerTopText.textContent === "All Tasks") {
      this.view.renderTasks(this.model.taskArray);
    } 
    else if (this.view.mainContainerTopText.textContent === "Today") {
      this.view.renderTasks(this.model.todayTaskArray);
    } 
    else {
      this.view.renderTasks(this.model.currentProject.array);
    }
  }
  editTaskInModel(id, title, description, dueDate, notes) {
    this.model.taskArray.forEach((e) => {
      if (parseInt(id) === e.id) {
        e.title = title;
        e.description = description;
        e.dueDate = dueDate;
        e.notes = notes;
      }
    });
    if (this.view.mainContainerTopText.textContent === "All Tasks") {
      this.view.renderTasks(this.model.taskArray);
    } 
    else if (this.view.mainContainerTopText.textContent === "Today") {
      this.view.renderTasks(this.model.todayTaskArray);
    } 
    else {
      this.view.renderTasks(this.model.currentProject.array);
    }
  }
  deleteTaskFromModel(id) {
    this.model.taskArray = this.model.taskArray.filter(function (e) {
      return e.id !== parseInt(id);
    });
    this.model.currentProject.array = this.model.currentProject.array.filter(
      function (e) {
        return e.id !== parseInt(id);
      }
    );
    this.model.todayTaskArray = this.model.todayTaskArray.filter(
      function (e) {
        return e.id !== parseInt(id);
      }
    );
    if (this.view.mainContainerTopText.textContent === "All Tasks") {
      this.view.renderTasks(this.model.taskArray);
    } 
    else if (this.view.mainContainerTopText.textContent === "Today") {
      this.view.renderTasks(this.model.todayTaskArray);
    } 
    else {
      this.view.renderTasks(this.model.currentProject.array);
    }
  }

  updateModelPriority(id, viewPriority) {
    this.model.taskArray.forEach((e) => {
      if (parseInt(id) === e.id) {
        e.priority = viewPriority;
      }
    });
    if (this.view.mainContainerTopText.textContent === "All Tasks") {
      this.view.renderTasks(this.model.taskArray);
    } 
    else if (this.view.mainContainerTopText.textContent === "Today") {
      this.view.renderTasks(this.model.todayTaskArray);
    } 
    else {
      this.view.renderTasks(this.model.currentProject.array);
    }
  }
  updateModelCompleteStatus(id, status) {
    this.model.taskArray.forEach((e) => {
      if (parseInt(id) === e.id) {
        e.complete = status;
        console.log(status);
      }
    });
    if (this.view.mainContainerTopText.textContent === "All Tasks") {
      this.view.renderTasks(this.model.taskArray);
    } 
    else if (this.view.mainContainerTopText.textContent === "Today") {
      this.view.renderTasks(this.model.todayTaskArray);
    } 
    else {
      this.view.renderTasks(this.model.currentProject.array);
    }
  }

  updateModelCurrentProject(id) {
    this.model.array.forEach((e) => {
      if (parseInt(id) === e.id) {
        this.model.currentProject = e;
        return this.model.currentProject;
      }
    });
    this.view.renderTasks(this.model.currentProject.array);
    this.view.renderCurrentProject(this.model.currentProject);
  }

  updateModelAllProjects() {
    this.view.renderAllProjects(this.model.array);
  }
  updateModelAllTasks() {
    this.view.renderTasks(this.model.taskArray);
  }

  updateModelTodayTasks() {
    this.model.todayTaskArray = this.model.taskArray.filter((e) => {
      const parsedDate = (0,date_fns_parseISO__WEBPACK_IMPORTED_MODULE_5__["default"])(e.dueDate);
      return (0,date_fns_isToday__WEBPACK_IMPORTED_MODULE_6__["default"])(parsedDate)
    });
    this.view.renderTasks(this.model.todayTaskArray)
  }
}



/***/ }),

/***/ "./src/idFunction.js":
/*!***************************!*\
  !*** ./src/idFunction.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createIdForArrayElements": () => (/* binding */ createIdForArrayElements)
/* harmony export */ });
function createIdForArrayElements(array) {
    array.forEach((e) => {
        e.id = array.indexOf(e)
      })
  }

/***/ }),

/***/ "./src/model.js":
/*!**********************!*\
  !*** ./src/model.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Model": () => (/* binding */ Model)
/* harmony export */ });
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ "./src/project.js");
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task.js */ "./src/task.js");



class Model {
  constructor(currentProject) {
    this._project = new _project_js__WEBPACK_IMPORTED_MODULE_0__.Project();
    this._task = new _task_js__WEBPACK_IMPORTED_MODULE_1__.Task();
    this._array = [];
    this._taskArray = [];
    this._todayTaskArray = [];
    this._currentProject = currentProject;
  }

  get project() {
    return this._project;
  }
  set project(userProject) {
    this._project = userProject;
  }
  get task() {
    return this._task;
  }
  set task(userTask) {
    this._task = userTask;
  }
  get title() {
    return this._title;
  }
  set title(userTitle) {
    this._title = userTitle;
  }
  get array() {
    return this._array;
  }
  set array(userProjectArray) {
    this._array = userProjectArray;
  }
  get taskArray() {
    return this._taskArray;
  }
  set taskArray(userTaskArray) {
    this._taskArray = userTaskArray;
  }
  get todayTaskArray() {
    return this._todayTaskArray;
  }
  set todayTaskArray(userTodayTaskArray) {
    this._todayTaskArray = userTodayTaskArray;
  }
  get currentProject() {
    return this._currentProject;
  }
  set currentProject(userCurrentProject) {
    this._currentProject = userCurrentProject;
  }
}




/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project": () => (/* binding */ Project)
/* harmony export */ });
class Project {
  constructor(id, title = "Default") {
    this._id = id
    this._title = title
    this._array = []
  }
  get id() {
    return this._id;
  }
  set id(userid) {
    this._id = userid;
  }
  get title() {
    return this._title;
  }
  set title(userTitle) {
    this._title = userTitle;
  }
  get array() {
    return this._array;
  }
  set array(userArray) {
    this._array = userArray
  }

}



/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Task": () => (/* binding */ Task)
/* harmony export */ });
class Task {
    constructor (id, title, project = 'default', description, dueDate, priority, notes, complete = false) {
        this._id = id
        this._title = title
        this._project = project
        this._description = description
        this._dueDate = dueDate
        this._priority = priority
        this._notes = notes
        this._complete = complete
    }

    get id() {
        return this._id
    }
    set id(userid) {
        this._id = userid
    }

    get title() {
        return this._title
    }
    set title(userTitle) {
        this._title = userTitle
    }
    get project() {
        return this._project
    }
    set project(userProject) {
        this._project = userProject
    }
    get description() {
        return this._description
    }
    set description(userDescription) {
        this._description = userDescription
    }
    get dueDate() {
        return this._dueDate
    }
    set dueDate(userDueDate) {
        this._dueDate = userDueDate
    }
    get priority() {
        return this._priority
    }
    set priority(userPriority) {
        this._priority = userPriority
    }
    get notes() {
        return this._notes
    }
    set notes(userNotes) {
        this._notes = userNotes
    }
    get complete() {
        return this._complete
    }
    set complete(input) {
        this._complete = input
    }

}



/***/ }),

/***/ "./src/view.js":
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "View": () => (/* binding */ View)
/* harmony export */ });
class View {
  constructor() {
    this.newTask = document.querySelector("#new-task");
    this.taskModalContainer = document.querySelector("#task-modal-container");
    this.editTaskModalContainer = document.querySelector(
      "#edit-task-modal-container"
    );
    this.submitTask = document.querySelector("#submit-task");
    this.editSubmitTask = document.querySelector("#edit-submit-task");
    this.taskForm = document.querySelector("#task-form");
    this.openProject = document.querySelector("#open-project");
    this.submitProject = document.querySelector("#submit-project");
    this.editSubmitProject = document.querySelector("#edit-submit-project");
    this.projectModalContainer = document.querySelector(
      ".project-modal-container"
    );
    this.editProjectModalContainer = document.querySelector(
      ".edit-project-modal-container"
    );
    this.projectForm = document.querySelector("#project-form");
    this.projectTitle = document.querySelector("#project-title");
    this.editProjectTitle = document.querySelector("#edit-project-title");
    this.taskTitle = document.querySelector("#title");
    this.editTaskTitle = document.querySelector("#edit-title");
    this.taskDescription = document.querySelector("#description");
    this.editTaskDescription = document.querySelector("#edit-description");
    this.taskDueDate = document.querySelector("#dueDate");
    this.editTaskDueDate = document.querySelector("#edit-dueDate");
    this.taskNotes = document.querySelector("#notes");
    this.editTaskNotes = document.querySelector("#edit-notes");
    this.mainContainerTop = document.querySelector(".main-container-top");
    this.mainContainerTopTextContainer = document.querySelector(
      ".main-container-top-text-container"
    );
    this.mainContainerTopText = document.querySelector(
      ".main-container-top-text"
    );
    this.mainContainer = document.querySelector(".main-container");
    this.projectsContainer = document.querySelector(".projects-container");
    this.allProjects = document.querySelector("#all-projects");
    this.allTasks = document.querySelector("#all-tasks");
    this.container = document.querySelector(".container");
    this.taskModal = document.querySelector(".task-modal");
    this.todayButton = document.querySelector(".today-button");
  }

  renderAllProjects(projectArray) {
    while (this.mainContainer.firstChild) {
      this.mainContainer.removeChild(this.mainContainer.firstChild);
    }
    projectArray.forEach((element) => {
      this.projectsDisplay = document.createElement("div");
      this.projectsDisplay.classList.add("projectsDisplay");
      this.projectsDisplay.setAttribute(
        "data-id",
        projectArray[projectArray.indexOf(element)].id.toString()
      );
      this.mainContainer.appendChild(this.projectsDisplay);
      this.projectsText = document.createElement("div");
      this.projectsText.classList.add("projectsText");
      this.projectsText.textContent = element.title;
      this.projectsDisplay.appendChild(this.projectsText)
      this.projectsDeleteButton = document.createElement("button");
      this.projectsDeleteButton.classList.add("projectsDeleteButton");
      this.projectsDeleteButton.textContent = "Del";
      this.projectsDisplay.appendChild(this.projectsDeleteButton);

      const renderEditProjectModal = (() => {
        this.projectsDisplay.addEventListener("click", (e) => {
          if (e.target.className === "projectsText") {
            this.editProjectTitle.value =
              projectArray[projectArray.indexOf(element)].title;
            this.editProjectModalContainer.classList.add("show");
            this.editSubmitProject.setAttribute("data-id", e.target.parentNode.dataset.id);
          }
        });
      })();
    });
  }

  renderCurrentProject(currentProject) {
    while (this.mainContainerTopText.firstChild) {
      this.mainContainerTopText.removeChild(
        this.mainContainerTopText.firstChild
      );
    }
    this.mainContainerTopText.textContent = currentProject.title;
  }

  renderProjectsSidebar(projectArray) {
    while (this.projectsContainer.firstChild) {
      this.projectsContainer.removeChild(this.projectsContainer.firstChild);
    }
    projectArray.forEach((element) => {
      this.projectsSidebarButton = document.createElement("button");
      this.projectsSidebarButton.classList.add("projectsSidebarButton");
      this.projectsSidebarButton.textContent = element.title;
      this.projectsSidebarButton.setAttribute(
        "data-id",
        projectArray[projectArray.indexOf(element)].id
      );
      this.projectsContainer.appendChild(this.projectsSidebarButton);
    });
  }

  renderTasks(taskArray) {
    while (this.mainContainer.firstChild) {
      this.mainContainer.removeChild(this.mainContainer.firstChild);
    }
    taskArray.forEach((element) => {
      this.tasksDisplay = document.createElement("div");
      this.tasksDisplay.classList.add("tasksDisplay");
      this.tasksDisplay.setAttribute(
        "data-id",
        taskArray[taskArray.indexOf(element)].id.toString()
      );
      this.mainContainer.appendChild(this.tasksDisplay);
      this.tasksText = document.createElement("div");
      this.tasksText.classList.add("tasksText");
      this.tasksText.textContent = element.title;
      this.tasksCheckBox = document.createElement("div");
      this.tasksCheckBox.classList.add("tasksCheckBox");
      this.tasksDeleteButton = document.createElement("button");
      this.tasksDeleteButton.classList.add("tasksDeleteButton");
      this.tasksDeleteButton.textContent = "Del";
      this.dropdownContainer = document.createElement("div");
      this.dropdownContainer.classList.add("dropdownContainer");
      this.dropdown = document.createElement("div");
      this.dropdown.classList.add("dropdown");
      this.dropdownButton = document.createElement("button");
      this.dropdownButton.classList.add("dropdownButton");
      this.dropdownButton.textContent = "Priority";
      this.dropdownContent = document.createElement("div");
      this.dropdownContent.classList.add("dropdownContent");
      this.dropdownContent.setAttribute(
        "data-dropdown",
        taskArray[taskArray.indexOf(element)].id.toString()
      );
      this.lowPriority = document.createElement("a");
      this.lowPriority.textContent = "low";
      this.lowPriority.href = "#";
      this.lowPriority.classList.add("lowPriority");
      this.mediumPriority = document.createElement("a");
      this.mediumPriority.textContent = "medium";
      this.mediumPriority.href = "#";
      this.mediumPriority.classList.add("mediumPriority");
      this.highPriority = document.createElement("a");
      this.highPriority.textContent = "high";
      this.highPriority.href = "#";
      this.highPriority.classList.add("highPriority");
      this.tasksDisplay.appendChild(this.tasksCheckBox);
      this.tasksDisplay.appendChild(this.tasksText);
      this.tasksDisplay.appendChild(this.dropdownContainer);
      this.tasksDisplay.appendChild(this.tasksDeleteButton);
      this.dropdownContainer.appendChild(this.dropdown);
      this.dropdown.appendChild(this.dropdownButton);
      this.dropdown.appendChild(this.dropdownContent);
      this.dropdownContent.appendChild(this.lowPriority);
      this.dropdownContent.appendChild(this.mediumPriority);
      this.dropdownContent.appendChild(this.highPriority);

      const addDropdownListeners = (() => {
        this.dropdownButton.addEventListener("click", (e) => {
          if (e.target.className === "dropdownButton") {
            document
              .querySelector(
                `[data-dropdown="${taskArray[
                  taskArray.indexOf(element)
                ].id.toString()}"]`
              )
              .classList.toggle("showDropdown");
          }
        });
      })();
      const displayCompleteStatus = (() => {
        if (taskArray[taskArray.indexOf(element)].complete === true) {
          this.tasksText.style.textDecoration = "line-through";
          this.tasksCheckBox.style.backgroundColor = "seashell";
        }
      })();

      const displayPriorityStatus = (() => {
        switch (taskArray[taskArray.indexOf(element)].priority) {
          case "low":
            this.dropdownButton.style.backgroundColor = "green";
            break;
          case "medium":
            this.dropdownButton.style.backgroundColor = "#ffc107";
            break;
          case "high":
            this.dropdownButton.style.backgroundColor = "#e44c55";
            break;
        }
      })();
      const renderEditTaskModal = (() => {
        this.tasksDisplay.addEventListener("click", (e) => {
          if (e.target.className === "tasksText") {
            this.editTaskTitle.value =
              taskArray[taskArray.indexOf(element)].title;
            this.editTaskDescription.value =
              taskArray[taskArray.indexOf(element)].description;
            this.editTaskDueDate.value =
              taskArray[taskArray.indexOf(element)].dueDate;
            this.editTaskNotes.value =
              taskArray[taskArray.indexOf(element)].notes;
            this.editTaskModalContainer.classList.add("show");
            this.editSubmitTask.setAttribute(
              "data-id",
              e.target.parentNode.dataset.id
            );
          }
        });
      })();
    });
  }
  renderNewProjectModal() {
    this.openProject.addEventListener("click", () => {
      this.projectModalContainer.classList.add("show");
    });
  }

  renderNewTaskModal() {
    this.newTask.addEventListener("click", () => {
      this.taskModalContainer.classList.add("show");
    });
  }

  sendControllerProjectData(addProjectToModel) {
    this.submitProject.addEventListener("click", (e) => {
      e.preventDefault();
      addProjectToModel(this.projectTitle.value);
      this.projectForm.reset();
      this.projectModalContainer.classList.remove("show");
      this.newTask.classList.remove("hide");
    });
  }

  sendControllerEditProjectData(editProjectInModel) {
    this.editSubmitProject.addEventListener("click", (e) => {
      e.preventDefault();
      editProjectInModel(e.target.dataset.id, this.editProjectTitle.value);
      this.editProjectModalContainer.classList.remove("show");
    });
  }

  sendControllerTaskData(addTaskToModel) {
    this.submitTask.addEventListener("click", (e) => {
      e.preventDefault();
      addTaskToModel(
        this.taskTitle.value,
        this.taskDescription.value,
        this.taskDueDate.value,
        this.taskNotes.value
      );
      this.taskForm.reset();
      this.taskModalContainer.classList.remove("show");
    });
  }

  sendControllerEditTaskData(editTaskInModel) {
    this.editSubmitTask.addEventListener("click", (e) => {
      e.preventDefault();
      editTaskInModel(
        e.target.dataset.id,
        this.editTaskTitle.value,
        this.editTaskDescription.value,
        this.editTaskDueDate.value,
        this.editTaskNotes.value
      );
      this.editTaskModalContainer.classList.remove("show");
      if (
        this.mainContainerTopText.textContent === "Today" ||
        this.mainContainerTopText.textContent === "All Tasks"
      ) {
        this.view.newTask.classList.add("hide");
      } else {
        this.newTask.classList.remove("hide");
      }
    });
  }

  deleteProjectFromView(deleteProjectFromModel) {
    this.mainContainer.addEventListener("click", (e) => {
      e.preventDefault();
      if (e.target.className === "projectsDeleteButton") {
        deleteProjectFromModel(parseInt(e.target.parentNode.dataset.id));
        e.target.parentNode.remove();
      }
    });
  }
  deleteTaskFromView(deleteTaskFromModel) {
    this.mainContainer.addEventListener("click", (e) => {
      e.preventDefault();
      if (e.target.className === "tasksDeleteButton") {
        deleteTaskFromModel(parseInt(e.target.parentNode.dataset.id));
        e.target.parentNode.remove();
      }
    });
  }

  updateControllerPriority(updateModelPriority) {
    this.mainContainer.addEventListener("click", (e) => {
      e.preventDefault();
      if (e.target.className === "lowPriority") {
        updateModelPriority(
          e.target.closest(".tasksDisplay").dataset.id,
          "low"
        );
      } else if (e.target.className === "mediumPriority") {
        updateModelPriority(
          e.target.closest(".tasksDisplay").dataset.id,
          "medium"
        );
      } else if (e.target.className === "highPriority") {
        updateModelPriority(
          e.target.closest(".tasksDisplay").dataset.id,
          "high"
        );
      }
    });
  }

  updateControllerCompleteStatus(updateModelCompleteStatus) {
    this.mainContainer.addEventListener("click", (e) => {
      e.preventDefault();
      if (
        e.target.className === "tasksCheckBox" &&
        e.target.style.backgroundColor === ""
      ) {
        updateModelCompleteStatus(
          e.target.closest(".tasksDisplay").dataset.id,
          true
        );
      } else if (e.target.className === "tasksCheckBox") {
        updateModelCompleteStatus(
          e.target.closest(".tasksDisplay").dataset.id,
          false
        );
      }
    });
  }

  updateControllerCurrentProject(updateModelCurrentProject) {
    this.projectsContainer.addEventListener("click", (e) => {
      e.preventDefault();
      if (e.target.className === "projectsSidebarButton") {
        console.log("asdf");
        updateModelCurrentProject(e.target.dataset.id);
        this.newTask.classList.remove("hide");
      }
    });
  }

  updateControllerAllProjects(updateModelAllProjects) {
    this.allProjects.addEventListener("click", (e) => {
      this.mainContainerTopText.textContent = "All Projects";
      this.newTask.classList.add("hide");
      updateModelAllProjects();
    });
  }

  updateControllerAllTasks(updateModelAllTasks) {
    this.allTasks.addEventListener("click", (e) => {
      this.mainContainerTopText.textContent = "All Tasks";
      this.newTask.classList.add("hide");
      updateModelAllTasks();
    });
  }

  updateControllerTodayTasks(updateModelTodayTasks) {
    this.todayButton.addEventListener("click", (e) => {
      this.mainContainerTopText.textContent = "Today";
      this.newTask.classList.add("hide");
      updateModelTodayTasks();
    });
  }

  clickOutsideCloseModal() {
    this.mainContainer.addEventListener("click", (e) => {
      if (!e.target.closest(this.taskModal)) {
        console.log("asdf");
        this.taskModalContainer.classList.remove("show");
      }
    });
  }
}




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller.js */ "./src/controller.js");



const app = new _controller_js__WEBPACK_IMPORTED_MODULE_0__.Controller()
app.view.renderNewProjectModal();
app.view.renderNewTaskModal();
app.initDefaultProject();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDOURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFZ0I7Ozs7Ozs7VUNuWWhCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTDBDOztBQUUxQyxnQkFBZ0Isc0RBQVU7QUFDMUI7QUFDQTtBQUNBLHlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3RvSW50ZWdlci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vY29uc3RhbnRzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1NhbWVEYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzVG9kYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3BhcnNlSVNPL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdGFydE9mRGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS90b0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9pZEZ1bmN0aW9uLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL21vZGVsLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy92aWV3LmpzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZWRBcmdzKHJlcXVpcmVkLCBhcmdzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA8IHJlcXVpcmVkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihyZXF1aXJlZCArICcgYXJndW1lbnQnICsgKHJlcXVpcmVkID4gMSA/ICdzJyA6ICcnKSArICcgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmdzLmxlbmd0aCArICcgcHJlc2VudCcpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9JbnRlZ2VyKGRpcnR5TnVtYmVyKSB7XG4gIGlmIChkaXJ0eU51bWJlciA9PT0gbnVsbCB8fCBkaXJ0eU51bWJlciA9PT0gdHJ1ZSB8fCBkaXJ0eU51bWJlciA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG5cbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7XG5cbiAgaWYgKGlzTmFOKG51bWJlcikpIHtcbiAgICByZXR1cm4gbnVtYmVyO1xuICB9XG5cbiAgcmV0dXJuIG51bWJlciA8IDAgPyBNYXRoLmNlaWwobnVtYmVyKSA6IE1hdGguZmxvb3IobnVtYmVyKTtcbn0iLCIvKipcbiAqIERheXMgaW4gMSB3ZWVrLlxuICpcbiAqIEBuYW1lIGRheXNJbldlZWtcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgZGF5c0luV2VlayA9IDc7XG4vKipcbiAqIE1heGltdW0gYWxsb3dlZCB0aW1lLlxuICpcbiAqIEBuYW1lIG1heFRpbWVcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtYXhUaW1lID0gTWF0aC5wb3coMTAsIDgpICogMjQgKiA2MCAqIDYwICogMTAwMDtcbi8qKlxuICogTWlsbGlzZWNvbmRzIGluIDEgbWludXRlXG4gKlxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5NaW51dGVcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtaWxsaXNlY29uZHNJbk1pbnV0ZSA9IDYwMDAwO1xuLyoqXG4gKiBNaWxsaXNlY29uZHMgaW4gMSBob3VyXG4gKlxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5Ib3VyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbWlsbGlzZWNvbmRzSW5Ib3VyID0gMzYwMDAwMDtcbi8qKlxuICogTWlsbGlzZWNvbmRzIGluIDEgc2Vjb25kXG4gKlxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5TZWNvbmRcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtaWxsaXNlY29uZHNJblNlY29uZCA9IDEwMDA7XG4vKipcbiAqIE1pbmltdW0gYWxsb3dlZCB0aW1lLlxuICpcbiAqIEBuYW1lIG1pblRpbWVcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtaW5UaW1lID0gLW1heFRpbWU7XG4vKipcbiAqIE1pbnV0ZXMgaW4gMSBob3VyXG4gKlxuICogQG5hbWUgbWludXRlc0luSG91clxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1pbnV0ZXNJbkhvdXIgPSA2MDtcbi8qKlxuICogTW9udGhzIGluIDEgcXVhcnRlclxuICpcbiAqIEBuYW1lIG1vbnRoc0luUXVhcnRlclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1vbnRoc0luUXVhcnRlciA9IDM7XG4vKipcbiAqIE1vbnRocyBpbiAxIHllYXJcbiAqXG4gKiBAbmFtZSBtb250aHNJblllYXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtb250aHNJblllYXIgPSAxMjtcbi8qKlxuICogUXVhcnRlcnMgaW4gMSB5ZWFyXG4gKlxuICogQG5hbWUgcXVhcnRlcnNJblllYXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBxdWFydGVyc0luWWVhciA9IDQ7XG4vKipcbiAqIFNlY29uZHMgaW4gMSBob3VyXG4gKlxuICogQG5hbWUgc2Vjb25kc0luSG91clxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHNlY29uZHNJbkhvdXIgPSAzNjAwO1xuLyoqXG4gKiBTZWNvbmRzIGluIDEgbWludXRlXG4gKlxuICogQG5hbWUgc2Vjb25kc0luTWludXRlXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgc2Vjb25kc0luTWludXRlID0gNjA7IiwiaW1wb3J0IHN0YXJ0T2ZEYXkgZnJvbSBcIi4uL3N0YXJ0T2ZEYXkvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzU2FtZURheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpP1xuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgZmlyc3QgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIHNlY29uZCBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGVzIGFyZSBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aClcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyIDA2OjAwOjAwIGFuZCA0IFNlcHRlbWJlciAxODowMDowMCBpbiB0aGUgc2FtZSBkYXk/XG4gKiB2YXIgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQsIDYsIDApLCBuZXcgRGF0ZSgyMDE0LCA4LCA0LCAxOCwgMCkpXG4gKiAvLz0+IHRydWVcbiAqIFxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciBhbmQgNCBPY3RvYmVyIGluIHRoZSBzYW1lIGRheT9cbiAqIHZhciByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCksIG5ldyBEYXRlKDIwMTQsIDksIDQpKVxuICogLy89PiBmYWxzZVxuICogXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyLCAyMDE0IGFuZCA0IFNlcHRlbWJlciwgMjAxNSBpbiB0aGUgc2FtZSBkYXk/XG4gKiB2YXIgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQpLCBuZXcgRGF0ZSgyMDE1LCA4LCA0KSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1NhbWVEYXkoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdFN0YXJ0T2ZEYXkgPSBzdGFydE9mRGF5KGRpcnR5RGF0ZUxlZnQpO1xuICB2YXIgZGF0ZVJpZ2h0U3RhcnRPZkRheSA9IHN0YXJ0T2ZEYXkoZGlydHlEYXRlUmlnaHQpO1xuICByZXR1cm4gZGF0ZUxlZnRTdGFydE9mRGF5LmdldFRpbWUoKSA9PT0gZGF0ZVJpZ2h0U3RhcnRPZkRheS5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IGlzU2FtZURheSBmcm9tIFwiLi4vaXNTYW1lRGF5L2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1RvZGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIHRvZGF5P1xuICogQHB1cmUgZmFsc2VcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBnaXZlbiBkYXRlIHRvZGF5P1xuICpcbiAqID4g4pqg77iPIFBsZWFzZSBub3RlIHRoYXQgdGhpcyBmdW5jdGlvbiBpcyBub3QgcHJlc2VudCBpbiB0aGUgRlAgc3VibW9kdWxlIGFzXG4gKiA+IGl0IHVzZXMgYERhdGUubm93KClgIGludGVybmFsbHkgaGVuY2UgaW1wdXJlIGFuZCBjYW4ndCBiZSBzYWZlbHkgY3VycmllZC5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIHRvZGF5XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgNiBPY3RvYmVyIDIwMTQsIGlzIDYgT2N0b2JlciAxNDowMDowMCB0b2RheT9cbiAqIHZhciByZXN1bHQgPSBpc1RvZGF5KG5ldyBEYXRlKDIwMTQsIDksIDYsIDE0LCAwKSlcbiAqIC8vPT4gdHJ1ZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVG9kYXkoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICByZXR1cm4gaXNTYW1lRGF5KGRpcnR5RGF0ZSwgRGF0ZS5ub3coKSk7XG59IiwiaW1wb3J0IHsgbWlsbGlzZWNvbmRzSW5Ib3VyLCBtaWxsaXNlY29uZHNJbk1pbnV0ZSB9IGZyb20gXCIuLi9jb25zdGFudHMvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBwYXJzZUlTT1xuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBQYXJzZSBJU08gc3RyaW5nXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBQYXJzZSB0aGUgZ2l2ZW4gc3RyaW5nIGluIElTTyA4NjAxIGZvcm1hdCBhbmQgcmV0dXJuIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogRnVuY3Rpb24gYWNjZXB0cyBjb21wbGV0ZSBJU08gODYwMSBmb3JtYXRzIGFzIHdlbGwgYXMgcGFydGlhbCBpbXBsZW1lbnRhdGlvbnMuXG4gKiBJU08gODYwMTogaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fODYwMVxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpc24ndCBhIHN0cmluZywgdGhlIGZ1bmN0aW9uIGNhbm5vdCBwYXJzZSB0aGUgc3RyaW5nIG9yXG4gKiB0aGUgdmFsdWVzIGFyZSBpbnZhbGlkLCBpdCByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIC0gVGhlIHByZXZpb3VzIGBwYXJzZWAgaW1wbGVtZW50YXRpb24gd2FzIHJlbmFtZWQgdG8gYHBhcnNlSVNPYC5cbiAqXG4gKiAgIGBgYGphdmFzY3JpcHRcbiAqICAgLy8gQmVmb3JlIHYyLjAuMFxuICogICBwYXJzZSgnMjAxNi0wMS0wMScpXG4gKlxuICogICAvLyB2Mi4wLjAgb253YXJkXG4gKiAgIHBhcnNlSVNPKCcyMDE2LTAxLTAxJylcbiAqICAgYGBgXG4gKlxuICogLSBgcGFyc2VJU09gIG5vdyB2YWxpZGF0ZXMgc2VwYXJhdGUgZGF0ZSBhbmQgdGltZSB2YWx1ZXMgaW4gSVNPLTg2MDEgc3RyaW5nc1xuICogICBhbmQgcmV0dXJucyBgSW52YWxpZCBEYXRlYCBpZiB0aGUgZGF0ZSBpcyBpbnZhbGlkLlxuICpcbiAqICAgYGBgamF2YXNjcmlwdFxuICogICBwYXJzZUlTTygnMjAxOC0xMy0zMicpXG4gKiAgIC8vPT4gSW52YWxpZCBEYXRlXG4gKiAgIGBgYFxuICpcbiAqIC0gYHBhcnNlSVNPYCBub3cgZG9lc24ndCBmYWxsIGJhY2sgdG8gYG5ldyBEYXRlYCBjb25zdHJ1Y3RvclxuICogICBpZiBpdCBmYWlscyB0byBwYXJzZSBhIHN0cmluZyBhcmd1bWVudC4gSW5zdGVhZCwgaXQgcmV0dXJucyBgSW52YWxpZCBEYXRlYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0gezB8MXwyfSBbb3B0aW9ucy5hZGRpdGlvbmFsRGlnaXRzPTJdIC0gdGhlIGFkZGl0aW9uYWwgbnVtYmVyIG9mIGRpZ2l0cyBpbiB0aGUgZXh0ZW5kZWQgeWVhciBmb3JtYXRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5hZGRpdGlvbmFsRGlnaXRzYCBtdXN0IGJlIDAsIDEgb3IgMlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHN0cmluZyAnMjAxNC0wMi0xMVQxMTozMDozMCcgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHBhcnNlSVNPKCcyMDE0LTAyLTExVDExOjMwOjMwJylcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgc3RyaW5nICcrMDIwMTQxMDEnIHRvIGRhdGUsXG4gKiAvLyBpZiB0aGUgYWRkaXRpb25hbCBudW1iZXIgb2YgZGlnaXRzIGluIHRoZSBleHRlbmRlZCB5ZWFyIGZvcm1hdCBpcyAxOlxuICogY29uc3QgcmVzdWx0ID0gcGFyc2VJU08oJyswMjAxNDEwMScsIHsgYWRkaXRpb25hbERpZ2l0czogMSB9KVxuICogLy89PiBGcmkgQXByIDExIDIwMTQgMDA6MDA6MDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwYXJzZUlTTyhhcmd1bWVudCwgZGlydHlPcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgb3B0aW9ucyA9IGRpcnR5T3B0aW9ucyB8fCB7fTtcbiAgdmFyIGFkZGl0aW9uYWxEaWdpdHMgPSBvcHRpb25zLmFkZGl0aW9uYWxEaWdpdHMgPT0gbnVsbCA/IDIgOiB0b0ludGVnZXIob3B0aW9ucy5hZGRpdGlvbmFsRGlnaXRzKTtcblxuICBpZiAoYWRkaXRpb25hbERpZ2l0cyAhPT0gMiAmJiBhZGRpdGlvbmFsRGlnaXRzICE9PSAxICYmIGFkZGl0aW9uYWxEaWdpdHMgIT09IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignYWRkaXRpb25hbERpZ2l0cyBtdXN0IGJlIDAsIDEgb3IgMicpO1xuICB9XG5cbiAgaWYgKCEodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpID09PSAnW29iamVjdCBTdHJpbmddJykpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxuXG4gIHZhciBkYXRlU3RyaW5ncyA9IHNwbGl0RGF0ZVN0cmluZyhhcmd1bWVudCk7XG4gIHZhciBkYXRlO1xuXG4gIGlmIChkYXRlU3RyaW5ncy5kYXRlKSB7XG4gICAgdmFyIHBhcnNlWWVhclJlc3VsdCA9IHBhcnNlWWVhcihkYXRlU3RyaW5ncy5kYXRlLCBhZGRpdGlvbmFsRGlnaXRzKTtcbiAgICBkYXRlID0gcGFyc2VEYXRlKHBhcnNlWWVhclJlc3VsdC5yZXN0RGF0ZVN0cmluZywgcGFyc2VZZWFyUmVzdWx0LnllYXIpO1xuICB9XG5cbiAgaWYgKCFkYXRlIHx8IGlzTmFOKGRhdGUuZ2V0VGltZSgpKSkge1xuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG5cbiAgdmFyIHRpbWVzdGFtcCA9IGRhdGUuZ2V0VGltZSgpO1xuICB2YXIgdGltZSA9IDA7XG4gIHZhciBvZmZzZXQ7XG5cbiAgaWYgKGRhdGVTdHJpbmdzLnRpbWUpIHtcbiAgICB0aW1lID0gcGFyc2VUaW1lKGRhdGVTdHJpbmdzLnRpbWUpO1xuXG4gICAgaWYgKGlzTmFOKHRpbWUpKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgICB9XG4gIH1cblxuICBpZiAoZGF0ZVN0cmluZ3MudGltZXpvbmUpIHtcbiAgICBvZmZzZXQgPSBwYXJzZVRpbWV6b25lKGRhdGVTdHJpbmdzLnRpbWV6b25lKTtcblxuICAgIGlmIChpc05hTihvZmZzZXQpKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdmFyIGRpcnR5RGF0ZSA9IG5ldyBEYXRlKHRpbWVzdGFtcCArIHRpbWUpOyAvLyBqcyBwYXJzZWQgc3RyaW5nIGFzc3VtaW5nIGl0J3MgaW4gVVRDIHRpbWV6b25lXG4gICAgLy8gYnV0IHdlIG5lZWQgaXQgdG8gYmUgcGFyc2VkIGluIG91ciB0aW1lem9uZVxuICAgIC8vIHNvIHdlIHVzZSB1dGMgdmFsdWVzIHRvIGJ1aWxkIGRhdGUgaW4gb3VyIHRpbWV6b25lLlxuICAgIC8vIFllYXIgdmFsdWVzIGZyb20gMCB0byA5OSBtYXAgdG8gdGhlIHllYXJzIDE5MDAgdG8gMTk5OVxuICAgIC8vIHNvIHNldCB5ZWFyIGV4cGxpY2l0bHkgd2l0aCBzZXRGdWxsWWVhci5cblxuICAgIHZhciByZXN1bHQgPSBuZXcgRGF0ZSgwKTtcbiAgICByZXN1bHQuc2V0RnVsbFllYXIoZGlydHlEYXRlLmdldFVUQ0Z1bGxZZWFyKCksIGRpcnR5RGF0ZS5nZXRVVENNb250aCgpLCBkaXJ0eURhdGUuZ2V0VVRDRGF0ZSgpKTtcbiAgICByZXN1bHQuc2V0SG91cnMoZGlydHlEYXRlLmdldFVUQ0hvdXJzKCksIGRpcnR5RGF0ZS5nZXRVVENNaW51dGVzKCksIGRpcnR5RGF0ZS5nZXRVVENTZWNvbmRzKCksIGRpcnR5RGF0ZS5nZXRVVENNaWxsaXNlY29uZHMoKSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHJldHVybiBuZXcgRGF0ZSh0aW1lc3RhbXAgKyB0aW1lICsgb2Zmc2V0KTtcbn1cbnZhciBwYXR0ZXJucyA9IHtcbiAgZGF0ZVRpbWVEZWxpbWl0ZXI6IC9bVCBdLyxcbiAgdGltZVpvbmVEZWxpbWl0ZXI6IC9bWiBdL2ksXG4gIHRpbWV6b25lOiAvKFtaKy1dLiopJC9cbn07XG52YXIgZGF0ZVJlZ2V4ID0gL14tPyg/OihcXGR7M30pfChcXGR7Mn0pKD86LT8oXFxkezJ9KSk/fFcoXFxkezJ9KSg/Oi0/KFxcZHsxfSkpP3wpJC87XG52YXIgdGltZVJlZ2V4ID0gL14oXFxkezJ9KD86Wy4sXVxcZCopPykoPzo6PyhcXGR7Mn0oPzpbLixdXFxkKik/KSk/KD86Oj8oXFxkezJ9KD86Wy4sXVxcZCopPykpPyQvO1xudmFyIHRpbWV6b25lUmVnZXggPSAvXihbKy1dKShcXGR7Mn0pKD86Oj8oXFxkezJ9KSk/JC87XG5cbmZ1bmN0aW9uIHNwbGl0RGF0ZVN0cmluZyhkYXRlU3RyaW5nKSB7XG4gIHZhciBkYXRlU3RyaW5ncyA9IHt9O1xuICB2YXIgYXJyYXkgPSBkYXRlU3RyaW5nLnNwbGl0KHBhdHRlcm5zLmRhdGVUaW1lRGVsaW1pdGVyKTtcbiAgdmFyIHRpbWVTdHJpbmc7IC8vIFRoZSByZWdleCBtYXRjaCBzaG91bGQgb25seSByZXR1cm4gYXQgbWF4aW11bSB0d28gYXJyYXkgZWxlbWVudHMuXG4gIC8vIFtkYXRlXSwgW3RpbWVdLCBvciBbZGF0ZSwgdGltZV0uXG5cbiAgaWYgKGFycmF5Lmxlbmd0aCA+IDIpIHtcbiAgICByZXR1cm4gZGF0ZVN0cmluZ3M7XG4gIH1cblxuICBpZiAoLzovLnRlc3QoYXJyYXlbMF0pKSB7XG4gICAgdGltZVN0cmluZyA9IGFycmF5WzBdO1xuICB9IGVsc2Uge1xuICAgIGRhdGVTdHJpbmdzLmRhdGUgPSBhcnJheVswXTtcbiAgICB0aW1lU3RyaW5nID0gYXJyYXlbMV07XG5cbiAgICBpZiAocGF0dGVybnMudGltZVpvbmVEZWxpbWl0ZXIudGVzdChkYXRlU3RyaW5ncy5kYXRlKSkge1xuICAgICAgZGF0ZVN0cmluZ3MuZGF0ZSA9IGRhdGVTdHJpbmcuc3BsaXQocGF0dGVybnMudGltZVpvbmVEZWxpbWl0ZXIpWzBdO1xuICAgICAgdGltZVN0cmluZyA9IGRhdGVTdHJpbmcuc3Vic3RyKGRhdGVTdHJpbmdzLmRhdGUubGVuZ3RoLCBkYXRlU3RyaW5nLmxlbmd0aCk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHRpbWVTdHJpbmcpIHtcbiAgICB2YXIgdG9rZW4gPSBwYXR0ZXJucy50aW1lem9uZS5leGVjKHRpbWVTdHJpbmcpO1xuXG4gICAgaWYgKHRva2VuKSB7XG4gICAgICBkYXRlU3RyaW5ncy50aW1lID0gdGltZVN0cmluZy5yZXBsYWNlKHRva2VuWzFdLCAnJyk7XG4gICAgICBkYXRlU3RyaW5ncy50aW1lem9uZSA9IHRva2VuWzFdO1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXRlU3RyaW5ncy50aW1lID0gdGltZVN0cmluZztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGF0ZVN0cmluZ3M7XG59XG5cbmZ1bmN0aW9uIHBhcnNlWWVhcihkYXRlU3RyaW5nLCBhZGRpdGlvbmFsRGlnaXRzKSB7XG4gIHZhciByZWdleCA9IG5ldyBSZWdFeHAoJ14oPzooXFxcXGR7NH18WystXVxcXFxkeycgKyAoNCArIGFkZGl0aW9uYWxEaWdpdHMpICsgJ30pfChcXFxcZHsyfXxbKy1dXFxcXGR7JyArICgyICsgYWRkaXRpb25hbERpZ2l0cykgKyAnfSkkKScpO1xuICB2YXIgY2FwdHVyZXMgPSBkYXRlU3RyaW5nLm1hdGNoKHJlZ2V4KTsgLy8gSW52YWxpZCBJU08tZm9ybWF0dGVkIHllYXJcblxuICBpZiAoIWNhcHR1cmVzKSByZXR1cm4ge1xuICAgIHllYXI6IE5hTixcbiAgICByZXN0RGF0ZVN0cmluZzogJydcbiAgfTtcbiAgdmFyIHllYXIgPSBjYXB0dXJlc1sxXSA/IHBhcnNlSW50KGNhcHR1cmVzWzFdKSA6IG51bGw7XG4gIHZhciBjZW50dXJ5ID0gY2FwdHVyZXNbMl0gPyBwYXJzZUludChjYXB0dXJlc1syXSkgOiBudWxsOyAvLyBlaXRoZXIgeWVhciBvciBjZW50dXJ5IGlzIG51bGwsIG5vdCBib3RoXG5cbiAgcmV0dXJuIHtcbiAgICB5ZWFyOiBjZW50dXJ5ID09PSBudWxsID8geWVhciA6IGNlbnR1cnkgKiAxMDAsXG4gICAgcmVzdERhdGVTdHJpbmc6IGRhdGVTdHJpbmcuc2xpY2UoKGNhcHR1cmVzWzFdIHx8IGNhcHR1cmVzWzJdKS5sZW5ndGgpXG4gIH07XG59XG5cbmZ1bmN0aW9uIHBhcnNlRGF0ZShkYXRlU3RyaW5nLCB5ZWFyKSB7XG4gIC8vIEludmFsaWQgSVNPLWZvcm1hdHRlZCB5ZWFyXG4gIGlmICh5ZWFyID09PSBudWxsKSByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgdmFyIGNhcHR1cmVzID0gZGF0ZVN0cmluZy5tYXRjaChkYXRlUmVnZXgpOyAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgc3RyaW5nXG5cbiAgaWYgKCFjYXB0dXJlcykgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIHZhciBpc1dlZWtEYXRlID0gISFjYXB0dXJlc1s0XTtcbiAgdmFyIGRheU9mWWVhciA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbMV0pO1xuICB2YXIgbW9udGggPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzJdKSAtIDE7XG4gIHZhciBkYXkgPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzNdKTtcbiAgdmFyIHdlZWsgPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzRdKTtcbiAgdmFyIGRheU9mV2VlayA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbNV0pIC0gMTtcblxuICBpZiAoaXNXZWVrRGF0ZSkge1xuICAgIGlmICghdmFsaWRhdGVXZWVrRGF0ZSh5ZWFyLCB3ZWVrLCBkYXlPZldlZWspKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGF5T2ZJU09XZWVrWWVhcih5ZWFyLCB3ZWVrLCBkYXlPZldlZWspO1xuICB9IGVsc2Uge1xuICAgIHZhciBkYXRlID0gbmV3IERhdGUoMCk7XG5cbiAgICBpZiAoIXZhbGlkYXRlRGF0ZSh5ZWFyLCBtb250aCwgZGF5KSB8fCAhdmFsaWRhdGVEYXlPZlllYXJEYXRlKHllYXIsIGRheU9mWWVhcikpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICAgIH1cblxuICAgIGRhdGUuc2V0VVRDRnVsbFllYXIoeWVhciwgbW9udGgsIE1hdGgubWF4KGRheU9mWWVhciwgZGF5KSk7XG4gICAgcmV0dXJuIGRhdGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gcGFyc2VEYXRlVW5pdCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPyBwYXJzZUludCh2YWx1ZSkgOiAxO1xufVxuXG5mdW5jdGlvbiBwYXJzZVRpbWUodGltZVN0cmluZykge1xuICB2YXIgY2FwdHVyZXMgPSB0aW1lU3RyaW5nLm1hdGNoKHRpbWVSZWdleCk7XG4gIGlmICghY2FwdHVyZXMpIHJldHVybiBOYU47IC8vIEludmFsaWQgSVNPLWZvcm1hdHRlZCB0aW1lXG5cbiAgdmFyIGhvdXJzID0gcGFyc2VUaW1lVW5pdChjYXB0dXJlc1sxXSk7XG4gIHZhciBtaW51dGVzID0gcGFyc2VUaW1lVW5pdChjYXB0dXJlc1syXSk7XG4gIHZhciBzZWNvbmRzID0gcGFyc2VUaW1lVW5pdChjYXB0dXJlc1szXSk7XG5cbiAgaWYgKCF2YWxpZGF0ZVRpbWUoaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMpKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuXG4gIHJldHVybiBob3VycyAqIG1pbGxpc2Vjb25kc0luSG91ciArIG1pbnV0ZXMgKiBtaWxsaXNlY29uZHNJbk1pbnV0ZSArIHNlY29uZHMgKiAxMDAwO1xufVxuXG5mdW5jdGlvbiBwYXJzZVRpbWVVbml0KHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAmJiBwYXJzZUZsb2F0KHZhbHVlLnJlcGxhY2UoJywnLCAnLicpKSB8fCAwO1xufVxuXG5mdW5jdGlvbiBwYXJzZVRpbWV6b25lKHRpbWV6b25lU3RyaW5nKSB7XG4gIGlmICh0aW1lem9uZVN0cmluZyA9PT0gJ1onKSByZXR1cm4gMDtcbiAgdmFyIGNhcHR1cmVzID0gdGltZXpvbmVTdHJpbmcubWF0Y2godGltZXpvbmVSZWdleCk7XG4gIGlmICghY2FwdHVyZXMpIHJldHVybiAwO1xuICB2YXIgc2lnbiA9IGNhcHR1cmVzWzFdID09PSAnKycgPyAtMSA6IDE7XG4gIHZhciBob3VycyA9IHBhcnNlSW50KGNhcHR1cmVzWzJdKTtcbiAgdmFyIG1pbnV0ZXMgPSBjYXB0dXJlc1szXSAmJiBwYXJzZUludChjYXB0dXJlc1szXSkgfHwgMDtcblxuICBpZiAoIXZhbGlkYXRlVGltZXpvbmUoaG91cnMsIG1pbnV0ZXMpKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuXG4gIHJldHVybiBzaWduICogKGhvdXJzICogbWlsbGlzZWNvbmRzSW5Ib3VyICsgbWludXRlcyAqIG1pbGxpc2Vjb25kc0luTWludXRlKTtcbn1cblxuZnVuY3Rpb24gZGF5T2ZJU09XZWVrWWVhcihpc29XZWVrWWVhciwgd2VlaywgZGF5KSB7XG4gIHZhciBkYXRlID0gbmV3IERhdGUoMCk7XG4gIGRhdGUuc2V0VVRDRnVsbFllYXIoaXNvV2Vla1llYXIsIDAsIDQpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5RGF5ID0gZGF0ZS5nZXRVVENEYXkoKSB8fCA3O1xuICB2YXIgZGlmZiA9ICh3ZWVrIC0gMSkgKiA3ICsgZGF5ICsgMSAtIGZvdXJ0aE9mSmFudWFyeURheTtcbiAgZGF0ZS5zZXRVVENEYXRlKGRhdGUuZ2V0VVRDRGF0ZSgpICsgZGlmZik7XG4gIHJldHVybiBkYXRlO1xufSAvLyBWYWxpZGF0aW9uIGZ1bmN0aW9uc1xuLy8gRmVicnVhcnkgaXMgbnVsbCB0byBoYW5kbGUgdGhlIGxlYXAgeWVhciAodXNpbmcgfHwpXG5cblxudmFyIGRheXNJbk1vbnRocyA9IFszMSwgbnVsbCwgMzEsIDMwLCAzMSwgMzAsIDMxLCAzMSwgMzAsIDMxLCAzMCwgMzFdO1xuXG5mdW5jdGlvbiBpc0xlYXBZZWFySW5kZXgoeWVhcikge1xuICByZXR1cm4geWVhciAlIDQwMCA9PT0gMCB8fCB5ZWFyICUgNCA9PT0gMCAmJiB5ZWFyICUgMTAwICE9PSAwO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZURhdGUoeWVhciwgbW9udGgsIGRhdGUpIHtcbiAgcmV0dXJuIG1vbnRoID49IDAgJiYgbW9udGggPD0gMTEgJiYgZGF0ZSA+PSAxICYmIGRhdGUgPD0gKGRheXNJbk1vbnRoc1ttb250aF0gfHwgKGlzTGVhcFllYXJJbmRleCh5ZWFyKSA/IDI5IDogMjgpKTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVEYXlPZlllYXJEYXRlKHllYXIsIGRheU9mWWVhcikge1xuICByZXR1cm4gZGF5T2ZZZWFyID49IDEgJiYgZGF5T2ZZZWFyIDw9IChpc0xlYXBZZWFySW5kZXgoeWVhcikgPyAzNjYgOiAzNjUpO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVdlZWtEYXRlKF95ZWFyLCB3ZWVrLCBkYXkpIHtcbiAgcmV0dXJuIHdlZWsgPj0gMSAmJiB3ZWVrIDw9IDUzICYmIGRheSA+PSAwICYmIGRheSA8PSA2O1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVRpbWUoaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMpIHtcbiAgaWYgKGhvdXJzID09PSAyNCkge1xuICAgIHJldHVybiBtaW51dGVzID09PSAwICYmIHNlY29uZHMgPT09IDA7XG4gIH1cblxuICByZXR1cm4gc2Vjb25kcyA+PSAwICYmIHNlY29uZHMgPCA2MCAmJiBtaW51dGVzID49IDAgJiYgbWludXRlcyA8IDYwICYmIGhvdXJzID49IDAgJiYgaG91cnMgPCAyNTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVUaW1lem9uZShfaG91cnMsIG1pbnV0ZXMpIHtcbiAgcmV0dXJuIG1pbnV0ZXMgPj0gMCAmJiBtaW51dGVzIDw9IDU5O1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc3RhcnRPZkRheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHJldHVybnMge0RhdGV9IHRoZSBzdGFydCBvZiBhIGRheVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIGRheSBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZEYXkobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gVHVlIFNlcCAwMiAyMDE0IDAwOjAwOjAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZkRheShkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpOyAvLyBDbG9uZSB0aGUgZGF0ZVxuXG4gIGlmIChhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHwgdHlwZW9mIGFyZ3VtZW50ID09PSAnb2JqZWN0JyAmJiBhcmdTdHIgPT09ICdbb2JqZWN0IERhdGVdJykge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudC5nZXRUaW1lKCkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudCA9PT0gJ251bWJlcicgfHwgYXJnU3RyID09PSAnW29iamVjdCBOdW1iZXJdJykge1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgU3RyaW5nXScpICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihcIlN0YXJ0aW5nIHdpdGggdjIuMC4wLWJldGEuMSBkYXRlLWZucyBkb2Vzbid0IGFjY2VwdCBzdHJpbmdzIGFzIGRhdGUgYXJndW1lbnRzLiBQbGVhc2UgdXNlIGBwYXJzZUlTT2AgdG8gcGFyc2Ugc3RyaW5ncy4gU2VlOiBodHRwczovL2dpdC5pby9manVsZVwiKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcblxuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufSIsImltcG9ydCB7IFByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0LmpzXCI7XG5pbXBvcnQgeyBUYXNrIH0gZnJvbSBcIi4vdGFzay5qc1wiO1xuaW1wb3J0IHsgTW9kZWwgfSBmcm9tIFwiLi9tb2RlbC5qc1wiO1xuaW1wb3J0IHsgVmlldyB9IGZyb20gXCIuL3ZpZXcuanNcIjtcbmltcG9ydCBwYXJzZUlTTyBmcm9tIFwiZGF0ZS1mbnMvcGFyc2VJU09cIjtcbmltcG9ydCBpc1RvZGF5IGZyb20gXCJkYXRlLWZucy9pc1RvZGF5XCI7XG5pbXBvcnQge2NyZWF0ZUlkRm9yQXJyYXlFbGVtZW50cyB9IGZyb20gXCIuL2lkRnVuY3Rpb25cIlxuXG5jbGFzcyBDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy52aWV3ID0gbmV3IFZpZXcoKTtcbiAgICB0aGlzLm1vZGVsID0gbmV3IE1vZGVsKCk7XG4gICAgdGhpcy52aWV3LnNlbmRDb250cm9sbGVyUHJvamVjdERhdGEodGhpcy5hZGRQcm9qZWN0VG9Nb2RlbC5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLnZpZXcuc2VuZENvbnRyb2xsZXJFZGl0UHJvamVjdERhdGEodGhpcy5lZGl0UHJvamVjdEluTW9kZWwuYmluZCh0aGlzKSk7XG4gICAgdGhpcy52aWV3LnNlbmRDb250cm9sbGVyVGFza0RhdGEodGhpcy5hZGRUYXNrVG9Nb2RlbC5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLnZpZXcuc2VuZENvbnRyb2xsZXJFZGl0VGFza0RhdGEodGhpcy5lZGl0VGFza0luTW9kZWwuYmluZCh0aGlzKSk7XG4gICAgdGhpcy52aWV3LmRlbGV0ZVByb2plY3RGcm9tVmlldyh0aGlzLmRlbGV0ZVByb2plY3RGcm9tTW9kZWwuYmluZCh0aGlzKSk7XG4gICAgdGhpcy52aWV3LmRlbGV0ZVRhc2tGcm9tVmlldyh0aGlzLmRlbGV0ZVRhc2tGcm9tTW9kZWwuYmluZCh0aGlzKSk7XG4gICAgdGhpcy52aWV3LnVwZGF0ZUNvbnRyb2xsZXJQcmlvcml0eSh0aGlzLnVwZGF0ZU1vZGVsUHJpb3JpdHkuYmluZCh0aGlzKSk7XG4gICAgdGhpcy52aWV3LnVwZGF0ZUNvbnRyb2xsZXJDb21wbGV0ZVN0YXR1cyhcbiAgICAgIHRoaXMudXBkYXRlTW9kZWxDb21wbGV0ZVN0YXR1cy5iaW5kKHRoaXMpXG4gICAgKTtcbiAgICB0aGlzLnZpZXcudXBkYXRlQ29udHJvbGxlckN1cnJlbnRQcm9qZWN0KFxuICAgICAgdGhpcy51cGRhdGVNb2RlbEN1cnJlbnRQcm9qZWN0LmJpbmQodGhpcylcbiAgICApO1xuICAgIHRoaXMudmlldy51cGRhdGVDb250cm9sbGVyQWxsUHJvamVjdHMoXG4gICAgICB0aGlzLnVwZGF0ZU1vZGVsQWxsUHJvamVjdHMuYmluZCh0aGlzKVxuICAgICk7XG4gICAgdGhpcy52aWV3LnVwZGF0ZUNvbnRyb2xsZXJBbGxUYXNrcyh0aGlzLnVwZGF0ZU1vZGVsQWxsVGFza3MuYmluZCh0aGlzKSk7XG4gICAgdGhpcy52aWV3LnVwZGF0ZUNvbnRyb2xsZXJUb2RheVRhc2tzKHRoaXMudXBkYXRlTW9kZWxUb2RheVRhc2tzLmJpbmQodGhpcykpO1xuICB9XG5cbiAgaW5pdERlZmF1bHRQcm9qZWN0KCkge1xuICAgIGNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gbmV3IFByb2plY3QoKTtcbiAgICB0aGlzLm1vZGVsLmFycmF5LnB1c2goZGVmYXVsdFByb2plY3QpO1xuICAgIHRoaXMubW9kZWwuY3VycmVudFByb2plY3QgPSBkZWZhdWx0UHJvamVjdDtcbiAgICBkZWZhdWx0UHJvamVjdC50aXRsZSA9IFwiRGVmYXVsdFwiO1xuICAgIGNyZWF0ZUlkRm9yQXJyYXlFbGVtZW50cyh0aGlzLm1vZGVsLmFycmF5KTtcbiAgICB0aGlzLnZpZXcucmVuZGVyUHJvamVjdHNTaWRlYmFyKHRoaXMubW9kZWwuYXJyYXkpO1xuICAgIHRoaXMudmlldy5yZW5kZXJDdXJyZW50UHJvamVjdCh0aGlzLm1vZGVsLmN1cnJlbnRQcm9qZWN0KTtcbiAgfVxuICBhZGRQcm9qZWN0VG9Nb2RlbCh0aXRsZSkge1xuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdCgpO1xuICAgIHRoaXMubW9kZWwuYXJyYXkucHVzaChuZXdQcm9qZWN0KTtcbiAgICBuZXdQcm9qZWN0LnRpdGxlID0gdGl0bGU7XG4gICAgY3JlYXRlSWRGb3JBcnJheUVsZW1lbnRzKHRoaXMubW9kZWwuYXJyYXkpO1xuICAgIHRoaXMubW9kZWwuY3VycmVudFByb2plY3QgPSBuZXdQcm9qZWN0O1xuICAgIHRoaXMudmlldy5yZW5kZXJQcm9qZWN0c1NpZGViYXIodGhpcy5tb2RlbC5hcnJheSk7XG4gICAgdGhpcy52aWV3LnJlbmRlckN1cnJlbnRQcm9qZWN0KHRoaXMubW9kZWwuY3VycmVudFByb2plY3QpO1xuICAgIHRoaXMudmlldy5yZW5kZXJUYXNrcyh0aGlzLm1vZGVsLmN1cnJlbnRQcm9qZWN0LmFycmF5KTtcbiAgfVxuXG4gIGVkaXRQcm9qZWN0SW5Nb2RlbChpZCwgdGl0bGUpIHtcbiAgICB0aGlzLm1vZGVsLmFycmF5LmZvckVhY2goKGUpID0+IHtcbiAgICAgIGlmIChwYXJzZUludChpZCkgPT09IGUuaWQpIHtcbiAgICAgICAgZS50aXRsZSA9IHRpdGxlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMudmlldy5yZW5kZXJBbGxQcm9qZWN0cyh0aGlzLm1vZGVsLmFycmF5KTtcbiAgICB0aGlzLnZpZXcucmVuZGVyUHJvamVjdHNTaWRlYmFyKHRoaXMubW9kZWwuYXJyYXkpO1xuICB9XG5cbiAgZGVsZXRlUHJvamVjdEZyb21Nb2RlbCA9IChpZCkgPT4ge1xuICAgIHRoaXMubW9kZWwuYXJyYXkgPSB0aGlzLm1vZGVsLmFycmF5LmZpbHRlcihmdW5jdGlvbiAoZSkge1xuICAgICAgcmV0dXJuIGUuaWQgIT09IHBhcnNlSW50KGlkKTtcbiAgICB9KTtcbiAgICB0aGlzLnZpZXcucmVuZGVyQWxsUHJvamVjdHModGhpcy5tb2RlbC5hcnJheSk7XG4gICAgdGhpcy52aWV3LnJlbmRlclByb2plY3RzU2lkZWJhcih0aGlzLm1vZGVsLmFycmF5KTtcbiAgfTtcbiAgYWRkVGFza1RvTW9kZWwodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBub3Rlcykge1xuICAgIGxldCBuZXdUYXNrID0gbmV3IFRhc2soKTtcbiAgICB0aGlzLm1vZGVsLmN1cnJlbnRQcm9qZWN0LmFycmF5LnB1c2gobmV3VGFzayk7XG4gICAgdGhpcy5tb2RlbC50YXNrQXJyYXkucHVzaChuZXdUYXNrKTtcbiAgICBuZXdUYXNrLnRpdGxlID0gdGl0bGU7XG4gICAgY3JlYXRlSWRGb3JBcnJheUVsZW1lbnRzKHRoaXMubW9kZWwudGFza0FycmF5KTtcbiAgICBuZXdUYXNrLnByb2plY3QgPSB0aGlzLm1vZGVsLmN1cnJlbnRQcm9qZWN0LnRpdGxlO1xuICAgIG5ld1Rhc2suZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICBuZXdUYXNrLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIG5ld1Rhc2subm90ZXMgPSBub3RlcztcbiAgICBpZiAodGhpcy52aWV3Lm1haW5Db250YWluZXJUb3BUZXh0LnRleHRDb250ZW50ID09PSBcIkFsbCBUYXNrc1wiKSB7XG4gICAgICB0aGlzLnZpZXcucmVuZGVyVGFza3ModGhpcy5tb2RlbC50YXNrQXJyYXkpO1xuICAgIH0gXG4gICAgZWxzZSBpZiAodGhpcy52aWV3Lm1haW5Db250YWluZXJUb3BUZXh0LnRleHRDb250ZW50ID09PSBcIlRvZGF5XCIpIHtcbiAgICAgIHRoaXMudmlldy5yZW5kZXJUYXNrcyh0aGlzLm1vZGVsLnRvZGF5VGFza0FycmF5KTtcbiAgICB9IFxuICAgIGVsc2Uge1xuICAgICAgdGhpcy52aWV3LnJlbmRlclRhc2tzKHRoaXMubW9kZWwuY3VycmVudFByb2plY3QuYXJyYXkpO1xuICAgIH1cbiAgfVxuICBlZGl0VGFza0luTW9kZWwoaWQsIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgbm90ZXMpIHtcbiAgICB0aGlzLm1vZGVsLnRhc2tBcnJheS5mb3JFYWNoKChlKSA9PiB7XG4gICAgICBpZiAocGFyc2VJbnQoaWQpID09PSBlLmlkKSB7XG4gICAgICAgIGUudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgZS5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICBlLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICBlLm5vdGVzID0gbm90ZXM7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKHRoaXMudmlldy5tYWluQ29udGFpbmVyVG9wVGV4dC50ZXh0Q29udGVudCA9PT0gXCJBbGwgVGFza3NcIikge1xuICAgICAgdGhpcy52aWV3LnJlbmRlclRhc2tzKHRoaXMubW9kZWwudGFza0FycmF5KTtcbiAgICB9IFxuICAgIGVsc2UgaWYgKHRoaXMudmlldy5tYWluQ29udGFpbmVyVG9wVGV4dC50ZXh0Q29udGVudCA9PT0gXCJUb2RheVwiKSB7XG4gICAgICB0aGlzLnZpZXcucmVuZGVyVGFza3ModGhpcy5tb2RlbC50b2RheVRhc2tBcnJheSk7XG4gICAgfSBcbiAgICBlbHNlIHtcbiAgICAgIHRoaXMudmlldy5yZW5kZXJUYXNrcyh0aGlzLm1vZGVsLmN1cnJlbnRQcm9qZWN0LmFycmF5KTtcbiAgICB9XG4gIH1cbiAgZGVsZXRlVGFza0Zyb21Nb2RlbChpZCkge1xuICAgIHRoaXMubW9kZWwudGFza0FycmF5ID0gdGhpcy5tb2RlbC50YXNrQXJyYXkuZmlsdGVyKGZ1bmN0aW9uIChlKSB7XG4gICAgICByZXR1cm4gZS5pZCAhPT0gcGFyc2VJbnQoaWQpO1xuICAgIH0pO1xuICAgIHRoaXMubW9kZWwuY3VycmVudFByb2plY3QuYXJyYXkgPSB0aGlzLm1vZGVsLmN1cnJlbnRQcm9qZWN0LmFycmF5LmZpbHRlcihcbiAgICAgIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHJldHVybiBlLmlkICE9PSBwYXJzZUludChpZCk7XG4gICAgICB9XG4gICAgKTtcbiAgICB0aGlzLm1vZGVsLnRvZGF5VGFza0FycmF5ID0gdGhpcy5tb2RlbC50b2RheVRhc2tBcnJheS5maWx0ZXIoXG4gICAgICBmdW5jdGlvbiAoZSkge1xuICAgICAgICByZXR1cm4gZS5pZCAhPT0gcGFyc2VJbnQoaWQpO1xuICAgICAgfVxuICAgICk7XG4gICAgaWYgKHRoaXMudmlldy5tYWluQ29udGFpbmVyVG9wVGV4dC50ZXh0Q29udGVudCA9PT0gXCJBbGwgVGFza3NcIikge1xuICAgICAgdGhpcy52aWV3LnJlbmRlclRhc2tzKHRoaXMubW9kZWwudGFza0FycmF5KTtcbiAgICB9IFxuICAgIGVsc2UgaWYgKHRoaXMudmlldy5tYWluQ29udGFpbmVyVG9wVGV4dC50ZXh0Q29udGVudCA9PT0gXCJUb2RheVwiKSB7XG4gICAgICB0aGlzLnZpZXcucmVuZGVyVGFza3ModGhpcy5tb2RlbC50b2RheVRhc2tBcnJheSk7XG4gICAgfSBcbiAgICBlbHNlIHtcbiAgICAgIHRoaXMudmlldy5yZW5kZXJUYXNrcyh0aGlzLm1vZGVsLmN1cnJlbnRQcm9qZWN0LmFycmF5KTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVNb2RlbFByaW9yaXR5KGlkLCB2aWV3UHJpb3JpdHkpIHtcbiAgICB0aGlzLm1vZGVsLnRhc2tBcnJheS5mb3JFYWNoKChlKSA9PiB7XG4gICAgICBpZiAocGFyc2VJbnQoaWQpID09PSBlLmlkKSB7XG4gICAgICAgIGUucHJpb3JpdHkgPSB2aWV3UHJpb3JpdHk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKHRoaXMudmlldy5tYWluQ29udGFpbmVyVG9wVGV4dC50ZXh0Q29udGVudCA9PT0gXCJBbGwgVGFza3NcIikge1xuICAgICAgdGhpcy52aWV3LnJlbmRlclRhc2tzKHRoaXMubW9kZWwudGFza0FycmF5KTtcbiAgICB9IFxuICAgIGVsc2UgaWYgKHRoaXMudmlldy5tYWluQ29udGFpbmVyVG9wVGV4dC50ZXh0Q29udGVudCA9PT0gXCJUb2RheVwiKSB7XG4gICAgICB0aGlzLnZpZXcucmVuZGVyVGFza3ModGhpcy5tb2RlbC50b2RheVRhc2tBcnJheSk7XG4gICAgfSBcbiAgICBlbHNlIHtcbiAgICAgIHRoaXMudmlldy5yZW5kZXJUYXNrcyh0aGlzLm1vZGVsLmN1cnJlbnRQcm9qZWN0LmFycmF5KTtcbiAgICB9XG4gIH1cbiAgdXBkYXRlTW9kZWxDb21wbGV0ZVN0YXR1cyhpZCwgc3RhdHVzKSB7XG4gICAgdGhpcy5tb2RlbC50YXNrQXJyYXkuZm9yRWFjaCgoZSkgPT4ge1xuICAgICAgaWYgKHBhcnNlSW50KGlkKSA9PT0gZS5pZCkge1xuICAgICAgICBlLmNvbXBsZXRlID0gc3RhdHVzO1xuICAgICAgICBjb25zb2xlLmxvZyhzdGF0dXMpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmICh0aGlzLnZpZXcubWFpbkNvbnRhaW5lclRvcFRleHQudGV4dENvbnRlbnQgPT09IFwiQWxsIFRhc2tzXCIpIHtcbiAgICAgIHRoaXMudmlldy5yZW5kZXJUYXNrcyh0aGlzLm1vZGVsLnRhc2tBcnJheSk7XG4gICAgfSBcbiAgICBlbHNlIGlmICh0aGlzLnZpZXcubWFpbkNvbnRhaW5lclRvcFRleHQudGV4dENvbnRlbnQgPT09IFwiVG9kYXlcIikge1xuICAgICAgdGhpcy52aWV3LnJlbmRlclRhc2tzKHRoaXMubW9kZWwudG9kYXlUYXNrQXJyYXkpO1xuICAgIH0gXG4gICAgZWxzZSB7XG4gICAgICB0aGlzLnZpZXcucmVuZGVyVGFza3ModGhpcy5tb2RlbC5jdXJyZW50UHJvamVjdC5hcnJheSk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlTW9kZWxDdXJyZW50UHJvamVjdChpZCkge1xuICAgIHRoaXMubW9kZWwuYXJyYXkuZm9yRWFjaCgoZSkgPT4ge1xuICAgICAgaWYgKHBhcnNlSW50KGlkKSA9PT0gZS5pZCkge1xuICAgICAgICB0aGlzLm1vZGVsLmN1cnJlbnRQcm9qZWN0ID0gZTtcbiAgICAgICAgcmV0dXJuIHRoaXMubW9kZWwuY3VycmVudFByb2plY3Q7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy52aWV3LnJlbmRlclRhc2tzKHRoaXMubW9kZWwuY3VycmVudFByb2plY3QuYXJyYXkpO1xuICAgIHRoaXMudmlldy5yZW5kZXJDdXJyZW50UHJvamVjdCh0aGlzLm1vZGVsLmN1cnJlbnRQcm9qZWN0KTtcbiAgfVxuXG4gIHVwZGF0ZU1vZGVsQWxsUHJvamVjdHMoKSB7XG4gICAgdGhpcy52aWV3LnJlbmRlckFsbFByb2plY3RzKHRoaXMubW9kZWwuYXJyYXkpO1xuICB9XG4gIHVwZGF0ZU1vZGVsQWxsVGFza3MoKSB7XG4gICAgdGhpcy52aWV3LnJlbmRlclRhc2tzKHRoaXMubW9kZWwudGFza0FycmF5KTtcbiAgfVxuXG4gIHVwZGF0ZU1vZGVsVG9kYXlUYXNrcygpIHtcbiAgICB0aGlzLm1vZGVsLnRvZGF5VGFza0FycmF5ID0gdGhpcy5tb2RlbC50YXNrQXJyYXkuZmlsdGVyKChlKSA9PiB7XG4gICAgICBjb25zdCBwYXJzZWREYXRlID0gcGFyc2VJU08oZS5kdWVEYXRlKTtcbiAgICAgIHJldHVybiBpc1RvZGF5KHBhcnNlZERhdGUpXG4gICAgfSk7XG4gICAgdGhpcy52aWV3LnJlbmRlclRhc2tzKHRoaXMubW9kZWwudG9kYXlUYXNrQXJyYXkpXG4gIH1cbn1cbmV4cG9ydCB7IENvbnRyb2xsZXIgfTtcbiIsImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVJZEZvckFycmF5RWxlbWVudHMoYXJyYXkpIHtcbiAgICBhcnJheS5mb3JFYWNoKChlKSA9PiB7XG4gICAgICAgIGUuaWQgPSBhcnJheS5pbmRleE9mKGUpXG4gICAgICB9KVxuICB9IiwiaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3QuanNcIjtcbmltcG9ydCB7IFRhc2sgfSBmcm9tIFwiLi90YXNrLmpzXCI7XG5cbmNsYXNzIE1vZGVsIHtcbiAgY29uc3RydWN0b3IoY3VycmVudFByb2plY3QpIHtcbiAgICB0aGlzLl9wcm9qZWN0ID0gbmV3IFByb2plY3QoKTtcbiAgICB0aGlzLl90YXNrID0gbmV3IFRhc2soKTtcbiAgICB0aGlzLl9hcnJheSA9IFtdO1xuICAgIHRoaXMuX3Rhc2tBcnJheSA9IFtdO1xuICAgIHRoaXMuX3RvZGF5VGFza0FycmF5ID0gW107XG4gICAgdGhpcy5fY3VycmVudFByb2plY3QgPSBjdXJyZW50UHJvamVjdDtcbiAgfVxuXG4gIGdldCBwcm9qZWN0KCkge1xuICAgIHJldHVybiB0aGlzLl9wcm9qZWN0O1xuICB9XG4gIHNldCBwcm9qZWN0KHVzZXJQcm9qZWN0KSB7XG4gICAgdGhpcy5fcHJvamVjdCA9IHVzZXJQcm9qZWN0O1xuICB9XG4gIGdldCB0YXNrKCkge1xuICAgIHJldHVybiB0aGlzLl90YXNrO1xuICB9XG4gIHNldCB0YXNrKHVzZXJUYXNrKSB7XG4gICAgdGhpcy5fdGFzayA9IHVzZXJUYXNrO1xuICB9XG4gIGdldCB0aXRsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGl0bGU7XG4gIH1cbiAgc2V0IHRpdGxlKHVzZXJUaXRsZSkge1xuICAgIHRoaXMuX3RpdGxlID0gdXNlclRpdGxlO1xuICB9XG4gIGdldCBhcnJheSgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXJyYXk7XG4gIH1cbiAgc2V0IGFycmF5KHVzZXJQcm9qZWN0QXJyYXkpIHtcbiAgICB0aGlzLl9hcnJheSA9IHVzZXJQcm9qZWN0QXJyYXk7XG4gIH1cbiAgZ2V0IHRhc2tBcnJheSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFza0FycmF5O1xuICB9XG4gIHNldCB0YXNrQXJyYXkodXNlclRhc2tBcnJheSkge1xuICAgIHRoaXMuX3Rhc2tBcnJheSA9IHVzZXJUYXNrQXJyYXk7XG4gIH1cbiAgZ2V0IHRvZGF5VGFza0FycmF5KCkge1xuICAgIHJldHVybiB0aGlzLl90b2RheVRhc2tBcnJheTtcbiAgfVxuICBzZXQgdG9kYXlUYXNrQXJyYXkodXNlclRvZGF5VGFza0FycmF5KSB7XG4gICAgdGhpcy5fdG9kYXlUYXNrQXJyYXkgPSB1c2VyVG9kYXlUYXNrQXJyYXk7XG4gIH1cbiAgZ2V0IGN1cnJlbnRQcm9qZWN0KCkge1xuICAgIHJldHVybiB0aGlzLl9jdXJyZW50UHJvamVjdDtcbiAgfVxuICBzZXQgY3VycmVudFByb2plY3QodXNlckN1cnJlbnRQcm9qZWN0KSB7XG4gICAgdGhpcy5fY3VycmVudFByb2plY3QgPSB1c2VyQ3VycmVudFByb2plY3Q7XG4gIH1cbn1cblxuZXhwb3J0IHsgTW9kZWwgfTtcbiIsImNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3RvcihpZCwgdGl0bGUgPSBcIkRlZmF1bHRcIikge1xuICAgIHRoaXMuX2lkID0gaWRcbiAgICB0aGlzLl90aXRsZSA9IHRpdGxlXG4gICAgdGhpcy5fYXJyYXkgPSBbXVxuICB9XG4gIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5faWQ7XG4gIH1cbiAgc2V0IGlkKHVzZXJpZCkge1xuICAgIHRoaXMuX2lkID0gdXNlcmlkO1xuICB9XG4gIGdldCB0aXRsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGl0bGU7XG4gIH1cbiAgc2V0IHRpdGxlKHVzZXJUaXRsZSkge1xuICAgIHRoaXMuX3RpdGxlID0gdXNlclRpdGxlO1xuICB9XG4gIGdldCBhcnJheSgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXJyYXk7XG4gIH1cbiAgc2V0IGFycmF5KHVzZXJBcnJheSkge1xuICAgIHRoaXMuX2FycmF5ID0gdXNlckFycmF5XG4gIH1cblxufVxuXG5leHBvcnQge1Byb2plY3R9IiwiY2xhc3MgVGFzayB7XG4gICAgY29uc3RydWN0b3IgKGlkLCB0aXRsZSwgcHJvamVjdCA9ICdkZWZhdWx0JywgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBub3RlcywgY29tcGxldGUgPSBmYWxzZSkge1xuICAgICAgICB0aGlzLl9pZCA9IGlkXG4gICAgICAgIHRoaXMuX3RpdGxlID0gdGl0bGVcbiAgICAgICAgdGhpcy5fcHJvamVjdCA9IHByb2plY3RcbiAgICAgICAgdGhpcy5fZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvblxuICAgICAgICB0aGlzLl9kdWVEYXRlID0gZHVlRGF0ZVxuICAgICAgICB0aGlzLl9wcmlvcml0eSA9IHByaW9yaXR5XG4gICAgICAgIHRoaXMuX25vdGVzID0gbm90ZXNcbiAgICAgICAgdGhpcy5fY29tcGxldGUgPSBjb21wbGV0ZVxuICAgIH1cblxuICAgIGdldCBpZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lkXG4gICAgfVxuICAgIHNldCBpZCh1c2VyaWQpIHtcbiAgICAgICAgdGhpcy5faWQgPSB1c2VyaWRcbiAgICB9XG5cbiAgICBnZXQgdGl0bGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl90aXRsZVxuICAgIH1cbiAgICBzZXQgdGl0bGUodXNlclRpdGxlKSB7XG4gICAgICAgIHRoaXMuX3RpdGxlID0gdXNlclRpdGxlXG4gICAgfVxuICAgIGdldCBwcm9qZWN0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcHJvamVjdFxuICAgIH1cbiAgICBzZXQgcHJvamVjdCh1c2VyUHJvamVjdCkge1xuICAgICAgICB0aGlzLl9wcm9qZWN0ID0gdXNlclByb2plY3RcbiAgICB9XG4gICAgZ2V0IGRlc2NyaXB0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVzY3JpcHRpb25cbiAgICB9XG4gICAgc2V0IGRlc2NyaXB0aW9uKHVzZXJEZXNjcmlwdGlvbikge1xuICAgICAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IHVzZXJEZXNjcmlwdGlvblxuICAgIH1cbiAgICBnZXQgZHVlRGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2R1ZURhdGVcbiAgICB9XG4gICAgc2V0IGR1ZURhdGUodXNlckR1ZURhdGUpIHtcbiAgICAgICAgdGhpcy5fZHVlRGF0ZSA9IHVzZXJEdWVEYXRlXG4gICAgfVxuICAgIGdldCBwcmlvcml0eSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ByaW9yaXR5XG4gICAgfVxuICAgIHNldCBwcmlvcml0eSh1c2VyUHJpb3JpdHkpIHtcbiAgICAgICAgdGhpcy5fcHJpb3JpdHkgPSB1c2VyUHJpb3JpdHlcbiAgICB9XG4gICAgZ2V0IG5vdGVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbm90ZXNcbiAgICB9XG4gICAgc2V0IG5vdGVzKHVzZXJOb3Rlcykge1xuICAgICAgICB0aGlzLl9ub3RlcyA9IHVzZXJOb3Rlc1xuICAgIH1cbiAgICBnZXQgY29tcGxldGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb21wbGV0ZVxuICAgIH1cbiAgICBzZXQgY29tcGxldGUoaW5wdXQpIHtcbiAgICAgICAgdGhpcy5fY29tcGxldGUgPSBpbnB1dFxuICAgIH1cblxufVxuXG5leHBvcnQge1Rhc2t9IiwiY2xhc3MgVmlldyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMubmV3VGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3LXRhc2tcIik7XG4gICAgdGhpcy50YXNrTW9kYWxDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stbW9kYWwtY29udGFpbmVyXCIpO1xuICAgIHRoaXMuZWRpdFRhc2tNb2RhbENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBcIiNlZGl0LXRhc2stbW9kYWwtY29udGFpbmVyXCJcbiAgICApO1xuICAgIHRoaXMuc3VibWl0VGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3VibWl0LXRhc2tcIik7XG4gICAgdGhpcy5lZGl0U3VibWl0VGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZWRpdC1zdWJtaXQtdGFza1wiKTtcbiAgICB0aGlzLnRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLWZvcm1cIik7XG4gICAgdGhpcy5vcGVuUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3Blbi1wcm9qZWN0XCIpO1xuICAgIHRoaXMuc3VibWl0UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3VibWl0LXByb2plY3RcIik7XG4gICAgdGhpcy5lZGl0U3VibWl0UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZWRpdC1zdWJtaXQtcHJvamVjdFwiKTtcbiAgICB0aGlzLnByb2plY3RNb2RhbENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBcIi5wcm9qZWN0LW1vZGFsLWNvbnRhaW5lclwiXG4gICAgKTtcbiAgICB0aGlzLmVkaXRQcm9qZWN0TW9kYWxDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgXCIuZWRpdC1wcm9qZWN0LW1vZGFsLWNvbnRhaW5lclwiXG4gICAgKTtcbiAgICB0aGlzLnByb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LWZvcm1cIik7XG4gICAgdGhpcy5wcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtdGl0bGVcIik7XG4gICAgdGhpcy5lZGl0UHJvamVjdFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlZGl0LXByb2plY3QtdGl0bGVcIik7XG4gICAgdGhpcy50YXNrVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RpdGxlXCIpO1xuICAgIHRoaXMuZWRpdFRhc2tUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZWRpdC10aXRsZVwiKTtcbiAgICB0aGlzLnRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGVzY3JpcHRpb25cIik7XG4gICAgdGhpcy5lZGl0VGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlZGl0LWRlc2NyaXB0aW9uXCIpO1xuICAgIHRoaXMudGFza0R1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2R1ZURhdGVcIik7XG4gICAgdGhpcy5lZGl0VGFza0R1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VkaXQtZHVlRGF0ZVwiKTtcbiAgICB0aGlzLnRhc2tOb3RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbm90ZXNcIik7XG4gICAgdGhpcy5lZGl0VGFza05vdGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlZGl0LW5vdGVzXCIpO1xuICAgIHRoaXMubWFpbkNvbnRhaW5lclRvcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1jb250YWluZXItdG9wXCIpO1xuICAgIHRoaXMubWFpbkNvbnRhaW5lclRvcFRleHRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgXCIubWFpbi1jb250YWluZXItdG9wLXRleHQtY29udGFpbmVyXCJcbiAgICApO1xuICAgIHRoaXMubWFpbkNvbnRhaW5lclRvcFRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgXCIubWFpbi1jb250YWluZXItdG9wLXRleHRcIlxuICAgICk7XG4gICAgdGhpcy5tYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLWNvbnRhaW5lclwiKTtcbiAgICB0aGlzLnByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0cy1jb250YWluZXJcIik7XG4gICAgdGhpcy5hbGxQcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWxsLXByb2plY3RzXCIpO1xuICAgIHRoaXMuYWxsVGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FsbC10YXNrc1wiKTtcbiAgICB0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyXCIpO1xuICAgIHRoaXMudGFza01vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLW1vZGFsXCIpO1xuICAgIHRoaXMudG9kYXlCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZGF5LWJ1dHRvblwiKTtcbiAgfVxuXG4gIHJlbmRlckFsbFByb2plY3RzKHByb2plY3RBcnJheSkge1xuICAgIHdoaWxlICh0aGlzLm1haW5Db250YWluZXIuZmlyc3RDaGlsZCkge1xuICAgICAgdGhpcy5tYWluQ29udGFpbmVyLnJlbW92ZUNoaWxkKHRoaXMubWFpbkNvbnRhaW5lci5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgcHJvamVjdEFycmF5LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIHRoaXMucHJvamVjdHNEaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHRoaXMucHJvamVjdHNEaXNwbGF5LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0c0Rpc3BsYXlcIik7XG4gICAgICB0aGlzLnByb2plY3RzRGlzcGxheS5zZXRBdHRyaWJ1dGUoXG4gICAgICAgIFwiZGF0YS1pZFwiLFxuICAgICAgICBwcm9qZWN0QXJyYXlbcHJvamVjdEFycmF5LmluZGV4T2YoZWxlbWVudCldLmlkLnRvU3RyaW5nKClcbiAgICAgICk7XG4gICAgICB0aGlzLm1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5wcm9qZWN0c0Rpc3BsYXkpO1xuICAgICAgdGhpcy5wcm9qZWN0c1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgdGhpcy5wcm9qZWN0c1RleHQuY2xhc3NMaXN0LmFkZChcInByb2plY3RzVGV4dFwiKTtcbiAgICAgIHRoaXMucHJvamVjdHNUZXh0LnRleHRDb250ZW50ID0gZWxlbWVudC50aXRsZTtcbiAgICAgIHRoaXMucHJvamVjdHNEaXNwbGF5LmFwcGVuZENoaWxkKHRoaXMucHJvamVjdHNUZXh0KVxuICAgICAgdGhpcy5wcm9qZWN0c0RlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICB0aGlzLnByb2plY3RzRGVsZXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0c0RlbGV0ZUJ1dHRvblwiKTtcbiAgICAgIHRoaXMucHJvamVjdHNEZWxldGVCdXR0b24udGV4dENvbnRlbnQgPSBcIkRlbFwiO1xuICAgICAgdGhpcy5wcm9qZWN0c0Rpc3BsYXkuYXBwZW5kQ2hpbGQodGhpcy5wcm9qZWN0c0RlbGV0ZUJ1dHRvbik7XG5cbiAgICAgIGNvbnN0IHJlbmRlckVkaXRQcm9qZWN0TW9kYWwgPSAoKCkgPT4ge1xuICAgICAgICB0aGlzLnByb2plY3RzRGlzcGxheS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09PSBcInByb2plY3RzVGV4dFwiKSB7XG4gICAgICAgICAgICB0aGlzLmVkaXRQcm9qZWN0VGl0bGUudmFsdWUgPVxuICAgICAgICAgICAgICBwcm9qZWN0QXJyYXlbcHJvamVjdEFycmF5LmluZGV4T2YoZWxlbWVudCldLnRpdGxlO1xuICAgICAgICAgICAgdGhpcy5lZGl0UHJvamVjdE1vZGFsQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJzaG93XCIpO1xuICAgICAgICAgICAgdGhpcy5lZGl0U3VibWl0UHJvamVjdC5zZXRBdHRyaWJ1dGUoXCJkYXRhLWlkXCIsIGUudGFyZ2V0LnBhcmVudE5vZGUuZGF0YXNldC5pZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pKCk7XG4gICAgfSk7XG4gIH1cblxuICByZW5kZXJDdXJyZW50UHJvamVjdChjdXJyZW50UHJvamVjdCkge1xuICAgIHdoaWxlICh0aGlzLm1haW5Db250YWluZXJUb3BUZXh0LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHRoaXMubWFpbkNvbnRhaW5lclRvcFRleHQucmVtb3ZlQ2hpbGQoXG4gICAgICAgIHRoaXMubWFpbkNvbnRhaW5lclRvcFRleHQuZmlyc3RDaGlsZFxuICAgICAgKTtcbiAgICB9XG4gICAgdGhpcy5tYWluQ29udGFpbmVyVG9wVGV4dC50ZXh0Q29udGVudCA9IGN1cnJlbnRQcm9qZWN0LnRpdGxlO1xuICB9XG5cbiAgcmVuZGVyUHJvamVjdHNTaWRlYmFyKHByb2plY3RBcnJheSkge1xuICAgIHdoaWxlICh0aGlzLnByb2plY3RzQ29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHRoaXMucHJvamVjdHNDb250YWluZXIucmVtb3ZlQ2hpbGQodGhpcy5wcm9qZWN0c0NvbnRhaW5lci5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgcHJvamVjdEFycmF5LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIHRoaXMucHJvamVjdHNTaWRlYmFyQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgIHRoaXMucHJvamVjdHNTaWRlYmFyQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0c1NpZGViYXJCdXR0b25cIik7XG4gICAgICB0aGlzLnByb2plY3RzU2lkZWJhckJ1dHRvbi50ZXh0Q29udGVudCA9IGVsZW1lbnQudGl0bGU7XG4gICAgICB0aGlzLnByb2plY3RzU2lkZWJhckJ1dHRvbi5zZXRBdHRyaWJ1dGUoXG4gICAgICAgIFwiZGF0YS1pZFwiLFxuICAgICAgICBwcm9qZWN0QXJyYXlbcHJvamVjdEFycmF5LmluZGV4T2YoZWxlbWVudCldLmlkXG4gICAgICApO1xuICAgICAgdGhpcy5wcm9qZWN0c0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnByb2plY3RzU2lkZWJhckJ1dHRvbik7XG4gICAgfSk7XG4gIH1cblxuICByZW5kZXJUYXNrcyh0YXNrQXJyYXkpIHtcbiAgICB3aGlsZSAodGhpcy5tYWluQ29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHRoaXMubWFpbkNvbnRhaW5lci5yZW1vdmVDaGlsZCh0aGlzLm1haW5Db250YWluZXIuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHRhc2tBcnJheS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICB0aGlzLnRhc2tzRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICB0aGlzLnRhc2tzRGlzcGxheS5jbGFzc0xpc3QuYWRkKFwidGFza3NEaXNwbGF5XCIpO1xuICAgICAgdGhpcy50YXNrc0Rpc3BsYXkuc2V0QXR0cmlidXRlKFxuICAgICAgICBcImRhdGEtaWRcIixcbiAgICAgICAgdGFza0FycmF5W3Rhc2tBcnJheS5pbmRleE9mKGVsZW1lbnQpXS5pZC50b1N0cmluZygpXG4gICAgICApO1xuICAgICAgdGhpcy5tYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMudGFza3NEaXNwbGF5KTtcbiAgICAgIHRoaXMudGFza3NUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHRoaXMudGFza3NUZXh0LmNsYXNzTGlzdC5hZGQoXCJ0YXNrc1RleHRcIik7XG4gICAgICB0aGlzLnRhc2tzVGV4dC50ZXh0Q29udGVudCA9IGVsZW1lbnQudGl0bGU7XG4gICAgICB0aGlzLnRhc2tzQ2hlY2tCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgdGhpcy50YXNrc0NoZWNrQm94LmNsYXNzTGlzdC5hZGQoXCJ0YXNrc0NoZWNrQm94XCIpO1xuICAgICAgdGhpcy50YXNrc0RlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICB0aGlzLnRhc2tzRGVsZXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJ0YXNrc0RlbGV0ZUJ1dHRvblwiKTtcbiAgICAgIHRoaXMudGFza3NEZWxldGVCdXR0b24udGV4dENvbnRlbnQgPSBcIkRlbFwiO1xuICAgICAgdGhpcy5kcm9wZG93bkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICB0aGlzLmRyb3Bkb3duQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJkcm9wZG93bkNvbnRhaW5lclwiKTtcbiAgICAgIHRoaXMuZHJvcGRvd24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgdGhpcy5kcm9wZG93bi5jbGFzc0xpc3QuYWRkKFwiZHJvcGRvd25cIik7XG4gICAgICB0aGlzLmRyb3Bkb3duQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgIHRoaXMuZHJvcGRvd25CdXR0b24uY2xhc3NMaXN0LmFkZChcImRyb3Bkb3duQnV0dG9uXCIpO1xuICAgICAgdGhpcy5kcm9wZG93bkJ1dHRvbi50ZXh0Q29udGVudCA9IFwiUHJpb3JpdHlcIjtcbiAgICAgIHRoaXMuZHJvcGRvd25Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHRoaXMuZHJvcGRvd25Db250ZW50LmNsYXNzTGlzdC5hZGQoXCJkcm9wZG93bkNvbnRlbnRcIik7XG4gICAgICB0aGlzLmRyb3Bkb3duQ29udGVudC5zZXRBdHRyaWJ1dGUoXG4gICAgICAgIFwiZGF0YS1kcm9wZG93blwiLFxuICAgICAgICB0YXNrQXJyYXlbdGFza0FycmF5LmluZGV4T2YoZWxlbWVudCldLmlkLnRvU3RyaW5nKClcbiAgICAgICk7XG4gICAgICB0aGlzLmxvd1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgICB0aGlzLmxvd1ByaW9yaXR5LnRleHRDb250ZW50ID0gXCJsb3dcIjtcbiAgICAgIHRoaXMubG93UHJpb3JpdHkuaHJlZiA9IFwiI1wiO1xuICAgICAgdGhpcy5sb3dQcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwibG93UHJpb3JpdHlcIik7XG4gICAgICB0aGlzLm1lZGl1bVByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgICB0aGlzLm1lZGl1bVByaW9yaXR5LnRleHRDb250ZW50ID0gXCJtZWRpdW1cIjtcbiAgICAgIHRoaXMubWVkaXVtUHJpb3JpdHkuaHJlZiA9IFwiI1wiO1xuICAgICAgdGhpcy5tZWRpdW1Qcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwibWVkaXVtUHJpb3JpdHlcIik7XG4gICAgICB0aGlzLmhpZ2hQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgICAgdGhpcy5oaWdoUHJpb3JpdHkudGV4dENvbnRlbnQgPSBcImhpZ2hcIjtcbiAgICAgIHRoaXMuaGlnaFByaW9yaXR5LmhyZWYgPSBcIiNcIjtcbiAgICAgIHRoaXMuaGlnaFByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJoaWdoUHJpb3JpdHlcIik7XG4gICAgICB0aGlzLnRhc2tzRGlzcGxheS5hcHBlbmRDaGlsZCh0aGlzLnRhc2tzQ2hlY2tCb3gpO1xuICAgICAgdGhpcy50YXNrc0Rpc3BsYXkuYXBwZW5kQ2hpbGQodGhpcy50YXNrc1RleHQpO1xuICAgICAgdGhpcy50YXNrc0Rpc3BsYXkuYXBwZW5kQ2hpbGQodGhpcy5kcm9wZG93bkNvbnRhaW5lcik7XG4gICAgICB0aGlzLnRhc2tzRGlzcGxheS5hcHBlbmRDaGlsZCh0aGlzLnRhc2tzRGVsZXRlQnV0dG9uKTtcbiAgICAgIHRoaXMuZHJvcGRvd25Db250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5kcm9wZG93bik7XG4gICAgICB0aGlzLmRyb3Bkb3duLmFwcGVuZENoaWxkKHRoaXMuZHJvcGRvd25CdXR0b24pO1xuICAgICAgdGhpcy5kcm9wZG93bi5hcHBlbmRDaGlsZCh0aGlzLmRyb3Bkb3duQ29udGVudCk7XG4gICAgICB0aGlzLmRyb3Bkb3duQ29udGVudC5hcHBlbmRDaGlsZCh0aGlzLmxvd1ByaW9yaXR5KTtcbiAgICAgIHRoaXMuZHJvcGRvd25Db250ZW50LmFwcGVuZENoaWxkKHRoaXMubWVkaXVtUHJpb3JpdHkpO1xuICAgICAgdGhpcy5kcm9wZG93bkNvbnRlbnQuYXBwZW5kQ2hpbGQodGhpcy5oaWdoUHJpb3JpdHkpO1xuXG4gICAgICBjb25zdCBhZGREcm9wZG93bkxpc3RlbmVycyA9ICgoKSA9PiB7XG4gICAgICAgIHRoaXMuZHJvcGRvd25CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gXCJkcm9wZG93bkJ1dHRvblwiKSB7XG4gICAgICAgICAgICBkb2N1bWVudFxuICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICBgW2RhdGEtZHJvcGRvd249XCIke3Rhc2tBcnJheVtcbiAgICAgICAgICAgICAgICAgIHRhc2tBcnJheS5pbmRleE9mKGVsZW1lbnQpXG4gICAgICAgICAgICAgICAgXS5pZC50b1N0cmluZygpfVwiXWBcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAuY2xhc3NMaXN0LnRvZ2dsZShcInNob3dEcm9wZG93blwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSkoKTtcbiAgICAgIGNvbnN0IGRpc3BsYXlDb21wbGV0ZVN0YXR1cyA9ICgoKSA9PiB7XG4gICAgICAgIGlmICh0YXNrQXJyYXlbdGFza0FycmF5LmluZGV4T2YoZWxlbWVudCldLmNvbXBsZXRlID09PSB0cnVlKSB7XG4gICAgICAgICAgdGhpcy50YXNrc1RleHQuc3R5bGUudGV4dERlY29yYXRpb24gPSBcImxpbmUtdGhyb3VnaFwiO1xuICAgICAgICAgIHRoaXMudGFza3NDaGVja0JveC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInNlYXNoZWxsXCI7XG4gICAgICAgIH1cbiAgICAgIH0pKCk7XG5cbiAgICAgIGNvbnN0IGRpc3BsYXlQcmlvcml0eVN0YXR1cyA9ICgoKSA9PiB7XG4gICAgICAgIHN3aXRjaCAodGFza0FycmF5W3Rhc2tBcnJheS5pbmRleE9mKGVsZW1lbnQpXS5wcmlvcml0eSkge1xuICAgICAgICAgIGNhc2UgXCJsb3dcIjpcbiAgICAgICAgICAgIHRoaXMuZHJvcGRvd25CdXR0b24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJncmVlblwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcIm1lZGl1bVwiOlxuICAgICAgICAgICAgdGhpcy5kcm9wZG93bkJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNmZmMxMDdcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCJoaWdoXCI6XG4gICAgICAgICAgICB0aGlzLmRyb3Bkb3duQnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiI2U0NGM1NVwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH0pKCk7XG4gICAgICBjb25zdCByZW5kZXJFZGl0VGFza01vZGFsID0gKCgpID0+IHtcbiAgICAgICAgdGhpcy50YXNrc0Rpc3BsYXkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gXCJ0YXNrc1RleHRcIikge1xuICAgICAgICAgICAgdGhpcy5lZGl0VGFza1RpdGxlLnZhbHVlID1cbiAgICAgICAgICAgICAgdGFza0FycmF5W3Rhc2tBcnJheS5pbmRleE9mKGVsZW1lbnQpXS50aXRsZTtcbiAgICAgICAgICAgIHRoaXMuZWRpdFRhc2tEZXNjcmlwdGlvbi52YWx1ZSA9XG4gICAgICAgICAgICAgIHRhc2tBcnJheVt0YXNrQXJyYXkuaW5kZXhPZihlbGVtZW50KV0uZGVzY3JpcHRpb247XG4gICAgICAgICAgICB0aGlzLmVkaXRUYXNrRHVlRGF0ZS52YWx1ZSA9XG4gICAgICAgICAgICAgIHRhc2tBcnJheVt0YXNrQXJyYXkuaW5kZXhPZihlbGVtZW50KV0uZHVlRGF0ZTtcbiAgICAgICAgICAgIHRoaXMuZWRpdFRhc2tOb3Rlcy52YWx1ZSA9XG4gICAgICAgICAgICAgIHRhc2tBcnJheVt0YXNrQXJyYXkuaW5kZXhPZihlbGVtZW50KV0ubm90ZXM7XG4gICAgICAgICAgICB0aGlzLmVkaXRUYXNrTW9kYWxDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInNob3dcIik7XG4gICAgICAgICAgICB0aGlzLmVkaXRTdWJtaXRUYXNrLnNldEF0dHJpYnV0ZShcbiAgICAgICAgICAgICAgXCJkYXRhLWlkXCIsXG4gICAgICAgICAgICAgIGUudGFyZ2V0LnBhcmVudE5vZGUuZGF0YXNldC5pZFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSkoKTtcbiAgICB9KTtcbiAgfVxuICByZW5kZXJOZXdQcm9qZWN0TW9kYWwoKSB7XG4gICAgdGhpcy5vcGVuUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgdGhpcy5wcm9qZWN0TW9kYWxDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInNob3dcIik7XG4gICAgfSk7XG4gIH1cblxuICByZW5kZXJOZXdUYXNrTW9kYWwoKSB7XG4gICAgdGhpcy5uZXdUYXNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICB0aGlzLnRhc2tNb2RhbENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwic2hvd1wiKTtcbiAgICB9KTtcbiAgfVxuXG4gIHNlbmRDb250cm9sbGVyUHJvamVjdERhdGEoYWRkUHJvamVjdFRvTW9kZWwpIHtcbiAgICB0aGlzLnN1Ym1pdFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBhZGRQcm9qZWN0VG9Nb2RlbCh0aGlzLnByb2plY3RUaXRsZS52YWx1ZSk7XG4gICAgICB0aGlzLnByb2plY3RGb3JtLnJlc2V0KCk7XG4gICAgICB0aGlzLnByb2plY3RNb2RhbENvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKTtcbiAgICAgIHRoaXMubmV3VGFzay5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcbiAgICB9KTtcbiAgfVxuXG4gIHNlbmRDb250cm9sbGVyRWRpdFByb2plY3REYXRhKGVkaXRQcm9qZWN0SW5Nb2RlbCkge1xuICAgIHRoaXMuZWRpdFN1Ym1pdFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBlZGl0UHJvamVjdEluTW9kZWwoZS50YXJnZXQuZGF0YXNldC5pZCwgdGhpcy5lZGl0UHJvamVjdFRpdGxlLnZhbHVlKTtcbiAgICAgIHRoaXMuZWRpdFByb2plY3RNb2RhbENvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKTtcbiAgICB9KTtcbiAgfVxuXG4gIHNlbmRDb250cm9sbGVyVGFza0RhdGEoYWRkVGFza1RvTW9kZWwpIHtcbiAgICB0aGlzLnN1Ym1pdFRhc2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBhZGRUYXNrVG9Nb2RlbChcbiAgICAgICAgdGhpcy50YXNrVGl0bGUudmFsdWUsXG4gICAgICAgIHRoaXMudGFza0Rlc2NyaXB0aW9uLnZhbHVlLFxuICAgICAgICB0aGlzLnRhc2tEdWVEYXRlLnZhbHVlLFxuICAgICAgICB0aGlzLnRhc2tOb3Rlcy52YWx1ZVxuICAgICAgKTtcbiAgICAgIHRoaXMudGFza0Zvcm0ucmVzZXQoKTtcbiAgICAgIHRoaXMudGFza01vZGFsQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpO1xuICAgIH0pO1xuICB9XG5cbiAgc2VuZENvbnRyb2xsZXJFZGl0VGFza0RhdGEoZWRpdFRhc2tJbk1vZGVsKSB7XG4gICAgdGhpcy5lZGl0U3VibWl0VGFzay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGVkaXRUYXNrSW5Nb2RlbChcbiAgICAgICAgZS50YXJnZXQuZGF0YXNldC5pZCxcbiAgICAgICAgdGhpcy5lZGl0VGFza1RpdGxlLnZhbHVlLFxuICAgICAgICB0aGlzLmVkaXRUYXNrRGVzY3JpcHRpb24udmFsdWUsXG4gICAgICAgIHRoaXMuZWRpdFRhc2tEdWVEYXRlLnZhbHVlLFxuICAgICAgICB0aGlzLmVkaXRUYXNrTm90ZXMudmFsdWVcbiAgICAgICk7XG4gICAgICB0aGlzLmVkaXRUYXNrTW9kYWxDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIik7XG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMubWFpbkNvbnRhaW5lclRvcFRleHQudGV4dENvbnRlbnQgPT09IFwiVG9kYXlcIiB8fFxuICAgICAgICB0aGlzLm1haW5Db250YWluZXJUb3BUZXh0LnRleHRDb250ZW50ID09PSBcIkFsbCBUYXNrc1wiXG4gICAgICApIHtcbiAgICAgICAgdGhpcy52aWV3Lm5ld1Rhc2suY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm5ld1Rhc2suY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBkZWxldGVQcm9qZWN0RnJvbVZpZXcoZGVsZXRlUHJvamVjdEZyb21Nb2RlbCkge1xuICAgIHRoaXMubWFpbkNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT09IFwicHJvamVjdHNEZWxldGVCdXR0b25cIikge1xuICAgICAgICBkZWxldGVQcm9qZWN0RnJvbU1vZGVsKHBhcnNlSW50KGUudGFyZ2V0LnBhcmVudE5vZGUuZGF0YXNldC5pZCkpO1xuICAgICAgICBlLnRhcmdldC5wYXJlbnROb2RlLnJlbW92ZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIGRlbGV0ZVRhc2tGcm9tVmlldyhkZWxldGVUYXNrRnJvbU1vZGVsKSB7XG4gICAgdGhpcy5tYWluQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gXCJ0YXNrc0RlbGV0ZUJ1dHRvblwiKSB7XG4gICAgICAgIGRlbGV0ZVRhc2tGcm9tTW9kZWwocGFyc2VJbnQoZS50YXJnZXQucGFyZW50Tm9kZS5kYXRhc2V0LmlkKSk7XG4gICAgICAgIGUudGFyZ2V0LnBhcmVudE5vZGUucmVtb3ZlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICB1cGRhdGVDb250cm9sbGVyUHJpb3JpdHkodXBkYXRlTW9kZWxQcmlvcml0eSkge1xuICAgIHRoaXMubWFpbkNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT09IFwibG93UHJpb3JpdHlcIikge1xuICAgICAgICB1cGRhdGVNb2RlbFByaW9yaXR5KFxuICAgICAgICAgIGUudGFyZ2V0LmNsb3Nlc3QoXCIudGFza3NEaXNwbGF5XCIpLmRhdGFzZXQuaWQsXG4gICAgICAgICAgXCJsb3dcIlxuICAgICAgICApO1xuICAgICAgfSBlbHNlIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT09IFwibWVkaXVtUHJpb3JpdHlcIikge1xuICAgICAgICB1cGRhdGVNb2RlbFByaW9yaXR5KFxuICAgICAgICAgIGUudGFyZ2V0LmNsb3Nlc3QoXCIudGFza3NEaXNwbGF5XCIpLmRhdGFzZXQuaWQsXG4gICAgICAgICAgXCJtZWRpdW1cIlxuICAgICAgICApO1xuICAgICAgfSBlbHNlIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT09IFwiaGlnaFByaW9yaXR5XCIpIHtcbiAgICAgICAgdXBkYXRlTW9kZWxQcmlvcml0eShcbiAgICAgICAgICBlLnRhcmdldC5jbG9zZXN0KFwiLnRhc2tzRGlzcGxheVwiKS5kYXRhc2V0LmlkLFxuICAgICAgICAgIFwiaGlnaFwiXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICB1cGRhdGVDb250cm9sbGVyQ29tcGxldGVTdGF0dXModXBkYXRlTW9kZWxDb21wbGV0ZVN0YXR1cykge1xuICAgIHRoaXMubWFpbkNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGlmIChcbiAgICAgICAgZS50YXJnZXQuY2xhc3NOYW1lID09PSBcInRhc2tzQ2hlY2tCb3hcIiAmJlxuICAgICAgICBlLnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPT09IFwiXCJcbiAgICAgICkge1xuICAgICAgICB1cGRhdGVNb2RlbENvbXBsZXRlU3RhdHVzKFxuICAgICAgICAgIGUudGFyZ2V0LmNsb3Nlc3QoXCIudGFza3NEaXNwbGF5XCIpLmRhdGFzZXQuaWQsXG4gICAgICAgICAgdHJ1ZVxuICAgICAgICApO1xuICAgICAgfSBlbHNlIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT09IFwidGFza3NDaGVja0JveFwiKSB7XG4gICAgICAgIHVwZGF0ZU1vZGVsQ29tcGxldGVTdGF0dXMoXG4gICAgICAgICAgZS50YXJnZXQuY2xvc2VzdChcIi50YXNrc0Rpc3BsYXlcIikuZGF0YXNldC5pZCxcbiAgICAgICAgICBmYWxzZVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgdXBkYXRlQ29udHJvbGxlckN1cnJlbnRQcm9qZWN0KHVwZGF0ZU1vZGVsQ3VycmVudFByb2plY3QpIHtcbiAgICB0aGlzLnByb2plY3RzQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gXCJwcm9qZWN0c1NpZGViYXJCdXR0b25cIikge1xuICAgICAgICBjb25zb2xlLmxvZyhcImFzZGZcIik7XG4gICAgICAgIHVwZGF0ZU1vZGVsQ3VycmVudFByb2plY3QoZS50YXJnZXQuZGF0YXNldC5pZCk7XG4gICAgICAgIHRoaXMubmV3VGFzay5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHVwZGF0ZUNvbnRyb2xsZXJBbGxQcm9qZWN0cyh1cGRhdGVNb2RlbEFsbFByb2plY3RzKSB7XG4gICAgdGhpcy5hbGxQcm9qZWN0cy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIHRoaXMubWFpbkNvbnRhaW5lclRvcFRleHQudGV4dENvbnRlbnQgPSBcIkFsbCBQcm9qZWN0c1wiO1xuICAgICAgdGhpcy5uZXdUYXNrLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuICAgICAgdXBkYXRlTW9kZWxBbGxQcm9qZWN0cygpO1xuICAgIH0pO1xuICB9XG5cbiAgdXBkYXRlQ29udHJvbGxlckFsbFRhc2tzKHVwZGF0ZU1vZGVsQWxsVGFza3MpIHtcbiAgICB0aGlzLmFsbFRhc2tzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgdGhpcy5tYWluQ29udGFpbmVyVG9wVGV4dC50ZXh0Q29udGVudCA9IFwiQWxsIFRhc2tzXCI7XG4gICAgICB0aGlzLm5ld1Rhc2suY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG4gICAgICB1cGRhdGVNb2RlbEFsbFRhc2tzKCk7XG4gICAgfSk7XG4gIH1cblxuICB1cGRhdGVDb250cm9sbGVyVG9kYXlUYXNrcyh1cGRhdGVNb2RlbFRvZGF5VGFza3MpIHtcbiAgICB0aGlzLnRvZGF5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgdGhpcy5tYWluQ29udGFpbmVyVG9wVGV4dC50ZXh0Q29udGVudCA9IFwiVG9kYXlcIjtcbiAgICAgIHRoaXMubmV3VGFzay5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcbiAgICAgIHVwZGF0ZU1vZGVsVG9kYXlUYXNrcygpO1xuICAgIH0pO1xuICB9XG5cbiAgY2xpY2tPdXRzaWRlQ2xvc2VNb2RhbCgpIHtcbiAgICB0aGlzLm1haW5Db250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBpZiAoIWUudGFyZ2V0LmNsb3Nlc3QodGhpcy50YXNrTW9kYWwpKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiYXNkZlwiKTtcbiAgICAgICAgdGhpcy50YXNrTW9kYWxDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IHsgVmlldyB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJcbmltcG9ydCB7Q29udHJvbGxlcn0gZnJvbSAnLi9jb250cm9sbGVyLmpzJ1xuXG5jb25zdCBhcHAgPSBuZXcgQ29udHJvbGxlcigpXG5hcHAudmlldy5yZW5kZXJOZXdQcm9qZWN0TW9kYWwoKTtcbmFwcC52aWV3LnJlbmRlck5ld1Rhc2tNb2RhbCgpO1xuYXBwLmluaXREZWZhdWx0UHJvamVjdCgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==