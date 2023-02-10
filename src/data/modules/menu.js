import _ from 'lodash';

import config from '@/config';

const BASE = config.base || '';

const menuList = [
  {
    name: '首页',
    path: '',
    icon: '',
  },
  {
    name: '事例页面',
    icon: '',
    children: [
      {
        name: '页面1',
        path: `/example/one`,
      },
      {
        name: '页面2',
        path: '/example/two',
      },
    ],
  },
];

// 设置唯一的 id 值
function setUuIdHandle(list) {
  list.forEach((element) => {
    if (element.children && element.children.length > 0) {
      setUuIdHandle(element.children);
    }
    element.hasOwnProperty('path') && (element.path = `${BASE}${element.path}`);
    element.id = _.uniqueId('menuId_');
  });
}

setUuIdHandle(menuList);

export default { menuList };
