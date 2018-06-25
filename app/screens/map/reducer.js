import createReducer from '../../lib/createReducer'
import {
  BUSINESS_LOCATION_DATA,
  BUSINESS_CATEGORIES_DATA,
  PROMOTIONS_LOCATION_DATA,
  PROMOTION_FLAG
} from './type';

var initialstate = {
  businesses:null,
  promotion:null,
  businessesCategories:null
}

export const mapReducer = createReducer(initialstate, {
  [BUSINESS_LOCATION_DATA](state, action){
    return Object.assign({}, state, {
      businesses:action.data
    })
  },
  [PROMOTIONS_LOCATION_DATA](state, action){
    return Object.assign({}, state, {
      promotion:action.data
    })
  },
  [BUSINESS_CATEGORIES_DATA](state, action){
    return Object.assign({}, state, {
      businessesCategories:action.data
    })
  }
})
