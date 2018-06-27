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
// import { createWallet } from '../../EthereumLib/utils.js'

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
        this.props.setModalVisible(true,'',{password:this.state.password})
        // this.props.userSignUp({
        //   name:this.state.name,
        //   email:this.state.email,
        //   password:this.state.password
        // });
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
