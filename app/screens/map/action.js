import { BUSINESS_LOCATION_DATA, PROMOTIONS_LOCATION_DATA, BUSINESS_CATEGORIES_DATA, PROMOTION_FLAG } from './type';
import { fetchByLocation, fetchCategories } from './api'
import { Constants } from '../../lib/constants'
import { StackActions, NavigationActions } from 'react-navigation';

export function fetchBusinessesByLocation (data) {
  return (dispatch, getState) => {
    let userToken = getState().commonReducer.userToken
    if(data.promotion){
      fetchByLocation(userToken.token,data).then((e,r)=>{
          dispatch({
            type: PROMOTIONS_LOCATION_DATA,
            data: e['business-promotions']
          })
          dispatch({
            type: BUSINESS_LOCATION_DATA,
            data: null
          })
      })
    }else{
      fetchByLocation(userToken.token,data).then((e)=>{
        if(e)
        e.map((data)=>{
          if(data['business-promotions']){
            dispatch({
              type: PROMOTIONS_LOCATION_DATA,
              data: data['business-promotions']
            })
          }else{
            dispatch({
              type: BUSINESS_LOCATION_DATA,
              data: data['businesses']
            })
          }
        })
      })
    }
  }
}

export function fetchBusinessesCategories() {
  return (dispatch, getState) => {
    let userToken = getState().commonReducer.userToken
    fetchCategories(userToken.token,null).then((e,r)=>{
      dispatch({
        type: BUSINESS_CATEGORIES_DATA,
        data: e.categories
      })
    })
  }
}

export function togglePromotionFlag() {
  return (dispatch, getState) => {
    let promotionFlag = getState().commonReducer.promotionFlag
    dispatch({
      type: PROMOTION_FLAG,
      data: !promotionFlag
    })
  }
}
