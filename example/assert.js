// 字符
console.assert('1' == new String('1'), "'1' == new String('1')") // true
console.assert('1' == new String(1), "'1' == new String(1)") // true
console.assert('1' === new String('1'), "'1' !== new String('1')") // false
console.assert('1' === new String('1'), "'1' !== new String(1)") // false
console.assert(new String('1') == new String(1), "new String('1') != new String(1)") // false

// null
console.assert(null == null, "null != null") // true
console.assert(null === null, "null !== null") // true

// undefined
console.assert(undefined == undefined, "undefined != undefined") // true
console.assert(undefined === undefined, "undefined !== undefined") // true

// NaN
console.assert(NaN == NaN, "NaN != NaN") // false
console.assert(NaN === NaN, "NaN !== NaN") // false

// RegExp
console.assert(/\d/ == /\d/, "/\\d/ != /\\d/") // false
console.assert(/\d/ == new RegExp('\\d'), "/\\d/ != new RegExp('\\\\d')") // false
console.assert(/\d/ === /\d/, "/\\d/ !== /\\d/") // false

// Object
console.assert({} == {}, "{} != {}") // false
console.assert({} === {}, "{} !== {}") // false