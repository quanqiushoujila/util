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