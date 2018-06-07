import React from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native'
import Theme from '../../../theme';
import { MainContainer,
  HeadingText,
  TextFieldContainer,
  ButtonContianer,
  ContentContainer,
HeadingTextContainer,
CityContainer } from './style';
import TextInput from '../../components/textfield/CustomTextField';
import CustomButton from '../../components/button/CustomButton';

  class BusinessInformation extends React.Component {
    static navigationOptions = {
      headerVisible:false,
      headerStyle:{
        width:0,
        height:0,
      },
    }

    render () {
      return(
        <View style={{flex:1}}>
          <ContentContainer>
          <TextFieldContainer>
            <TextInput
              label={'Business Name'}
              width={260} />
          </TextFieldContainer>
          <TextFieldContainer>
            <TextInput
              label={'Business Address'}
              width={260} />
          </TextFieldContainer>
          <CityContainer>
          <TextFieldContainer>
            <TextInput
              label={'City'}
              width={120} />
          </TextFieldContainer>
          <TextFieldContainer>
            <TextInput
              label={'State'}
              width={120} />
          </TextFieldContainer>
        </CityContainer>
          <TextFieldContainer>
            <TextInput
              label={'Zip Code'}
              width={260} />
          </TextFieldContainer>
          <ButtonContianer>
            <CustomButton
              fill={Theme.colors.lightBlue}
              width="260"
              text="Submit"/>
          </ButtonContianer>
          </ContentContainer>
        </View>
      )
    }
  }

  export default BusinessInformation ;
