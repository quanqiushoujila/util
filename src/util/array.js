// 已验证

/**
 * [arrayEqual 判断两组数组是否相同]
 * @param  {Array} arr1 
 * @param  {Array} arr2 
 * @return {Boolean}
 */

export function arrayEqual(arr1, arr2) {
  if (arr1 === arr2) {
    return true
  }
  if (arr1.length !== arr2.length) {
    return false
  }
  for (let i = 0, len = arr1.length; i < len; i++) {
    if (arr1[i] !== arr2[i]) {
      return false
    }
  }
  return true
}

let classType2 = {}
'Boolean Number String Function Array Date RegExp Object Error'.split(' ').map(function(item, index) {
  classType2[`[object ${item}]`] = item.toLowerCase()
})
/**
 * [判断对象类型]
 * @param  {anything} obj 
 * @return {anything}
 */
export function type(obj) {
  if (obj == null) {
    return obj + ''
  }
  return typeof obj === 'object' || typeof obj === 'function' ? classType2[Object.prototype.toString.call(obj)] : typeof obj
}
/**
 * [去除数组中重复内容]
 * @param  {Array} arr
 * @return {Array}
 */
export function unique(arr) {
  let res = array.filter(function(item, index, array) {
    return array.indexOf(item) === index
  })
  return res
}
/**
 * [去除数组中重复内容并排序]
 * @param  {Array} arr
 * @return {Array}
 */
export function uniqueSort(arr) {
  let res = array.concat().sort().filter(function(item, index, array) {
    return array.indexOf(item) === index
  })
  return res
}

/**
 * [判断是否是Window对象]
 * @param  {anything}  obj 
 * @return {Boolean}
 */
function isWindow(obj) {
  return null != obj && obj === obj.window
}

/**
 * [判断是否是符合条件的类数组对象]
 * @param  {anything}  obj 
 * @return {Boolean}
 */
function isArrayLike(obj) {
  var length = !!obj && 'length' in obj && obj.length
  var typeRes = type(obj)
  if (typeRes === 'function' || isWindow(obj)) {
    return false
  }
  return typeRes === 'array' || length === 0 || typeof length === 'number' && length > 0 && (length - 1) in obj
}
/**
 * [求最大数]
 * @param  {Array} arr
 * @return {String}
 */
function max(arr) {
  return arr.sort()[arr.length - 1]
}
/**
 * [求最小数]
 * @param  {Array} arr
 * @return {String}
 */
function min(arr) {
  return arr.sort()[0]
}

/**
 * [each循环]
 * @param  {Anything}   obj     
 * @param  {Function} callback 
 */
function each(obj, callback) {
  if (isArrayLike(obj)) {
    for (let i = 0, len = obj.length; i < len; i++) {
      if (callback.call(obj[i], i, obj[i]) === false) {
        break
      }
    }
  } else {
    for (let i in obj) {
      if (callback.call(obj[i], i, obj[i]) === false) {
        break
      }
    }
  }
}