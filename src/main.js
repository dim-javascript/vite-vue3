import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);

// vue 全家桶
import router from './router';
import pinia from './pinia';

// 自适应
import './utils/scale-1920.js';

// 第三方库
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import zhCn from 'element-plus/lib/locale/lang/zh-cn';

// css 变量覆盖
import './style/css/index.css';

// 全局注册 element-plus-icon 图标组件 [ 如果未使用，请删除 ]
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
for (const [name, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(name, component);
}

// 路由切换进度条
import nprogress from './plugin/nprogress';

app
  .use(router)
  .use(pinia)
  .use(ElementPlus, {
    locale: zhCn,
  })
  .use(nprogress);

app.mount('#app');
