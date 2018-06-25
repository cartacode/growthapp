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
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { saveUserSettings } from './action'
import { logOut } from '../../action/common';

class SettingComponent extends React.Component {
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
      name:'juned',
      email:'juned.skyward@gmail.com',
      password:'Sky@1234',
      confirmPassword:''
    }
  }
  handleSaveSetting = () =>{
    if(this.state.password === this.state.confirmPassword){
      this.props.saveUserSettings(this.state);
    }
    else{
      alert('Password not match')
    }
  }

  render () {
    let error = this.props.error
    return(
      <ScrollView>
        <MainContainer>
        {error ? <Text>{error.message}</Text>:null}
          <ContentContainer>
            <TextFieldContainer>
              <TextInput
                value={this.state.name}
                onChangeText={(text) => this.setState({name:text})}
                label={'Name'}
                width={'100%'}
                placeholder={'John Doe'} />
            </TextFieldContainer>
            <TextFieldContainer>
              <TextInput
                value={this.state.email}
                onChangeText={(text) => this.setState({email:text})}
                label={'Email Address'}
                width={'100%'}
                placeholder={'email@sample.com'}
                />
            </TextFieldContainer>
            <TextFieldContainer>
              <TextInput
                value={this.state.password}
                onChangeText={(text) => this.setState({password:text})}
                label={'Password'}
                width={'100%'}
                secureTextEntry={true}
                placeholder={'********'} />
            </TextFieldContainer>
            <TextFieldContainer>
              <TextInput
                value={this.state.confirmPassword}
                onChangeText={(text) => this.setState({confirmPassword:text})}
                label={'Confirm Password'}
                width={'100%'}
                secureTextEntry={true}
                placeholder={'Re-enter your password'} />
            </TextFieldContainer>
            <ButtonContianer>
              <CustomButton
                fill={Theme.colors.lightBlue}
                width="290"
                onPress={this.handleSaveSetting}
                text="Save settings"/>
            </ButtonContianer>
          </ContentContainer>
          <LogoutButtonContianer>
            <CustomButton
              onPress={this.props.logOut}
              fill={Theme.colors.redBalehu}
              width="290"
              text="Log Out"/>
          </LogoutButtonContianer>
        </MainContainer>
      </ScrollView>
    )
  }
}
function mapDispatchToProps(dispatch) {
  return Object.assign(
    { dispatch: dispatch },
    bindActionCreators({ saveUserSettings,logOut }, dispatch)
  );
}

const mapStateToProps = state => {
  let settingReducer = state.settingReducer
  return {
    error: settingReducer.error
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingComponent);
