import React from 'react'
import PropTypes from 'prop-types'
import {
  View,ScrollView,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView
} from 'react-native'
import Theme from '../../../theme';
import {
  ContentContainer,
  CardContainer,
  TitleContainer,
  SendContainer,
  UserContainer,
  DateText,
  UserText,
  TitleText,
  SendText,
  TextContainer,
} from './style';
import CustomButton from '../button/CustomButton';

class Notification extends React.Component {
  static navigationOptions = {
    headerVisible:false,
    headerStyle:{
      width:0,
      height:0,
    },
  }

  render () {
    return(
      <ContentContainer>
        <CardContainer>
          <TitleContainer>
            <TextContainer>
              <TitleText>Coins Transfer</TitleText>
            </TextContainer>
            <TextContainer>
              <DateText>{this.props.DateText}</DateText>
            </TextContainer>
          </TitleContainer>
          <SendContainer>
            <TextContainer>
              <SendText>Send Coins</SendText>
            </TextContainer>
            <TextContainer>
              <SendText>To</SendText></TextContainer>
            </SendContainer>
            <UserContainer>
              <TextContainer>
                <UserText>{this.props.balance} BAL</UserText>
              </TextContainer>
              <TextContainer>
                <UserText>{this.props.username}</UserText>
              </TextContainer>
            </UserContainer>
              <CustomButton
                style={{marginTop:20,borderWidth:1}}
                onPress={()=>{
                  this.props.setModalVisible(true,'Transfer Notification');
                }}
                border={Theme.colors.lightBlue}
                text={"View"}
                />
          </CardContainer>
        </ContentContainer>
      )
    }
  }

  export default Notification;
