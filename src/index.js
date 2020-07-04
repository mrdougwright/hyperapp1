import _ from 'lodash';
import { h, app } from "hyperapp"

app({
  init: 0,
  view: state =>
    h("div", {}, [
      h("h1", {}, state),
      h("button", { onclick: state => state - 1 }, "subtract"),
      h("button", { onclick: state => state + 1 }, "add")
    ]),
  node: document.getElementById("app")
})

function component() {
  const h1 = document.createElement('h1')

  // Lodash, imported by this script
  h1.innerHTML = _.join(['Hello', 'Hyperapp!'], ' ')

  return h1
}

document.body.prepend(component())

