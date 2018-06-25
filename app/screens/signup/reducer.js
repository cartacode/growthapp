import createReducer from '../../lib/createReducer'
import { ERROR_SIGNUP } from './type'

var initialstate = {
  error:''
}

export const signUpReducer = createReducer(initialstate, {
  [ERROR_SIGNUP](state, action){
    return Object.assign({}, state, {
      error:action.data
    })
  },
})
