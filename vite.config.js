import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue()],
// })

export default defineConfig(({ command, mode }) => {
  /*
   * command: 在开发环境下 command 的值为 serve，而在生产环境下为 build。
   */
  const root = process.cwd();
  const env = loadEnv(mode, root);

  return {
    base: env.VITE_APP_BASE + '/',

    plugins: [vue()],

    resolve: {
      // 对文件路径进行修改
      alias: [{ find: '@', replacement: path.resolve(__dirname, './src') }],
    },
  };
});
