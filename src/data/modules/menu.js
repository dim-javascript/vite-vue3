import _ from 'lodash';

const menuList = [
  {
    name: '首页',
    path: '',
  },
  {
    name: '事例页面',
    children: [
      {
        name: '页面1',
        path: '',
      },
    ],
  },
  {
    name: '系统管理',
  },
];

// 设置唯一的 id 值
function setUuIdHandle(list) {
  list.forEach((element) => {
    if (element.children && element.children.length > 0) {
      setUuIdHandle(element.children);
    }
    element.id = _.uniqueId('menuId_');
  });
}

setUuIdHandle(menuList);

export default { menuList };
