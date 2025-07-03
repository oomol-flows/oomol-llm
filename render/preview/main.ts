import { model, messages, skills } from '../src'
import { mockInputRenderContext } from './mock'

Object.entries({ model, messages, skills }).forEach(([name, fn]) => {
  fn(document.getElementById('$' + name)!, mockInputRenderContext(name))
})
