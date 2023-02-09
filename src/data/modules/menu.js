import _ from 'lodash';

const menuList = [
  {
    name: '首页',
    path: '',
  },
  {
    name: '组件的调试',
  },
  {
    name: '系统管理',
  },
].map((item) => {
  return {
    ...item,
    id: _.uniqueId(),
  };
});

export default { menuList };
