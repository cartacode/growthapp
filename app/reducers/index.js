import { combineReducers } from 'redux';
import * as common from './common';
import * as navReducer from './navigation';
import * as loginReducer from '../screens/login/reducer';
import * as mapReducer from '../screens/map/reducer';
import * as settingReducer from '../components/settings/reducer';
import * as signupReducer from '../screens/signup/reducer';


export default combineReducers(Object.assign(
  common,
  navReducer,
  loginReducer,
  mapReducer,
  settingReducer,
  signupReducer
));
