import React from 'react'
import PropTypes from 'prop-types'
import {
  View,ScrollView,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView
} from 'react-native'
import Theme from '../../../theme';
import { MainContainer,
  TextFieldContainer,
  ButtonContianer,
  ContentContainer,
  LogoutButtonContianer,
} from './style';
import TextInput from '../textfield/CustomTextField';
import CustomButton from '../button/CustomButton';

class SettingComponent extends React.Component {
  static navigationOptions = {
    headerVisible:false,
    headerStyle:{
      width:0,
      height:0,
    },
  }

  render () {
    return(
        <MainContainer>
          <ContentContainer>
            <TextFieldContainer>
              <TextInput
                label={'Name'}
                width={310}
                placeholder={'John Doe'} />
            </TextFieldContainer>
            <TextFieldContainer>
              <TextInput
                label={'Email Address'}
                width={310}
                placeholder={'email@sample.com'}
                />
            </TextFieldContainer>
            <TextFieldContainer>
              <TextInput
                label={'Password'}
                width={310}
                secureTextEntry={true}
                placeholder={'********'} />
            </TextFieldContainer>
            <ButtonContianer>
              <CustomButton
                fill={Theme.colors.lightBlue}
                width="290"
                text="Save settings"/>
            </ButtonContianer>
          </ContentContainer>
          <LogoutButtonContianer>
            <CustomButton
              fill={Theme.colors.redBalehu}
              width="290"
              text="Log Out"/>
          </LogoutButtonContianer>
        </MainContainer>

    )
  }
}

export default SettingComponent;
