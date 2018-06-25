import React from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text,ScrollView,
  TouchableOpacity,
} from 'react-native'
import Theme from '../../../theme';
import { MainContainer,
  HeadingText,
  TextFieldContainer,
  ContentContainer,
HeadingTextContainer } from './style';
import TextInput from '../../components/textfield/CustomTextField';
import CustomButton from '../../components/button/CustomButton';
import Card from '../../components/giftCardPopup/giftCard'
import { userSignUp } from './action'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { createWallet,getPrivateKey } from '../../EthereumLib/utils.js'

let password = 'Sky@1234';
let token='eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1Mjk2Nzc1NTIsImlkIjoiYmFsZWh1LWFwcCIsIm9yaWdfaWF0IjoxNTI5NjczOTUyLCJyb2xlcyI6WyJhcHAiXSwidXNlci1pZCI6IiJ9.YwjLTBH6BOlwEwHwhq2p-F4KxZJUdhX19E7WVAvPffEmGDPDQZBaR4PTuRGMgP7BARPQuPgaOFAxNfzT8Yyi6TJhqEXCnikG2rGjJaKRsaWMVzbYHSe0y-VXT8qyTuI26evmR1Y-1zyXiSfVoBxDdQHWcJ7dbGGqxqJCCbe9a7T-dzz3k1GUw8j2lzeYtSPmVWKbBdFO5djeVJattHo7h8tbG09Oa0iImBAKx83kWhyuggh1UrYyOtL8Lj80JlaDI-ao197WOeFWxp8xvknFK-BiCXh1QpPpqRWnPso9-xdLO1Ybl-NgPObt0izqfMckgkDwROxlYevU5UQ-LwOvHI_9THHg1zUtZWV58Qte93GF3QdQdNLtwA26RbVZPwC15uoM9A_4Xn1e0mHBK6_fA_GSgyTkplfR7aII9GBQweplqw9wN5jUiFSwF3DLRDv1lelb89tPQ74McyFmwP5T5Wsm-oJQJ04QAfbV-VRFUvhVwadN1e_awSyYY8tka0KIoIA9OCUjOfJW7NoYNhuqgWy2OVNJeleCg8VCX3FyoASoczgkd_LJsZMfiiLmvEIbrWdG6LNYmahD77Cfe0ukZLznOhvtxeZJVVtuNOChNHK2F5oPZAFL5r8wFT9sC6TZbXtYPATNSs1QEkgQJdE8ic38qdb9G3zLgxLJL2XrFx8'
let BalehuAddress = '0x8e867f1d7176482ecd2730b3a465e6b7cd128aec'

try {
  let data = createWallet(password,token,BalehuAddress)
  console.log(data);
} catch (e) {
    console.log(e);
}

  class SignupScreen extends React.Component {
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
        name:'',
        email:'',
        password:'',
        confirmPassword:''
      }
    }

    handleSignUp = () => {
      if(this.state.password === this.state.confirmPassword){
        this.props.userSignUp({
          name:this.state.name,
          email:this.state.email,
          password:this.state.password
        });
      }else {
        alert('Password not match')
      }
    }

    render () {
      let error = this.props.error;
      return(
        <View style={{flex:1}}>
        { error ? <Text>{error.message}</Text> : null}
        <ScrollView>
          <ContentContainer>
            <TextFieldContainer>
              <TextInput
                onChangeText={(text) => this.setState({name:text})}
                label={'Name'}
                width={'100%'}
                value= {this.state.name}/>
            </TextFieldContainer>
            <TextFieldContainer>
              <TextInput
                onChangeText={(text) => this.setState({email:text})}
                label={'Email Address'}
                width={'100%'}
                value= {this.state.email} />
            </TextFieldContainer>
            <TextFieldContainer>
              <TextInput
                onChangeText={(text) => this.setState({password:text})}
                label={'Password'}
                width={'100%'}
                secureTextEntry={true}
                value= {this.state.password}/>
            </TextFieldContainer>
            <TextFieldContainer>
              <TextInput
                onChangeText={(text) => this.setState({confirmPassword:text})}
                label={'Confirm Password'}
                width={'100%'}
                secureTextEntry={true}
                value= {this.state.confirmPassword} />
            </TextFieldContainer>
              <CustomButton
                style={{marginTop:20,marginBottom:20}}
                onPress={this.handleSignUp}
                fill={Theme.colors.lightBlue}
                text="Submit"/>
          </ContentContainer>
        </ScrollView>
        </View>
      )
    }
  }

  function mapDispatchToProps(dispatch) {
    return Object.assign(
      { dispatch: dispatch },
      bindActionCreators({userSignUp}, dispatch)
    );
  }

  const mapStateToProps = state => {
    let signUpReducer = state.signUpReducer
    return {
      error : signUpReducer.error
    };
  };

  export default connect(mapStateToProps, mapDispatchToProps)(SignupScreen);
