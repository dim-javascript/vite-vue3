/*
 * 组件调试区
 */

export default [
  {
    name: 'example',
    path: 'example',
    // component: () => import('@/views/layout/index.vue'),
    children: [
      {
        name: 'example-one',
        path: 'one',
        component: () => import('@/views/example/one.vue'),
        meta: {
          title: '事例页面1',
        },
      },
      {
        name: 'example-two',
        path: 'two',
        component: () => import('@/views/example/two.vue'),
        meta: {
          title: '事例页面2',
        },
      },
    ],
  },
];
