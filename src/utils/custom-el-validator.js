import regVerifyHandle from './reg-verify.js';

/**
 * @description: 用于 element-plus 中的自定义验证
 * @param {String} type 当前验证的值的类型，与上面的 reg-verify.js 中的属性对应的函数名
 * @param {String, Object} value 当前验证的值
 * 1、当 value 为字符串时，则只验证当前值，当且仅当该函数只有一个参数
 * 2、当 value 为对象时，则表示该函数需要传递多个参数，具体的可以参照 reg-verify.js 中对应的函数
 * @param {Function} callback 传入的回调函数
 * @param {String} errorName 当前验证值的名称，用于报错信息时的显示
 * @param {String} customErrorText 当前值验证时自定义验证信息；例如验证【整数、非负整数】，未返回验证信息的
 * @return {Function} 传入的回调函数
 */
const elValidator = (arg) => {
  const { type, value, callback, errorName, customErrorText } = arg;
  const curVal = typeof value == 'string' ? value : value.value;
  const resuilt = regVerifyHandle[type](value);
  if (!curVal) {
    return callback(`${errorName}不能为空`);
  } else if (resuilt) {
    return customErrorText
      ? callback(customErrorText)
      : callback(`${errorName}${resuilt}`);
  } else {
    return callback();
  }
};

export { elValidator };
