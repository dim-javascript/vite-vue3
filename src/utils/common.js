/**
 * 封装的一些公共函数
 */

/**
 * @description: 用于获取 url 上面的参数, 默认 url 地址上的参数是会被自动转义的，如果要求不转义，则设置 isDecode 为 false
 * @param {String} url 需要进行提取的 url 数据
 * @param {Boolean} isDecode 是否开启转码, 通过 URLSearchParams 获取的值默认已转义。
 * @return {Object} 返回当前的 url 中的获取到的参数对象
 */
const getUrlParams = (url, isDecode = true) => {
  const resultObj = {};
  const NUrl = new URL(url);
  console.log('NUrl', NUrl.search);
  const searchParams = new URLSearchParams(NUrl.search);
  for (let pair of searchParams.entries()) {
    const key = pair[0],
      value = pair[1];
    resultObj[key] = isDecode ? value : encodeURIComponent(value);
  }

  return resultObj;
};

export { getUrlParams };
