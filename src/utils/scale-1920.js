((doc, win) => {
  const designSize = 1920;
  const docEl = doc.documentElement;
  const isIOS = navigator.userAgent.match(/iphone|ipod|ipad|android/gi);
  const dpr = isIOS ? Math.min(win.devicePixelRatio, 3) : 1;
  const resizeEvt =
    'orientationchange' in window ? 'orientationchange' : 'resize';

  docEl.dataset.dpr = dpr;
  const meta = doc.getElementsByTagName('meta');
  const head = doc.getElementsByTagName('head')[0];

  function removeViewport() {
    for (let i = 0; i < meta.length; i++) {
      if (meta[i].getAttribute('name') === 'viewport') {
        head.removeChild(meta[i]);
      }
    }
  }
  removeViewport();

  function createViewport() {
    const metaEl = doc.createElement('meta');
    metaEl.setAttribute('name', 'viewport');
    metaEl.setAttribute(
      'content',
      `initial-scale=${1 / dpr}, maximum-scale=${1 / dpr}, minimum-scale=${
        1 / dpr
      }, user-scalable=no`
    );
    head.insertBefore(metaEl, head.children[0]);
  }
  createViewport();

  const recalc = () => {
    let width = docEl.clientWidth;
    if (width / dpr > designSize) {
      width = designSize * dpr;
    }
    docEl.style.fontSize = `${100 * (width / designSize)}px`;
  };
  recalc();
  if (!doc.addEventListener) {
    return;
  }
  win.addEventListener(resizeEvt, recalc, false);
})(document, window);
