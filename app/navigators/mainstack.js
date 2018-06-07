
import HomeScreen from '../screens/home/HomeScreen';
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
},
	{
    navigationOptions,
	initialRouteName: 'Home',
});
export default Mainstack;
