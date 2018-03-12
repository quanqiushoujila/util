/**
 * [hasClass 判断元素是否有某个class]
 * @param  {HTMLElement}  ele
 * @param  {String}  cls
 * @return {Boolean}    
 */
export function hasClass (ele, cls) {
  return (new RegExp(`(\\s|^)+${cls}(\\s+|$)`)).test(ele.className)
}

/**
 * [addClass 为元素添加class]
 * @param {HTMLElement} ele
 * @param {String} cls
 */
export function addClass (ele, cls) {
  if (!hasClass(ele, cls)) {
    ele.className += ' ' + cls
  }
}

/**
 * [removeClass 为元素移除class]
 * @param  {HTMLElement} ele
 * @param  {String} cls
 */

export function removeClass (ele, cls) {
  if (hasClass(ele, cls)) {
    const reg = new RegExp(`(\\s+|$)${cls}(\\s|$)`)
    ele.className = ele.className.replace(reg, '')
  }
}