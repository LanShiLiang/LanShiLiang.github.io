var lanshiliang = {
  /**
   *  * 用户名不要以数字开头，以数字开头的同学请至github更改用户名，不用重新注册
   * 文件名中最好不要包含中划线，如果包含中划线，请将中划线换为下划线然后做为变量名及文件名的前缀
   * 文件名(<username>-lodash.js)全小写，用户名与'lodash'之间的分隔符为中划线
   * 文件中的变量名全小写: var foobar = {chunk: function(){}}
   */

  /**
   chunk按size分割数组 用slice切割
   */
  chunk: function (array, size) {
    size = parseInt(size)
    let length = array == null ? 0 : array.length
    if (!length || size < 1) {
      return []
    }
    const result = new Array(Math.ceil(length / size))
    let index = 0
    let resindex = 0
    while (index < length) {
      result[resindex++] = array.slice(index, index += size)
    }
    return result
  },
  compact: function (array) {
    if (!array || !Array.isArray(array) || array.length <= 0) {
      return [];
    }
    let result = []
    for (let i = 0; i < array.length; i++) {
      if (array[i]) {
        result.push(array[i])
      }
    }
    return result
  },

  difference: function (array, ...val) {
    if (array.length <= 0 || !Array.isArray(array) || !array) {
      return []
    }
    let map = new Map();
    val = [].concat(...val)
    val.forEach(n => map[n] = true)
    return array.filter(n => !(n in map))
  },

  drop: function (array, n) {
    if (array.length <= 0 || !Array.isArray(array) || !array) {
      return []
    }
    n === undefined ? n = 1 : n = parseInt(n)
    return array.slice(n)
  },
  dropRight: function (array, n = 1) {
    return array.length > n ? array.slice(0, array.length - n) : [];
  },
  dropRightWhile: function () {

  },
  dropWhile: function () {

  },
  fill: function (array, value, start = 0, end = array.length) {
    for (start; start < end; start++) {
      array[start] = value
    }
    return array
  },
  flatten: function (array) {
    return array.flat(1)
  },
  flattenDeep: function flattenDeep(array) {
    return [].concat(...array.map(n => Array.isArray(n) ? flattenDeep(n) : n))
  },
  flattenDepth: function (array, depth = 1) {
    return array.flat(depth)
  },
  head: function (array) {
    let arr = array
    return arr.shift()
  },
  indexOf: function (array, value, fromIndex = 0) {
    let index = fromIndex >= 0 ? fromIndex : fromIndex + array.length
    for (let i = index; i < array.length; i++) {
      if (array[i] == value || array[i] != array[i] && value != value) return i
    }
    return -1
  },
  initial: function (array) {
    return array.slice(0, array.length - 1)
  },
  intersection: function (...array) {
    // 二维数组 对象 reduce
    if (array.length == 1) return array
    let map = new Map()
    let result = []
    array[0].forEach(n => map.set(n, false))
    for (let i = 1; i < array.length; i++) {
      array[i].forEach(n => map.has(n) && map.set(n, true))
    }
    map.forEach((value, key) => value && result.push(key))
    return result
  },
  join: function (array, separator = ',') {
    return array.join(separator)
  },
  last: function (array) {
    let arr = array
    return arr.pop()
  },
  lastIndexOf: function (array, value, fromIndex = array.length - 1) {
    let arr = array.slice(0, fromIndex + 1)
    for (let i = arr.length - 1; i >= 0; i--) {
      if (arr[i] == value || arr[i] != arr[i] && value != value)
        return i
    }
    return -1
  },
  nth: function (array, n = 0) {
    if (n >= 0) {
      return array[n]
    }
    return array[array.length + n]
  },
  pull: function (array, ...values) {
    for (let i in values) {
      if (array.indexOf(values[i]) != -1) {
        for (let d in array) {
          if (array[d] == values[i])[
            array.splice(d, 1)
          ]
        }
      }
    }
    return array
  },
  pullAll: function (array, values) {
    for (let i in values) {
      if (array.indexOf(values[i]) != -1) {
        for (let d in array) {
          if (array[d] == values[i])[
            array.splice(d, 1)
          ]
        }
      }
    }
    return array
  },
  reverse: function (array) {
    for (let i = 0, j = array.length - 1; i < j; i++, j--) {
      let cache = array[i]
      array[i] = array[j]
      array[j] = cache
    }
    return array
  },
  sortedIndex: function (array, value) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] >= value) {
        return i
      }
    }
    return array.length
  },
  sortedIndexOf: function (array, key) {
    let start = 0;
    let end = array.length - 1
    for (let i = 0; i < array.length; i++) {
      if (array[i] >= key) {
        return i
      }
    }
    return array.length
  },
  sortedLastIndex: function (array, value) {
    for (let i = array.length - 1; i > 0; i = i - 1) {
      if (array[i] == value) {
        return i + 1
      }
    }
    return 0
  },

  tail: function (Array) {
    let arr = Array
    arr.shift()
    return arr
  },
  take: function (Array, n = 1) {
    let arr = Array
    return arr.slice(0, n)
  },
  takeRight: function (array, n = 1) {
    if (n <= 0) {
      return []
    }
    return array.slice(-n)
  },
  union: function (...array) {
    let key = [].concat(...array)
    let map = new Map()
    key.forEach(n => map.set(n, true))
    let result = []
    map.forEach((value, key) => value && result.push(key))
    return result
  },
  uniq: function (array) {
    let map = new Map()
    let result = []
    array.forEach(n => map.set(n, true))
    map.forEach((value, key) => value && result.push(key))
    return result
  },
  unzip: function (array) {
    let length = array[0].length
    for (let i = 1; i < array.length; i++) {
      length = Math.max(length, array[i].length)
    }
    let result = new Array()
    for (let i = 0; i < length; i++) {
      result[i] = []
    }
    for (let i in result) {
      for (let d = 0; d < array.length; d++) {
        result[i].push(array[d][i])
      }
    }
    return result
  },
  without: function (array, ...values) {
    let value = [].concat(...values)
    for (let index = 0; index < value.length; index++) {
      for (let d = 0; d < array.length; d++) {
        if (value[index] == array[d]) {
          array.splice(d, 1)
          d--
        }
      }
    }
    return array
  },
  xor: function (...array) {
    let result = []
    let map = new Map()
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array[i].length; j++) {
        if (map[array[i][j]]) {
          map[array[i][j]] = 2
        } else {
          map[array[i][j]] = 1
        }
      }
    }
    for (let index in map) {
      if (map[index] == 1) {
        result.push(+index)
      }
    }
    return result
  },
  zip: function (...array) {
    let arr = [...array]
    let length = arr[0].length
    for (let i = 1; i < arr.length; i++) {
      length = Math.max(length, arr[i].length)
    }
    let result = new Array()
    for (let i = 0; i < length; i++) {
      result[i] = []
    }
    for (let i in result) {
      for (let d = 0; d < arr.length; d++) {
        result[i].push(arr[d][i])
      }
    }
    return result
  },
  zipObject: function (props = [], values = []) {
    let obj = {}
    for (let i in props) {
      obj[props[i]] = values[i]
    }
    return obj
  },
  zipObjectDeep: function (props = [], values = []) {
    let result = {}
    for (let i in props) {
      this.set(result, props[i], values[i])
    }
    return result
  },
  isNull: function (val) {
    if (val === null) {
      return true
    } else {
      return false
    }
  },
  isNaN: function (val) {
    if (typeof (val) == 'object') {
      return val.toString() == 'NaN'
    }
    if (val !== val) {
      return true
    } else {
      return false
    }
  },
  pullAt: function (array, idx) {
    let newArr = []
    let offSet = 0
    for (let i in idx) {
      newArr.push(array[idx[i] - offSet])
      array.splice(idx[i] - offSet, 1)
      offSet++
    }
    return newArr
  },
  countBy: function (collection, iteratee = _.identity) {
    let map = {}
    for (let i in collection) {
      if (typeof (iteratee) == "function") {
        let key = iteratee(collection[i])
        if (map[key] == undefined) {
          map[key] = 1
        }
        map[key]++
      }
      if (typeof iteratee == "string") {
        let key = collection[i][iteratee]
        if (map[key] == undefined) {
          map[key] = 1
        }
        map[key]++
      }
    }
    return map
  },
  castArray: function (...value) {
    if (!value.length) {
      return []
    }
    return Array.isArray(value) ? value : [value]
  },
  find: function (col, func, idx = 0) {
    let p = 0
    for (let i of col) {
      if (p++ >= idx) {
        if (Object.prototype.toString.call(func) == "[object Function]") {
          if (func(i)) {
            return i
          }
        } else if (Object.prototype.toString.call(func) == "[object Array]") {
          if (i[func[0]] == func[1]) {
            return i
          }
        } else if (Object.prototype.toString.call(func) == "[object Object]") {
          let tmp = true
          for (let att in func) {
            if (func[att] !== i[att]) {
              tmp = false
              continue
            }
          }
          if (tmp) {
            return i
          }
        } else {
          if (i.hasOwnProperty(func)) {
            return i
          }
        }
      }
    }
  },
  includes: function (collection, value, Index = 0) {
    if (Array.isArray(collection)) {
      for (let i = Index; i < collection.length; i++) {
        if (collection[i] == value) return true
      }
      return false
    }
    if (typeof (collection) == "string") {
      let newCol = collection.slice(Index)
      return newCol.indexOf(value) > -1
    }
    if (typeof (collection) == "object") {
      for (let i in collection) {
        if (collection[i] == value)
          return true
      }
    }
    return false
  },
  sample: function (collection) {
    /*得到一个两数之间的随机整数，包括两个数在内*/
    let min = 0
    let max = collection.length - 1
    return collection[Math.trunc(Math.random() * (max - min + 1)) + min]
  },
  size: function (collection) {
    if (Array.isArray(collection) || typeof (collection) == "string") {
      return collection.length
    }

    if (typeof (collection) == "object") {
      var arr = Object.keys(collection);
      return arr.length
    }
  },
  eq: function (value, other) {
    if (value != value && other != other) {
      return true
    }
    return value === other
  },
  gt: function (value, other) {
    return value > other
  },
  gte: function (value, other) {
    return value >= other
  },
  clone: function (value) {
    let result = value
    return result
  },
  cloneDeep: function (value) {
    let preResult = JSON.stringify(value)
    let result = JSON.parse(preResult)
    return result
  },
  cloneDeepWith: function (value) {
    let result;
    if (typeof value == "object") {
      if (Array.isArray(value)) {
        for (let i in value) {
          result[i].push(cloneDeepWith(value[i]))
        }
      } else if (value == null) {
        result = null
      } else if (target.constructor === RegExp) {
        result = value
      } else {
        result = {}
        for (let i in target) {
          result[i] = cloneDeepWith(value[i])
        }
      }
    } else {
      value = target
    }
    return value
  },
  isArguments: function (arg) {
    if (!Array.isArray(arg) && typeof (arg) == 'object' && arg.length != undefined) {
      return true
    }
    return false
  },
  isArray: function (arr) {
    if (Array.isArray(arr)) {
      return true
    }
    return false
  },
  isArrayBuffer: function (value) {
    if (value.constructor === ArrayBuffer) {
      return true
    } else {
      return false
    }
  },
  isArrayLike: function (value) {
    if (value &&
      isFinite(value.length) &&
      value.length >= 0 &&
      value.length === Math.trunc(value.length)
    )
      return true
    else
      return false
  },
  isArrayLikeObject: function (value) {
    if (value &&
      typeof value !== "string" &&
      isFinite(value.length) &&
      value.length >= 0 &&
      value.length === Math.trunc(value.length)
    )
      return true
    else
      return false
  },
  isEmpty: function (value) {
    for (let i in value) {
      return false
    }
    return true
  },
  isBoolean: function (value) {
    return Object.prototype.toString.call(value) == '[object Boolean]'
  },
  isDate: function (value) {
    return Object.prototype.toString.call(value) == '[object Date]'
  },
  isFuncton: function (value) {
    return Object.prototype.toString.call(value) == '[object Function]'
  },
  isNumber: function (value) {
    return value.constructor == Number
  },
  isObject: function (value) {
    return Object.prototype.toString.call((value) == "[object Object]")
  },
  isRegExp: function (value) {
    return value.constructor == RegExp
  },
  isSafeInteger: function (value) {
    return Number.isSafeInteger(value)
  },
  isSet: function (value) {
    return value.constructor == Set
  },
  isString: function (value) {
    return typeof value == "string"
  },
  isSymbol: function (value) {
    return Object.prototype.toString.call(value) == "[object Symbol]"
  },
  isWeakMap: function (value) {
    return Object.prototype.toString.call(value) == "[object WeakMap]"
  },
  isWeakSet: function (value) {
    return Object.prototype.toString.call(value) == "[object WeakSet]"
  },
  isUndefiend: function (value) {
    return value === undefined
  },
  lt: function (value, other) {
    return value < other
  },
  lte: function (value, other) {
    return value <= other
  },
  toArray: function (value) {
    let result = []
    for (let i in value) {
      result.push(value[i])
    }
    return result
  },
  toFinite: function (value) {
    const MAX_INTEGER = 1.7976931348623157e+308
    if (!value) {
      return value === 0 ? value : 0
    }
    value = Number(value)
    if (value === Infinity || value === -Infinity) {
      const sign = value < 0 ? -1 : 1
      return sign * MAX_INTEGER
    }
    return value === value ? value : 0
  },
  add: function (augend, addend) {
    return augend + addend
  },
  divide: function (dividend, divisor) {
    return dividend / divisor
  },
  max: function (value) {
    if (!value || value.length === 0) {
      return undefined
    }
    let result = -Infinity
    for (let i = 0; i < value.length; i++) {
      if (result < value[i]) {
        result = value[i]
      }
    }
    return result
  },
  ceil: function (v, p = 0) {
    if (p === 0) {
      return Math.ceil(v)
    } else {
      return Math.ceil(v * 10 ** p) / 10 ** p
    }
  },
  mean: function (array) {
    return array.reduce((a, b) => a + b) / array.length
  },
  min: function (value) {
    if (!value || value.length === 0) {
      return undefined
    }
    let result = Infinity
    for (let i = 0; i < value.length; i++) {
      if (result > value[i]) {
        result = value[i]
      }
    }
    return result
  },
  sum: function (array) {
    return array.reduce((a, b) => a + b)
  },
  property: function (str) {
    return function (obj) {
      return obj[str]
    }
  },
  isMatch: function (obj, src) {
    for (let i in src) {
      if (src[i] !== obj[i]) {
        return false
      }
    }
    return true
  },
  matches: function (target) {
    return function (obj) {
      for (let key in target) {
        if (obj[key] != target[key]) {
          return false
        }
      }
      return true
    }
  },
  matchesProperty: function (ary) {
    return matches(fromPairs(chunk(ary, 2)))
  },
  fromPairs: function (ary) {
    let res = {}
    res = Object.fromEntries(ary) //键值数组转对象
    return res
  },
  filter: function (arr, predicate) {
    let result = []
    if (Array.isArray(predicate)) {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i][predicate[0]] == predicate[1]) result.push(arr[i])
      }
      return result
    }
    let test = predicate
    if (typeof predicate === "string") {
      test = it => it[predicate]
    } else if (typeof predicate === "object") {
      test = it => {
        for (let key in predicate) {
          if (predicate[key] !== it[key]) {
            return false
          }
        }
        return true
      }
    }

    for (let i = 0; i < arr.length; i++) {
      if (test(arr[i], i)) {
        result.push(arr[i])
      }
    }
    return result
  },
  before: function (n, func) {
    let i = 0
    let result
    return function (...args) {
      if (i < n) {
        i++
        result = func(...args)
      }
      return result
    }
  },
  after: function (n, func) {
    let i = 0
    return function (...args) {
      i++
      if (i > n) {
        return func(...args)
      }
    }
  },
  ary: function (func, n = func.length) { //[n = func.length] 表示可以不传
    return function (...args) {
      return func(...args.slice(0, n))
    }
  },
  unary: function (func) {
    return function (arg) {
      return func(arg)
    }
  },
  // unary可以解决map(parseInt)问题 => ['1','2'].map(unary(parseInt))
  flip: function (func) {
    return function (...args) {
      return func(...args.reverse())
    }
  },
  negate: function (predicate) {
    return function (...args) {
      return !func(...args)
    }
  },
  reject: function (ary, test) {
    return filter(ary, negate(test))
  },
  every: function (ary, test) {
    for (let i = 0; i < test.length; i++) {
      if (!test(test[i])) {
        return false
      }
    }
    return true
  },
  some: function (ary, test) {
    for (let i = 0; i < test.length; i++) {
      if (fn(test[i])) {
        return true
      }
    }
    return false
  },
  spread: function (func) { //优化apply 展开运算符
    return function (ary) {
      return func(...ary)
    }
  },
  bind: function (f, ...fiedArgs) {
    return function bound(...args) {
      let copy = fixedArgs.slice()
      let j = 0
      for (i; i < copy.length; i++) {
        if (copy[i] === null) {
          copy[i] = args[j++]
        }
      }
      while (j < args.length) {
        copy.push(args[j++])
      }
      return f(...copy)
    }
  },
  reduce: function (collection, iteratee = _.identity, accumulator) {
    let cur = accumulator
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        if (cur == null) {
          cur = collection[i]
          continue
        }
        cur = iteratee(cur, collection[i])
      }
    } else {
      for (let i in collection) {
        if (cur == null) {
          cur = {
            i: collection[i]
          }
          continue
        }
        cur = iteratee(cur, collection[i], i)
      }
    }

    return cur

  }









}
