
import HomeScreen from '../screens/home/HomeScreen';
import AccountScreen from '../components/account/Account';
import MainScreen from '../screens/main/MainScreen'
import MarketingScreen from '../screens/marketing/MarketingScreen'
import AddPromotion from '../screens/Promotion/promotion.js'
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
  Main:{ screen: MainScreen },
  Marketing:{ screen: MarketingScreen },
  Promotion: { screen:AddPromotion },
},
	{
    navigationOptions,
	initialRouteName: 'Home',
});
export default Mainstack;
