import store from '../Redux-Store/store'

export function greet(greeting) {
  store.dispatch({
    type: 'GREETING',
    payload: greeting
  })
}