import { h, app } from 'hyperapp'

app({
  init: 0,
  view: (state) =>
    h('div', {}, [
      h('h1', {}, state),
      h('button', { onclick: (state) => state - 1 }, 'subtract'),
      h('button', { onclick: (state) => state + 1 }, 'add'),
    ]),
  node: document.getElementById('app'),
})
