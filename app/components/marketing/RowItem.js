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

class RowItem extends React.Component {
  static navigationOptions = {
    headerVisible:false,
    headerStyle:{
      width:0,
      height:0,
    },
  }

  render () {
    return(
        <CardContainer>
          <TitleContainer>
              <TitleText>{this.props.title}</TitleText>
          </TitleContainer>
          <ButtonContainer>
            <CustomButton
              fill={this.props.color}
              width="285"
              text={this.props.buttonTitle}  />
            </ButtonContainer>
          </CardContainer>
      )
    }
  }

  export default RowItem;
