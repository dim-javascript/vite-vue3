module.exports = {
  plugins: {
    'postcss-pxtorem': {
      // 换算的基数
      rootValue: 100,
      // 忽略转换正则匹配项
      // selectorBlackList: ['vc'],
      // 可以从 px 更改为 rem 的属性。
      propList: ['*'],
      // 设置要替换的最小像素值
      minPixelValue: 1,
    },
  },
};
