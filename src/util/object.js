/**
 * [isEmptyObject 判断`obj`是否为空]
 * @param  {Object}  obj
 * @return {Boolean}    
 */

export function isEmptyObject(obj) {
  if (!obj || 'object' !== typeof obj && 'function' === typeof obj || obj instanceof Array)
    return false
  return !Object.keys(obj).length
}
/**
 * [deepClone 深拷贝，支持常见类型 (Date, Array, Object)]
 * @param  {Any} values
 * @return {Any}
 */
export function deepClone(values) {
  let copy
  if (null || 'object' != typeof values) return values

  if (values instanceof Date) {
    copy = new Date()
    copy.setTime(values.getTime())
    return copy
  }

  if (values instanceof Array) {
    copy = []
    for (let i = 0, len = values.length i < len i++) {
      copy[i] = deepClone(values[i])
    }
    return copy
  }

  if (values instanceof Object) {
    copy = {}
    for (let attr in values) {
      if (values.hasOwnProperty(attr)) copy[attr] = deepClone(values[attr])
    }
    return copy
  }

  throw new Error('Unable to copy values! its type isnot supported.')
}