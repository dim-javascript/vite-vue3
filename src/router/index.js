import { createRouter, createWebHistory } from 'vue-router';
import config from '@/config';

const BASE = config.base;

const projectRoutes = [];

/**
 * 自动导入modules文件夹下的路由
 */
const modules = import.meta.glob('./modules/*.js', { eager: true });

for (const key in modules) {
  if (Object.hasOwnProperty.call(modules, key)) {
    const element = modules[key];
    projectRoutes.push(...element.default);
  }
}

const routes = [
  {
    path: `${BASE}`,
    component: () => import('@/views/layout/index.vue'),
    children: [...projectRoutes],
  },
  {
    path: `${BASE}/login`,
    component: () => import('@/views/login/index.vue'),
    mate: {
      title: '登录',
    },
  },
  // 404 页面
  {
    path: '/:pathMatch(.*)',
    redirect: `${BASE}/not-found`,
  },
  {
    path: `${BASE}/not-found`,
    component: () => import('@/views/not-found/index.vue'),
    mate: {
      title: 'NotFound',
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

/**
 * 进入路由前
 * to: Route: 即将要进入的目标 路由对象
 * from: Route: 当前导航正要离开的路由
 * next: Function: 在 4.x 版本是个可选参数，具体参照官方文档
 */
router.beforeEach((to) => {
  if (to.meta && to.meta.title) {
    document.title = `管理平台-${to.meta.title}`;
  }
});

export default router;
