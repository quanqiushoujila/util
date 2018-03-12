/**
 * [getCookie 根据name读取cookie]
 * @param  {String} name
 * @return {String}
 */
export function getCookie (name) {
  const arr = document.cookie.replace(/\s/g, '').split(';')
  for (let i = 0, len = arr.length; i < len; i++) {
    let arrTemp = arr[i].split('=')
    if (arrTemp[0] === name) {
      return decodeURIComponent(arrTemp[1])
    }
  }
  return ''
}
/**
 * [setCookie 设置cookie]
 * @param {String} name 
 * @param {String} value
 * @param {Number} days 
 */
export function setCookie (name, value, days) {
  let data = new Data();
  date.setDate(date.getDate() + days);
  document.cookie = name + '=' + value + ';expires=' + data;
}
/**
 * [removeCookie 根据name删除cookie]
 * @param  {String]} name
 */
export function removeCookie (name) {
  setCookie(name, 1, -1)
}