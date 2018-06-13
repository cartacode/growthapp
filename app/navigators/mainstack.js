
import HomeScreen from '../screens/home/HomeScreen';
import AccountScreen from '../components/account/Account';
import MainScreen from '../screens/main/MainScreen'
import MarketingScreen from '../screens/marketing/MarketingScreen'
import AddPromotion from '../screens/Promotion/promotion.js';
import LoyaltyReward from '../screens/loyalty/LoyaltyReward';
import AnalyticsScreen from '../screens/analytics/AnalyticsScreen'

import {
  StackNavigator,
} from 'react-navigation';

const navigationOptions = {
  headerStyle: {
    height: 60,
    backgroundColor:'#ffffff',
    elevation:2,
    paddingLeft:11,
  },
};
const Mainstack = StackNavigator({
  Home:{ screen: HomeScreen},
  Account:{ screen: AccountScreen},
  Main:{ screen: MainScreen },
  Marketing:{ screen: MarketingScreen },
  Promotion: { screen:AddPromotion },
  Loyalty: {screen: LoyaltyReward},
  Analytics:{screen: AnalyticsScreen}
},
	{
    navigationOptions,
	initialRouteName: 'Promotion',
});
export default Mainstack;
