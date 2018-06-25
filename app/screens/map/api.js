import coreApi from '../../lib/coreApi'
import { Constants } from '../../lib/constants'


export const fetchByLocation =  (token,data) => {
  let url1 = `v1/user-auth/businesses-by-location`;
  let url2 = 'v1/user-auth/promotions-by-location'
  if(data.promotion){
    let result =  coreApi.POST(url2,token,data);
    return result
  }else{
    return new Promise(function(resolve, reject) {
      var apiRequest1 = coreApi.POST(url1,token,data).then((e)=>{
        coreApi.POST(url2,token,data).then((f)=>{
          resolve([e,f]);
        }).catch((error) => {
          reject(error)
        });
      }).catch((error) => {
        reject(error)
      });
    })
  }
}

export const fetchCategories = (token,data) => {
  let url = `v1/app-auth/marketplace-business-categories`;
  let result =  coreApi.GET(url,token,data);
  return result
}
