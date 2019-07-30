import foo from './view/foo/index'
import bar from './view/bar/index'

const routes = {
  '/foo': foo,
  '/bar': bar
}

class Router {
  init() {
    window.addEventListener('popState', () => {
      // 按钮前后的操作
      this.load(location.pathname)
    })
    this.load(location.pathname)
  }

  load(path) { // 加载的时候触发
    if (location.pathname === '/') path = '/foo'
    routes[path]()
  }

  go(path) {
    history.pushState(path)
    this.load(path)
  }
}

export default new Router()