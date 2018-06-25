import { ERROR_CHANGES } from './type';
import { saveSettings } from './api'
import { Constants } from '../../lib/constants'
import { saveUserData, getUserData } from '../../lib/saveStore'
import { StackActions, NavigationActions } from 'react-navigation';

export function saveUserSettings (data) {
  return (dispatch, getState) => {
    let userToken = getState().commonReducer.userToken;
    dispatch({
      type: ERROR_CHANGES,
      data: null
    })
    saveSettings(userToken,data).then((r,e)=>{
      if(r.code === 500){
        dispatch({
          type: ERROR_CHANGES,
          data: {message:r.message}
        })
      }
    })
  }
}
