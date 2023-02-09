/*
 * 首页路由
 */

export default [
  {
    name: 'home',
    path: '',
    component: () => import('@/views/home/index.vue'),
    meta: {
      title: '首页',
    },
  },
];
