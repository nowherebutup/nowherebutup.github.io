import template from './index.html'
import router from '../../router'
import './style.css'

export default class {
  mount(container) {
    document.title = 'bar'
    container.innerHTML = template
    container.querySelector('.to-foo').addEventListener('click', () => {
      router.go('/foo')
    })
  }
}