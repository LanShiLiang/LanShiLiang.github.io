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
  dropRight: function (array, n) {
    if (array.length <= 0 || !Array.isArray(array) || !array) {
      return []
    }
    n === undefined ? n = 1 : n = parseInt(n)
    return array.slice(0, -n)
  },
  dropRightWhile: function () {

  },
  dropWhile: function () {

  },
  fill: function () {

  },
  findIndex: function () {

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
  }















}
