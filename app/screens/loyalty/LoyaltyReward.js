import React from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text,
  ImageBackground,
  Modal,
  TouchableOpacity,
  ScrollView
} from 'react-native'
import {MainContainer,ConsumerText,CheckbocConatiner,TextInputContainer,TextInputsContainer,ButtonContianer,AddProductText,RewardContainer} from './style';
import CustomButton from '../../components/button/CustomButton';
import CheckBox from 'react-native-checkbox';
import TextInput from '../../components/textfield/CustomTextField';

class LoyaltyReward extends React.Component {
  static navigationOptions = {
    headerVisible:false,
    headerStyle:{
      width:0,
      height:0,
    },
  }
  render(){
    return(
      <MainContainer>
        <ConsumerText>Consumer needs to</ConsumerText>
        <CheckbocConatiner>
          <CheckBox
          label='Spend a minimum amout'
          checkedImage={require('./black-check-box-with-white-check.png')}
          uncheckedImage={require('./square.png')}
          checkboxStyle={{width:16, height:16}}
          labelStyle={{color:'#424242',fontSize:14, fontFamily:'NunitoSans-SemiBold'}}
          />
        </CheckbocConatiner>
        <TextInputContainer>
          <TextInput
          placeholder="$50"
          width="260" />
        </TextInputContainer>
        <CheckbocConatiner>
          <CheckBox
          label='Buy specific product'
          checkedImage={require('./black-check-box-with-white-check.png')}
          uncheckedImage={require('./square.png')}
          checkboxStyle={{width:16, height:16}}
          labelStyle={{color:'#424242',fontSize:14, fontFamily:'NunitoSans-SemiBold'}}
          />
        </CheckbocConatiner>
        <TextInputsContainer>
          <TextInputContainer>
            <TextInput
            placeholder="Product"
            width="120" />
            </TextInputContainer>
            <TextInputContainer>
            <TextInput
            placeholder="Quantity"
            width="120" />
            </TextInputContainer>
        </TextInputsContainer>
        <AddProductText>
          Add another product
        </AddProductText>
        <RewardContainer>
          <ConsumerText>Reward with</ConsumerText>
          <CheckbocConatiner>
            <CheckBox
            label='Balehu Coins'
            checkedImage={require('./gray-checked.png')}
            uncheckedImage={require('./gray-unchecked.png')}
            checkboxStyle={{width:16, height:16}}
            labelStyle={{color:'#424242',fontSize:14, fontFamily:'NunitoSans-SemiBold'}}
            />
          </CheckbocConatiner>
          <CheckbocConatiner>
            <CheckBox
            label='Free product(s)'
            checkedImage={require('./gray-checked.png')}
            uncheckedImage={require('./gray-unchecked.png')}
            checkboxStyle={{width:16, height:16}}
            labelStyle={{color:'#424242',fontSize:14, fontFamily:'NunitoSans-SemiBold'}}
            />
          </CheckbocConatiner>
        </RewardContainer>
        <ButtonContianer>
          <CustomButton
            fill={Theme.colors.lightBlue}
            width="260"
            text="Submit"/>
        </ButtonContianer>
      </MainContainer>
    )
  }
}
export default LoyaltyReward;
