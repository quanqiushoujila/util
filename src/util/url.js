/**
 * [parseQueryString url参数转对象]
 * @param  {String}  url  default: window.location.href
 * @return {Object}
 */

export function parseQueryString (url = window.location.href) {
  let search = url.subString(url.indexOf('?') + 1)
  if (!search) {
    return {}
  }
  return JSON.parse(`{"${decodeURIComponent(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"')}"}`)
}


/**
 * [stringfyQueryString 对象序列化]
 * @param  {Object} obj
 * @return {String}
 */
function stringfyQueryString(obj) {
  if (!obj)  return '';
  let pairs = [];
  for (let key in obj) {
    let value = obj[key];
    
    if (value instanceof Array) {
      for (let i = 0; i < value.length; ++i) {
        pairs.push(encodeURIComponent(key + '[' + i + ']') + '=' + encodeURIComponent(value[i]));
      }
      continue;
    }

    pairs.push(`${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`);
  }

  return pairs.join('&');
}
