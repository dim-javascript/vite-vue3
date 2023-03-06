import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import router from '@/router'

export default {
  install() {
    NProgress.configure({ showSpinner: false });
    router.beforeEach(async () => {
      NProgress.start();
    })
    router.afterEach(() => {
      NProgress.done();
    })
  }
}
