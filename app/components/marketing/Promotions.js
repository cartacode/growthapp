import React from 'react'
import PropTypes from 'prop-types'
import {
  View,ScrollView,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Dimensions,
} from 'react-native'
import Theme from '../../../theme';
import {
  MainContainer,
  PromotionCard,
  TitleContainer,
  ButtonContainer,
  TitleText,
  PromotionTitle,
  TabContainer
} from './style';
import CustomButton from '../button/CustomButton';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
let { height, width } = Dimensions.get("window");
import ActivePromotion from './ActivePromotion'
const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
};

const FirstRoute = () => <View/>;
const SecondRoute = () => <ActivePromotion/>;
const ThirdRoute = () => <View />;

class Promotion extends React.Component {
  static navigationOptions = {
    headerVisible:false,
    headerStyle:{
      width:0,
      height:0,
    },
  }
  constructor(props){
    super(props)
    this.state = {
      index: 1,
      routes: [
        { key:'0', title: 'All' },
        { key:'1', title: 'Active' },
        {key:'2', title:'Paused'},

      ],
    }
  }
  _handleIndexChange = index => this.setState({ index });

  _renderLabel = ({route, index}) => {
    return <View>
      <Text style={{fontSize:12,color:route.key == this.state.index? Theme.colors.blue : Theme.colors.darkGray,fontFamily:'NunitoSans-Bold'}}>{route.title}</Text>
    </View>
  }

  _renderHeader = props =>
<TabContainer>
  <TabBar
    {...props}
    renderLabel={this._renderLabel}
    style = {{backgroundColor:'#ffffff',shadowOpacity:0}}
    tabStyle = {{height:50,width:60}}
    indicatorStyle={{ backgroundColor: Theme.colors.blue }}
    />
</TabContainer>
  _renderScene = SceneMap({
    0: () =>  <View />,
    1: () => <ActivePromotion navigation={this.props.navigation}/>,
    2:() => <View />,
  });
  render () {
    return(

        <PromotionCard>
          <PromotionTitle>
              <TitleText>My Promotions</TitleText>
          </PromotionTitle>
            <TabViewAnimated
              navigationState={this.state}
              renderScene={this._renderScene}
              renderHeader={this._renderHeader}
              onIndexChange={this._handleIndexChange}
              initialLayout={initialLayout}
              />
          </PromotionCard>
      )
    }
  }

  export default Promotion;
