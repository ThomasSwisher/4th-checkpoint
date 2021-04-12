import Todo from "./Models/Todo.js"
import Background from "./Models/Background.js"
import Quote from "./Models/Quote.js"
import Temp from "./Models/Temp.js"

import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {Todo[]} */
  todos = []

  /** @type {quote} */
  quote = null
  author = null


  /** @type {background} */
  background = null

  /** @type {temp} */
  temp = null

  tempState = false

}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
