import * as React from 'react';
import {
  View,
  Text,
  Dimensions
} from 'react-native';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import MapComponent from '../../components/map/MapComponent';
import Wallets from '../../components/wallets/wallets'
import AccountComponent from '../../components/account/Account';
import {NotificationContainer,NotificationText} from './style';
var { height, width } = Dimensions.get("window");
import CustomIcon from '../../components/icon/svgicon';


import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchBusinessesCategories } from './action'

const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
};

class MapScreen extends React.Component {
  static navigationOptions = {
    headerVisible:false,
    headerLeft:null,
    headerStyle:{
      width:0,
      height:0,
    },
  }
  constructor(props){
    super(props)
    this.state = {
      index: 0,
      routes: [
        { key:'0', title: 'Discover' },
        { key:'1', title: 'Wallets' },
        {key:'2', title:'Account'}
      ],
    }
  }

  componentWillMount() {
    this.props.fetchBusinessesCategories()
  }

  _handleIndexChange = index => this.setState({ index });
  _renderLabel = ({route, index}) => {
    return <View>
              { route.key == 2 ?
                  <CustomIcon name="user" height='20' width='20' fill={Theme.colors.darkGray}/>:
                    <Text style={{fontSize:16,color:route.key == this.state.index? Theme.colors.redBalehu : Theme.colors.darkGray,fontFamily:'NunitoSans-Bold'}}>{route.title}</Text>
              }
              {
                //    <NotificationContainer>
                //   <NotificationText>1</NotificationText>
                // </NotificationContainer>
              }
            </View>
  }
  _renderHeader = props =>
  <TabBar
    {...props}
    renderLabel={this._renderLabel}
    style = {{backgroundColor:'#ffffff' }}
    tabStyle = {{height:50}}
    indicatorStyle={{ backgroundColor: Theme.colors.redBalehu ,marginLeft:15,marginRight:15, width:this.state.index == 2 ? 100 :90}}
    />


_renderScene = SceneMap({
  0: () =>  <MapComponent />,
  1: () => <Wallets />,
  2:() => <AccountComponent />
});

render() {
  return (
    <View style={{flex:1}}>
      <TabViewAnimated
        style={{position:'relative',width: width}}
        navigationState={this.state}
        renderScene={this._renderScene}
        renderHeader={this._renderHeader}
        onIndexChange={this._handleIndexChange}
        initialLayout={initialLayout}
        />
    </View>
  );
}
}

function mapDispatchToProps(dispatch) {
  return Object.assign(
    { dispatch: dispatch },
    bindActionCreators({
      fetchBusinessesCategories
    }, dispatch)
  );
}

const mapStateToProps = state => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MapScreen);
