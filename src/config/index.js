const ENV = import.meta.env;

export default {
  base: ENV.VITE_APP_BASE,
  api: ENV.VITE_APP_API,
  server: ENV.VITE_APP_SERVER,
};
