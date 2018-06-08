
import HomeScreen from '../screens/home/HomeScreen';
import AccountScreen from '../components/account/Account';
import {
  StackNavigator,
} from 'react-navigation';

const navigationOptions = {
  headerStyle: {
    height: 60,
    backgroundColor:'#36404D',
    elevation:0,
    paddingLeft:11,
  },
};
const Mainstack = StackNavigator({
  Home:{ screen: HomeScreen},
  Account:{ screen: AccountScreen},
},
	{
    navigationOptions,
	initialRouteName: 'Account',
});
export default Mainstack;
