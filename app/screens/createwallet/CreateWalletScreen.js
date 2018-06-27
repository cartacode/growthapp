import React from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native'
import Theme from '../../../theme';
import { MainContainer,
  HeadingText,
  ButtonContianer,
  ContentContainer,
  HeadingTextContainer,
  DetailText,
  BackupText,
  KeyText,
  TextContainar} from './style';
  import TextInput from '../../components/textfield/CustomTextField';
  import CustomButton from '../../components/button/CustomButton';
  import Card from '../../components/giftCardPopup/giftCard'
  import { GetPrivateKey } from '../../EthereumLib/utils.js'


  class CreateWalletScreen extends React.Component {
    static navigationOptions = {
      headerVisible:false,
      headerStyle:{
        width:0,
        height:0,
      },
    }

    constructor(){
      super()
      this.state = {
        address:''
      }
    }

    componentWillMount(){
      let modalData = this.props.modalData;
      if(modalData.password){
        let password = modalData.password;
        console.log(GetPrivateKey(password));
      }
    }

    handleClick = () =>{
       this.props.setModalVisible(false);
      this.props.navigation.navigate('MapRoute');
    }

    render () {
      let wallet = this.props.modalData;
      return(
        <View style={{flex:1}}>
          <ContentContainer>
            <DetailText>Write down the backup words and store in a safe place. This is the only way to restore your Balehu Wallet if your phone is lost, stolen or upgraded.</DetailText>
            <BackupText>Write down backup phrase:</BackupText>
            <KeyText>{this.state.address}</KeyText>
          </ContentContainer>
          <ButtonContianer>
            <CustomButton
              style={{marginBottom:20}}
              fill={Theme.colors.lightBlue}
              width="260"
              text="Get Started"
              onPress={this.handleClick}/>
          </ButtonContianer>
      </View>
      )
    }
  }

  export default CreateWalletScreen ;
