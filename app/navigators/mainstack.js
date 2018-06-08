
import HomeScreen from '../screens/home/HomeScreen';
import MainScreen from '../screens/main/MainScreen'
import MarketingScreen from '../screens/marketing/MarketingScreen'
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
  Main:{ screen: MainScreen },
  Marketing:{ screen: MarketingScreen }
},
	{
    navigationOptions,
	initialRouteName: 'Home',
});
export default Mainstack;
