/*
 * 组件调试区
 */

export default [
  {
    name: 'example',
    path: 'example',
    component: () => import('@/views/example/example-one.vue'),
    meta: {
      title: '事例页面1',
    },
  },
];
