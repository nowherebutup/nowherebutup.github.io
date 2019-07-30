import template from './index.html'
import router from '../../router'
import './style.css'

export default function() {
  document.title = 'foo'
  document.body.innerHTML = template
  document.querySelector('.to-bar').addEventListener('click', () => {
    router.go('/bar')
  })
}