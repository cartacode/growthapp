import { ERROR_LOGIN, SAVE_USER_TOKEN } from './type';
import { appToken, signIn } from './api'
import { Constants } from '../../lib/constants'
import { saveUserData, getUserData } from '../../lib/saveStore'
import { StackActions, NavigationActions } from 'react-navigation';

export function login (data) {
  return (dispatch, getState) => {
    dispatch({
      type: ERROR_LOGIN,
      data: null
    })
    appToken(null,Constants.appDetail)
    .then((r,e)=>{
      if(e){
        alert('error in login')
        // dispatch({
        //   type: ERROR_LOGIN,
        //   data: {message:'error in login'}
        // })
      }else{
        console.log(r);
        if(r.code == 200){
          let token = r.token;
          signIn(token,data).then((r,e)=>{
            if(r.code==200){
              let tokenData = {
                token:r.token,
                expire:r.expire
              }
              saveUserData(tokenData).then((r,e)=>{
                dispatch({
                  type: SAVE_USER_TOKEN,
                  data: tokenData
                })
                const navigateAction = StackActions.reset({
                          index:0,
                          actions: [NavigationActions.navigate({ routeName: 'MapRoute' })],
                        })
                  dispatch(navigateAction);
              })
            }else{
              alert(r.message)
              // dispatch({
              //   type: ERROR_LOGIN,
              //   data: {message:r.message}
              // })
            }
          })
        }
      }
    })
  }
}
