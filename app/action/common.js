import * as types from './types';
import { saveUserData, getUserData } from '../lib/saveStore'
import moment from 'moment';
import { StackActions, NavigationActions } from 'react-navigation';

export function demo (data) {
  return (dispatch, getState) => {
      dispatch({
        type: types.DEMO,
        data: 1
      })
  }
}
export function checkUserToken (data) {
  return (dispatch, getState) => {
      getUserData().then((r)=>{
        if(r){
          let tokenData = JSON.parse(r)
          var tokenDate = moment(tokenData.expire);
          console.log('Token will expire in '+tokenDate.diff(moment(),'minutes')+ ' minutes');
          if(tokenDate.diff(moment(),'minutes')<10){
            const navigateAction = StackActions.reset({
                      index:0,
                      actions: [NavigationActions.navigate({ routeName: 'Home' })],
                    })
            dispatch(navigateAction);
            dispatch({
              type: types.TOKEN_LOADING,
              data: false
            })
          }else{
            dispatch({
              type: types.SAVE_USER_TOKEN,
              data: tokenData
            })
            // const navigateAction = StackActions.reset({
            //           index:0,
            //           actions: [NavigationActions.navigate({ routeName: 'MapRoute' })],
            //         })
            // dispatch(navigateAction);
            dispatch({
              type: types.TOKEN_LOADING,
              data: false
            })
          }
        }else{
          const navigateAction = StackActions.reset({
                    index:0,
                    actions: [NavigationActions.navigate({ routeName: 'Home' })],
                  })
          dispatch(navigateAction);
          dispatch({
            type: types.TOKEN_LOADING,
            data: false
          })
        }
      })
  }
}


export function logOut (data) {
  return (dispatch, getState) => {
      saveUserData('').then(()=>{
        const navigateAction = StackActions.reset({
                  index:0,
                  actions: [NavigationActions.navigate({ routeName: 'Home' })],
                })
        dispatch(navigateAction);
      })
  }
}
