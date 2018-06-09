import React from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text,TextInput,
  ImageBackground,
  Modal,
  TouchableOpacity,
  ScrollView
} from 'react-native'
import {ButtonContainer,ChangesButtonContainer, SaveChangesText } from './style';
import CustomButton from '../../components/button/CustomButton';


class SaveChanges extends React.Component {
  static navigationOptions = {
    headerVisible:false,
    headerStyle:{
      width:0,
      height:0,
    },
  }
  render(){
  return(
      <View>
        <SaveChangesText>Save changes to your promotion before closing?</SaveChangesText>
        <ButtonContainer changes>
            <CustomButton
            textColor={Theme.colors.warmGrey}
            fill={Theme.colors.inputBackgroundColor}
            width="260"
            text="Discard Changes"
            />
          <ChangesButtonContainer>
            <CustomButton
              fill={Theme.colors.lightBlue}
              width="260"
              text="Save Changes"
            />
          </ChangesButtonContainer>
        </ButtonContainer>
      </View>
    )
  }
}
export default SaveChanges;
