import React from 'react'
import PropTypes from 'prop-types'
import {
  View,ScrollView,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Modal,
} from 'react-native'
import Theme from '../../../theme';
import {
  MainContainer,
  ContentContainer,
  CardContainer,
  TitleContainer,
  ButtonContainer,
  TitleText,
  IconContainer
} from './style';
import CustomButton from '../button/CustomButton';
import RowItem from './RowItem'
import Promotion from './Promotions'
import Card from '../giftCardPopup/giftCard'
import LoyaltyReward from '../../screens/loyalty/LoyaltyReward';
import CustomIcon from '../icon/svgicon';
class Marketing extends React.Component {
  static navigationOptions = {
    headerVisible:false,
    headerStyle:{
      width:0,
      height:0,
    },
  }
  constructor(){
    super();
    this.state = {
     modalVisible: false,
     modalName:''
   }
  }

  setModalVisible = (visible,modal) => {
    this.setState({modalVisible: visible,modalName:modal});
  }
  render () {
    return(
      <ScrollView contentContainerStyle={{paddingBottom:20,alignItems:'center',justifyContent:'center'}}>
        <RowItem title="New Promotion" onPress={() => {this.props.navigation.navigate('Promotion')}} color={Theme.colors.lightBlue} buttonTitle="Add New Promotion" />
        <RowItem title="Analytics" color={Theme.colors.skyBlue} buttonTitle="View All Analytics" />
        <RowItem onPress={() => {
          this.setModalVisible(true,'Loyalty Reward');
        }} title="Loyalty Program" color={Theme.colors.violet} buttonTitle="Create Loyalty Campaign" />
        <Promotion navigation={this.props.navigation} />
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
              <Card title={this.state.modalName}>
                {
                  this.state.modalName=='Loyalty Reward'?
                  <LoyaltyReward  setModalVisible={this.setModalVisible}/>
                  :
                  null
                }
              </Card>
            </ScrollView>
          </View>
        </Modal>
      </ScrollView>
    )
  }
}

export default Marketing;
