/*
 * @Author: dumin
 * @Date: 2021-08-26 15:34:39
 * @LastEditTime: 2021-08-30 16:00:28
 * @LastEditors: Please set LastEditors
 * @Description: 常规的一些正则验证
 */

// 验证汉字
const veeChinese = (str) => {
  if (/[\u4E00-\u9FFF]+|\s/g.test(str)) return '不能含有中文';
};

// 验证手机号【严谨的认证】
const veePhoneNum = (str) => {
  if (
    !/^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[189]))\d{8}$|\s/g.test(
      str
    )
  )
    return '格式不正确';
};

// 验证座机电话【国内】，如: 0341-86091234
const veeTelPhone = (str) => {
  if (!/^(?:(?:\d{3}-)?\d{8}|^(?:\d{4}-)?\d{7,8})(?:-\d+)?$|\s/g.test(str))
    return '格式不正确';
};

// 同时验证手机号和座机号
const veeTelMobNum = (str) => {
  if (!/^(1[3|4|5|6|7|8|9])\d{9}$|^0\d{2,3}-?\d{7,8}$/g.test(str))
    return '格式不正确';
};

// 验证银行卡号
const veeBackCard = (str) => {
  if (!/^[1-9]\d{9,29}$|\s/g.test(str)) return '格式不正确';
};

// 验证身份证号【2代身份证】
const veeIDCard = (str) => {
  if (
    !/^[1-9]\d{5}(?:18|19|20)\d{2}(?:0[1-9]|10|11|12)(?:0[1-9]|[1-2]\d|30|31)\d{3}[\dXx]$|\s/g.test(
      str
    )
  )
    return '格式不正确';
};

// 密码校验【强检验，默认最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符】
const veePsdDeep = (arg) => {
  let curValue = {
    value: '',
    num: 6,
  };

  typeof arg == 'string'
    ? (curValue.value = arg)
    : (curValue = { ...curValue, ...arg });

  const pattern = new RegExp(
    `^\\S*(?=\\S{${curValue.num},})(?=\\S*\\d)(?=\\S*[A-Z])(?=\\S*[a-z])(?=\\S*[!@#$%^&*?.,; ])\\S*$|\\s`,
    'g'
  );
  if (!pattern.test(curValue.value)) return '格式不正确';
};

// 密码验证：必须包含大小写字母和数字的组合，不能使用特殊字符，默认长度在 8-10 之间
const veePsdNW = (arg) => {
  let curValue = {
    value: '',
    startNum: 8,
    endNum: 10,
  };

  typeof arg == 'string'
    ? (curValue.value = arg)
    : (curValue = { ...curValue, ...arg });

  const pattern = new RegExp(
    `^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{${curValue.startNum},${curValue.endNum}}$|\\s`,
    'g'
  );
  if (!pattern.test(curValue.value)) return '格式不正确';
};

// 验证数字货币金额。数字/货币金额 (只支持正数、不支持校验千分位分隔符)
const veePrice = (str) => {
  if (
    !/(?:^[1-9]([0-9]+)?(?:\.[0-9]{1,2})?$)|(?:^(?:0)$)|(?:^[0-9]\.[0-9](?:[0-9])?$|\s)/g.test(
      str
    )
  )
    return '格式不正确';
};

// 验证非负整数，即 str >= 0 的整数。如果匹配上，则为非负整数【false】;为【true】时，表示 str 格式不正确
const veeNonInteger = (str) => {
  if (!/^\d+$/g.test(str)) return true;
};

// 验证整数，即 parseInt(str)。如果匹配上，则为整数【false】；为【true】时，表示 str 格式不正确
const veeInteger = (str) => {
  if (!/^-?\d+$/g.test(str)) return true;
};

export default {
  veeChinese,
  veePhoneNum,
  veeTelPhone,
  veeTelMobNum,
  veeBackCard,
  veeIDCard,
  veePsdDeep,
  veePsdNW,
  veePrice,
  veeNonInteger,
  veeInteger,
};
