/**
 * [randomColor 随机生成颜色]
 * @return {String}
 */
export function randomColor () {
  return '#' + ('00000' + (Math.random() * 0x1000000 << 0).toString(16)).slice(-6);
}

/**
 * [randomNum 生成指定范围随机数]
 * @param  {Number} min
 * @param  {Number} max
 * @return {Number}    
 */
export function randomNum (min, max) {
  return Math.floor(min + Math.random() * (max - min));
}