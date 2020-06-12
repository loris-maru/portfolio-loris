import Vue from 'vue'

// Initial state for the service
const initialState = {
  opend: false
}

// Reactive state - Vue will re-render component that rely on this state
const state = Vue.observable(initialState)

// Listeners to call on state change
const listeners = []

/* 
 * opend object to be used as a computed property

 * @example
 * import {opend} from '@/services/menuService
 * export default {
 *  computed: {
 *    opend
 *  }
 * }
 * 
 * This will allow accessing opend value in a component using:
 * 
 * this.opend
 * 
 * It also allows assigning a new value:
 * 
 * this.opend = true
 * 
 */
export const opend = {
  get() {
    // Return opend value from the reactive state
    return state.opend
  },
  set(value) {
    // Assign a new value to the opend value in the state
    state.opend = value
    // Call all listeners that want to know about menu state change
    listeners.forEach(fn => {
      if (typeof fn !== 'function') throw new Error(`Listener for the menu is not a function:`, fn)
      fn(value)
    })
  }
}

// Add new listener
export const onMenuStateChange = fn => listeners.push(fn)
// Remove the listener
export const removeOnMenuStateChangeListener = fn => listeners.filter(current_fn => current_fn != fn)