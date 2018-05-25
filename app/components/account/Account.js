import React, { PropTypes } from "react";
import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  Image,
  ScrollView,
  Modal
} from "react-native";
import { MainContainer,Tabcontainer,IconContainer,NotificationContainer,NotificationText} from './style';

import styled from "styled-components/native";
import Theme from "../../../theme";
import { TabViewAnimated, TabBar, SceneMap } from "react-native-tab-view";
import SettingComponent from "../settings/Settings";
import Notifiaction from "../notification/Notification";
import CustomIcon from '../icon/svgicon';
import Card from '../giftCardPopup/giftCard';
import TranscationHistory from '../../screens/history/TranscationHistory';
var { height, width } = Dimensions.get("window");
const initialLayout = {
  height: 0,
  width: Dimensions.get("window").width
};

const FirstRoute = () => <Notifiaction/>;
const SecondRoute = () => <SettingComponent />;

class AccountScreen extends React.Component {

  static navigationOptions = navigation => ({
    headerTitle: <HeaderTitle title="Add friend" />,
  headerLeft: (
    <HeaderLeftIcon
      accessible={true}
      style={{ marginTop: 8 }}
      accessibilityLabel="Close"
      icon="close"
      {...navigation}
      />
  ),
  headerRight: <View />
});
state = {
  index: 0,
  routes: [
    { key: "0", title: "Notifications" },
    { key: "1", title: "Settings" }
  ],
  modalVisible: false,
  modalName:''
};
setModalVisible = (visible,modal) => {
  this.setState({modalVisible: visible,modalName:modal});
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
      marginLeft: 20,
      marginRight: 20
    }}
    indicatorStyle={{ opacity: 0 }}
    tabStyle={{ padding: 0, height: 45, overflow: "hidden" }}
    />
);

_renderScene = SceneMap({
  0: () => <Notifiaction setModalVisible={this.setModalVisible} />,
  1: () => <SettingComponent />
});
render() {
  return (
    <MainContainer>
      <Tabcontainer>
      <TabViewAnimated
        style={{ width: width, marginTop: 10, borderRadius: 5,position:'relative' }}
        navigationState={this.state}
        renderScene={this._renderScene}
        renderHeader={this._renderHeader}
        onIndexChange={this._handleIndexChange}
        initialLayout={initialLayout}
        />
      <NotificationContainer>
        <NotificationText>1</NotificationText>
      </NotificationContainer>
      </Tabcontainer>
      <Modal
      animationType="slide"
      transparent={true}
      visible={this.state.modalVisible}
      >
      <View style={{flex:1,backgroundColor:'rgba(0,0,0,0.6)',paddingTop:50,paddingBottom:50,paddingLeft:27,paddingRight:27}}>
        <IconContainer onPress={() => {
              this.setModalVisible(!this.state.modalVisible);
            }}>
          <CustomIcon
            name="cross"
            fill='#000000'
            height="15"
            width="15"
            />
        </IconContainer>
        <ScrollView>
          <Card title={this.state.modalName=='Receive Coins'?'':this.state.modalName}>
            {
              this.state.modalName=='Transaction History'?
              <TranscationHistory navigation={this.props.navigation} />
              :null
            }
          </Card>
        </ScrollView>
      </View>
    </Modal>
    </MainContainer>
  );
}
}

export default AccountScreen;
