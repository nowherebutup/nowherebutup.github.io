import template from './index.html'
import router from '../../router'
import './style.css'

export default class {
  mount(container) {
    document.title = 'foo'
    container.innerHTML = template
    container.querySelector('.to-bar').addEventListener('click', () => {
      router.go('/bar')
    })
  }
}