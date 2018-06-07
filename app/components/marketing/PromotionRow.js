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
  MainContainer,
  ContentContainer,
  CardContainer,
  TitleContainer,
  ButtonContainer,
  TitleText,
} from './style';
import CustomButton from '../button/CustomButton';

class PromotionRow extends React.Component {
  static navigationOptions = {
    headerVisible:false,
    headerStyle:{
      width:0,
      height:0,
    },
  }

  render () {
    return(
        <View>
        <TitleContainer>
          <TitleText>Hello</TitleText>
        </TitleContainer>
        <ButtonContainer>
          <CustomButton
          fill={Theme.colors.violet}
          width="280"
          text="My Promotions"/>
        </ButtonContainer>
      </View>
    )
  }
}

export default PromotionRow;
