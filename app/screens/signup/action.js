import { ERROR_SIGNUP } from './type';
import { appToken, signUp } from './api'
import { Constants } from '../../lib/constants'
import { saveUserData, getUserData } from '../../lib/saveStore'
import { StackActions, NavigationActions } from 'react-navigation';

export function userSignUp (data) {
  return (dispatch, getState) => {
    dispatch({
      type: ERROR_SIGNUP,
      data: null
    })
    appToken(null,Constants.appDetail)
    .then((r,e)=>{
      if(e){
        dispatch({
          type: ERROR_SIGNUP,
          data: {message:'error in login'}
        })
      }else{
        if(r.code === 200){
          let token = r.token; //balehu app token
          signUp(token,data).then((r,e)=>{
            console.log(r);
            // let tokenData = {
            //   token:r.token,
            //   expire:r.expire,
            //   balehuAppToken:token
            // }
            if(r.success === true){
              // saveUserData(tokenData).then((r,e)=>{
                // dispatch({
                  // type: SAVE_USER_TOKEN,
                  // data: tokenData
                // })
                // const navigateAction = StackActions.reset({
                //           index:0,
                //           actions: [NavigationActions.navigate({ routeName: 'MapRoute' })],
                //         })
                //   dispatch(navigateAction);
              // })

              // const navigateAction = StackActions.push({
              //   routeName: 'Login',
              // })
              // dispatch(navigateAction);
            }
            else{
              dispatch({
                type:ERROR_SIGNUP,
                data:{message:r.message}
              })
            }
          })
        }
        else{
          dispatch({
            type:ERROR_SIGNUP,
            data:{message:r.message}
          })
        }
      }
    })
  }
}
