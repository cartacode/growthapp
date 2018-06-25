import LoginScreen from '../screens/login/LoginScreen.js';
import HomeScreen from '../screens/home/HomeScreen';
import SignupScreen from '../screens/signup/signupScreen';
import CreateWalletScreen from '../screens/createWallet/CreateWalletScreen';
import ForgotPasswordScreen from '../screens/forgotpassword/ForgotPasswordScreen';
import MapScreen from '../screens/map/MapScreen';
import {
  createStackNavigator
} from 'react-navigation';

const navigationOptions = {
  headerStyle: {
    height: 60,
    backgroundColor:'#36404D',
    elevation:0,
    paddingLeft:11,
  },
};
const Mainstack = createStackNavigator({
	Login:LoginScreen,
  Home:HomeScreen,
  Signup:SignupScreen,
  CreateWallet:CreateWalletScreen,
  ForgotPassword:ForgotPasswordScreen,
  MapRoute:MapScreen,
},
	{
    navigationOptions,
	initialRouteName: 'Home',
});
export default Mainstack;
