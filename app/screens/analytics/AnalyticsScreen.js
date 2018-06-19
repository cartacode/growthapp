import React from 'react'
import {
  View,
  Text,TextInput,
  ImageBackground,
  Modal,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import {
  MainContainer,
  CardContainer,
  TitleContainer,
  HeaderText,
  TitleText,
  ChartContainer,
  ChartInnerContainer,
  RoundContentContainer,
  DetailCardContainer,
  ButtonContainer,
  HeaderContainer,
  DateText} from './style.js';
  import {
    VictoryChart,
    VictoryArea,VictoryAxis,
    VictoryLine,
    VictoryVoronoiContainer,
    VictoryTooltip} from "victory-native";
    import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
    let { height, width } = Dimensions.get("window");
    import HeaderRightIcon from '../../components/header/HeaderRightIcon';
    import HeaderLeftIcon from '../../components/header/HeaderLeftIcon';
    import CustomButton from '../../components/button/CustomButton';
    import RowComponent from './RowComponent.js'
    import CustomTooltip from './CustomTooltip'
    import Analytics from '../../components/analytics/Analytics'
const initialLayout = {
      height: 0,
      width: Dimensions.get("window").width
    };

  const FirstRoute = () => <Analytics/>;
  const SecondRoute = () => <LoyaltyRewards />;

class AnalyticsScreen extends React.PureComponent {
  static navigationOptions = (navigation) => ({
    headerTitle:(<View/>),
    headerLeft: (<HeaderLeftIcon icon={'left-arrow'} {...navigation}/>),
    headerRight: (<View/>),
  })
  constructor(props){
    super(props)
    this.state = {
      index: 0,
      routes: [
        { key: "0", title: "Promotions" },
        { key: "1", title: "Loyalty Rewards" }
      ],
    };
  }

  _handleIndexChange = index => this.setState({ index });

  _renderLabel = ({ route, index }) => {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          width: "100%",
          backgroundColor:
          route.key == this.state.index ? Theme.colors.lightBlue : '#ffffff',

          borderRightWidth: route.key == 0 ? 1 : 0,

          borderColor: Theme.colors.lightBlue
        }}
        >
        <Text
          style={{
            fontSize: 16,
            margin: 0,
            color:
            route.key == this.state.index
            ? "#fff"
            : Theme.colors.darkGray,
            fontFamily: "NunitoSans-Bold",
            opacity: 1
          }}
          >
          {route.title}
        </Text>
      </View>
    );
  };

  _renderHeader = props => (
    <TabBar
      {...props}
      renderLabel={this._renderLabel}
      style={{
        borderRadius: 30,
        borderWidth: 1,
        borderColor: Theme.colors.lightBlue,
        overflow: "hidden",
        backgroundColor: "#ffffff",
        elevation: 0,
        marginLeft: 10,
        marginRight: 10
      }}
      indicatorStyle={{ opacity: 0 }}
      tabStyle={{ padding: 0, height: 45, overflow: "hidden" }}
      />
  );

  _renderScene = SceneMap({
    0: () => <Analytics title={'Promotion:'} subtitle={'Wednesday’s Free Drinks'} reachColor={'rgba(63,81,181,0.7)'} engageColor={'rgba(63,81,181,0.3)'} redeemColor={'rgb(244,67,54)'}/>,
    1: () => <View />
});

render() {

  return (
    <MainContainer>
      <TabViewAnimated
        style={{ width: width, marginTop: 10, borderRadius: 5}}
        navigationState={this.state}
        renderScene={this._renderScene}
        renderHeader={this._renderHeader}
        onIndexChange={this._handleIndexChange}
        initialLayout={initialLayout}
        />
    </MainContainer>
  )
}
}
export default AnalyticsScreen;
