class WsHelper {
  constructor() {
    this.onErrorCallback = null;
    this.isOpenCallback = null;
  }

  setData(data) {
    window.dispatchEvent(new CustomEvent('setData', data))
  }
  openChatService(data) {
    window.dispatchEvent(new CustomEvent('openChatService', data))
  }
  toggleModal() {
    window.dispatchEvent(new CustomEvent('toggleModal'))
  }
  addNewContent(targetID) {
    window.dispatchEvent(new CustomEvent('addNewConnect', { detail: { targetID } }))
  }
  onError(callback) {
    WsHelper.onErrorCallback = callback
  }
  isOpen(callback) {
    WsHelper.isOpenCallback = callback
  }

  async init() {
      const getVersion = new Promise((resolve, reject) => {
          // call api get version
          return resolve('msglib');
      });

      const script = document.createElement('script');
      const VERSION = await getVersion.then(version => version);
      script.src = `./dist/my-custom-element.min.js`;
      document.head.appendChild(script);

      const link = document.createElement('link');
      link.rel = 'stylesheet';
      document.head.appendChild(link);

      return new Promise((resolve, reject) => {
          script.onload = resolve;
          script.onerror = reject;
          document.head.appendChild(script);
      });
  }
}

// 全域可存取的方法
function handleError(error) {
  if (typeof WsHelper.onErrorCallback !== 'function') return;
    WsHelper.onErrorCallback(error);
}
function handleIsOpen(isOpen) {
  if (typeof WsHelper.isOpenCallback !== 'function') return;
    WsHelper.isOpenCallback(isOpen);
}

window.addEventListener('onError', event => handleError(event.detail));
window.addEventListener('isOpen', event => handleIsOpen(event.detail.isOpen));