// 已验证

/**
 * [arrayEqual 判断两组数组是否相同]
 * @param  {Array} arr1 
 * @param  {Array} arr2 
 * @return {Boolean}
 */

export function arrayEqual (arr1, arr2) {
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
'Boolean Number String Function Array Date RegExp Object Error'.split(' ').map(function (item, index) {
  classType2[`[object ${item}]`] = item.toLowerCase()
})
/**
 * [判断对象类型]
 * @param  {anything} obj 
 * @return {anything}
 */
export function type (obj) {
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
export function unique (arr) {
  let res = array.filter(function (item, index, array) {
    return array.indexOf(item) === index
  })
  return res
}
/**
 * [去除数组中重复内容并排序]
 * @param  {Array} arr
 * @return {Array}
 */
export function uniqueSort (arr) {
  let res = array.concat().sort().filter(function (item, index, array) {
    return array.indexOf(item) === index
  })
  return res
}