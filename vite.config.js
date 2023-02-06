import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue()],
// })

export default defineConfig(({ command, mode }) => {
  const root = process.cwd();
  const env = loadEnv(mode, root);

  console.log('env', env);

  return {
    base: env.VITE_APP_BASE + '/',

    plugins: [vue()],

    resolve: {
      // 对文件路径进行修改
      alias: [{ find: '@', replacement: path.resolve(__dirname, './src') }],
    },

    // // css 预编译
    // css: {
    //   // 指定传递给 CSS 预处理器的选项
    //   preprocessorOptions: {
    //     // 在 vite 中配置一般预处理只处理变量文件
    //     scss: {
    //       additionalData: `@import './src/scss/variable/index.scss';`,
    //     },
    //   },
    // },
  };
});
