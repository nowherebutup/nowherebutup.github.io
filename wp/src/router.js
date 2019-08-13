
import 'regenerator-runtime/runtime'

const routes = {
  '/foo': () => import('./view/foo/index'),
  '/bar': () => import('./view/bar/index')
}

class Router {
  init() {
    window.addEventListener('popState', () => {
      // 按钮前后的操作
      this.load(location.pathname)
    })
    this.load(location.pathname)
  }

  async load(path) { // 加载的时候触发
    if (location.pathname === '/') path = '/foo'
    const View = (await routes[path]()).default
    const view = new View()
    view.mount(document.body)
  }

  go(path) {
    history.pushState(path, null)
    this.load(path)
  }
}

export default new Router()