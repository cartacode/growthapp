import createReducer from '../lib/createReducer'
import * as types from '../action/types'

var initialstate = {
  data:0,
  tokenLoading:true,
  userToken:null,
  promotionFlag:false
}

export const commonReducer = createReducer(initialstate, {
  [types.DEMO](state, action){
    return Object.assign({}, state, {
      data:action.data
    })
  },
  [types.TOKEN_LOADING](state, action){
    return Object.assign({}, state, {
      tokenLoading:action.data
    })
  },
  [types.SAVE_USER_TOKEN](state, action){
    return Object.assign({}, state, {
      userToken:action.data
    })
  },
  [types.PROMOTION_FLAG](state, action){
    return Object.assign({}, state, {
      promotionFlag:action.data
    })
  }
})
