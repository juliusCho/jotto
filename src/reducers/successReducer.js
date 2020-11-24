import { actionTypes } from '../actions'

/**
 * @function successReducer
 * @param {array} state - Array of guessed words.
 * @param {object} action - action to be reduced.
 * @returns {boolean} - new success state.
 */
export default (state = false, action) => {
  // if (!action) return false

  if (!state && action) {
    return action.type === actionTypes.CORRECT_GUESS
  }
  return state
  // switch (action.type) {
  //   case actionTypes.CORRECT_GUESS:
  //     return true
  //   default:
  //     return false
  // }
}
