import createReducer from '../../lib/createReducer'
import { ERROR_CHANGES } from './type';

var initialstate = {
  error:null
}

export const settingReducer = createReducer(initialstate, {
  [ERROR_CHANGES](state, action){
    return Object.assign({}, state, {
      error:action.data
    })
  },
})
