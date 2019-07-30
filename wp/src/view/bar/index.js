import template from './index.html'
import router from '../../router'
import './style.css'

export default function() {
  document.body.innerHTML = template
  document.title = 'bar'
  document.querySelector('.to-foo').addEventListener('click', () => {
    router.go('/foo')
  })
}