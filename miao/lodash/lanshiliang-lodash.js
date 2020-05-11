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
  }
  ,
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
          if (array[d] == values[i]) [
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
          if (array[d] == values[i]) [
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
    } return array.length
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
    } return 0
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
        result[i].push(arr[d][i])
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
  }
  ,
  zipObject: function (props = [], values = []) {
    let obj = {}
    for (let i in props) {
      obj[props[i]] = values[i]
    }
    return obj
  },

  isNull: function (val) {
    if (val === null) {
      return true
    } else {
      return false
    }
  },
  isNaN: function (val) {
    if (val !== val || isNaN(val)) {
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
  }














}
