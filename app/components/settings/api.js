import coreApi from '../../lib/coreApi'
import { Constants } from '../../lib/constants'

export const saveSettings =  (userToken,data) => {
  let url = `v1/user-auth/marketplace-app-user-update`;
  let result =  coreApi.POST(url,userToken.token,data);
  return result
}
