import { createApp } from 'vue';
import App from './App.vue';

// vue 全家桶
import router from './router';
import pinia from './pinia';

// 自适应
import './utils/scale-1920.js';

// 第三方库
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

const app = createApp(App);

app.use(router).use(pinia).use(ElementPlus);

app.mount('#app');
