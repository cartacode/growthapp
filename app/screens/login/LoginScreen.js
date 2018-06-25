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
  TextFieldContainer,
  ForgotText,
  ForgotTextContainer,
  ButtonContianer,
  ContentContainer } from './style';
  import TextInput from '../../components/textfield/CustomTextField';
  import CustomButton from '../../components/button/CustomButton';
  import Card from '../../components/giftCardPopup/giftCard';

  import { connect } from "react-redux";
  import { login } from "./action";
  import { bindActionCreators } from "redux";


  class LoginScreen extends React.Component {
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
        username:'juned.skyward@gmail.com.',
        password:'Sky@1234'
      }
    }
    handleSubmit = () =>{
      this.props.login(this.state)
    }
    handleClose = () =>{
      this.props.navigation.goBack();
    }
    render () {
      return(
        <View style={{flex:1}}>
          <ContentContainer>
            {this.props.error?<Text>{this.props.error.message}</Text>:null}
          <TextFieldContainer>
            <TextInput
              value={this.state.username}
              onChangeText={(text) => this.setState({username:text})}
              label={'Email Address'}
              width={'100%'} />
          </TextFieldContainer>
          <TextFieldContainer>
            <TextInput
              value={this.state.password}
              onChangeText={(text) => this.setState({password:text})}
              secureTextEntry={true}
              label={'Password'}
              width={'100%'} />
          </TextFieldContainer>
          <ForgotTextContainer onPress={()=>{
            this.props.setModalVisible(true,'Recover Password');
            }}>
          <View style={{alignItems:'center'}}>
            <ForgotText> Forgot Password? </ForgotText>
          </View>
          </ForgotTextContainer>
            <CustomButton
              onPress={this.handleSubmit}
              style={{marginTop:80,marginBottom:20}}
              fill={Theme.colors.lightBlue}
              text="Submit"/>
          </ContentContainer>
        </View>
      )
    }
  }

  function mapDispatchToProps(dispatch) {
    return Object.assign(
      { dispatch: dispatch },
      bindActionCreators({
        login
      }, dispatch)
    );
  }

  const mapStateToProps = state => {
    let loginReducer = state.loginReducer
    return {
      error:loginReducer.error
    };
  };

  export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
