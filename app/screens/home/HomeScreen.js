import React from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text,
  ImageBackground,
  Modal,
  TouchableOpacity,
  ScrollView,
} from 'react-native'
import {MainContainer,
  LogoText,
  HeadingText,
  ShopText,
  ButtonContianer,
  IconContainer,
  SignUpButtonContainer,
  LoginButtonContainer} from './style';
  import CustomButton from '../../components/button/CustomButton';
  import CustomIcon from '../../components/icon/svgicon';
  import Card from '../../components/giftCardPopup/giftCard';
  import SignupScreen from '../signup/signupScreen';
  import LoginScreen from '../login/LoginScreen';
  import CreateWalletScreen  from '../createWallet/CreateWalletScreen';
  import ForgotPasswordScreen from '../forgotpassword/ForgotPasswordScreen';

  import { connect } from "react-redux";
  import { ActionCreators } from "../../action";
  import { bindActionCreators } from "redux";


  class HomeScreen extends React.Component {
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
     modalVisible: false,
     modalName:'',
     modalData:null
   }
  }
  componentWillMount() {
    // this.props.demo()
  }

   setModalVisible = (visible,modal,data) => {
     this.setState({
       modalVisible:visible,
       modalName:modal,
       modalData:data
     });
   }
    render () {
      return(
        <ImageBackground resizeMode="cover" source={require('../../../assets/images/1_background_img.jpg')} style={{flex:1,width:'100%',justifyContent:'center',alignItems:'center'}}>
          <CustomIcon name="logo"/>
          <HeadingText>Marketplace</HeadingText>
          <ShopText>Shop local and be rewarded</ShopText>
          <ButtonContianer>
            <SignUpButtonContainer>
            <CustomButton
              onPress={() => {
                this.setModalVisible(true,'Sign Up');
              }}
              fill={Theme.colors.lightBlue}
              text="Create new account"
              />
            </SignUpButtonContainer>
            <LoginButtonContainer>
            <CustomButton
              onPress={() => {
                this.setModalVisible(true,'Log In');
              }}
              fill={Theme.colors.lightBlue}
              text="Login"
              />
            </LoginButtonContainer>
          </ButtonContianer>
          <Modal
          onRequestClose={()=>{}}
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          >
          <View style={{flex:1,backgroundColor:'rgba(0,0,0,0.6)',paddingTop:50,paddingBottom:50,paddingLeft:27,paddingRight:27}}>
            {
               this.state.modalName === 'Create a Wallet' ?
               null :
              <IconContainer onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <CustomIcon
                  name="cross"
                  fill='#000000'
                  height="15"
                  width="15"
                  />
              </IconContainer>

            }
            <ScrollView>
              <Card title={this.state.modalName}>
                {
                  this.state.modalName=='Sign Up'?
                  <SignupScreen  setModalVisible={this.setModalVisible}/>
                  :this.state.modalName=='Log In'?
                    <LoginScreen setModalVisible={this.setModalVisible}/>
                  :this.state.modalName=='Recover Password'?
                    <ForgotPasswordScreen setModalVisible={this.setModalVisible} />
                  :<CreateWalletScreen modalData={this.state.modalData} navigation={this.props.navigation} setModalVisible={this.setModalVisible} />
                }
              </Card>
            </ScrollView>
          </View>
        </Modal>
        </ImageBackground>
      )
    }
  }
  function mapDispatchToProps(dispatch) {
    return Object.assign(
      { dispatch: dispatch },
      bindActionCreators(ActionCreators, dispatch)
    );
  }

  const mapStateToProps = state => {
    return {
    };
  };

  export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
