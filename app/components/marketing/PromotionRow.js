import React from 'react'
import PropTypes from 'prop-types'
import {
  View,ScrollView,
  Text,
  Image,
  TouchableOpacity,
  Switch,
} from 'react-native'
import Theme from '../../../theme';
import {
  MainContainer,
  ButtonContainer,
  RowContainer,
  TitleText,
  ContentText,
  DetailContianer,
  ImageContainer,
  SwitchContainer,
  ContentContaner,
  BottomRowContainer,
  ActiveText,
} from './PromotionRowStyle.js';
import CustomButton from '../button/CustomButton';

class PromotionRow extends React.Component {
  static navigationOptions = {
    headerVisible:false,
    headerStyle:{
      width:0,
      height:0,
    },
  }
  constructor() {
    super();
    this.state = {
      switchValue: false,
    }
  }
  toggleSwitch = (value) => {
    this.setState({switchValue: value})
  }

  render () {
    let data = this.props.data ? this.props.data : ''
    return(
      <MainContainer>
        <RowContainer>
          <ImageContainer>
            <Image
            source={require('../../../assets/images/layer-1.png')} style={{width:120,height:70}}/>
        </ImageContainer>
        <DetailContianer>
          <TitleText>{data.title}</TitleText>
          <ContentText>{data.description} </ContentText>
        </DetailContianer>
      </RowContainer>
      <BottomRowContainer>
        <SwitchContainer>
        <Switch
          onValueChange = {this.toggleSwitch}
          value={this.state.switchValue}
          onTintColor="#e3e5ef"
          thumbTintColor={Theme.colors.skyBlue}
          tintColor="#e3e5ef"/>
        </SwitchContainer>
        <SwitchContainer>
        <ActiveText>Active</ActiveText>
        </SwitchContainer>
        <ButtonContainer>
          <CustomButton
            border={"#e0e0e0"}
            textColor={"#757575"}
            fontSize={Theme.fontSize.small}
            width="96"
            height="33"
            text="Edit Promotion"/>
        </ButtonContainer>
        <ButtonContainer>
          <CustomButton
            border={"#e0e0e0"}
            textColor={"#757575"}
            fontSize={Theme.fontSize.small}

            width="85"
            height="33"

            text="Analytics"/>
        </ButtonContainer>

      </BottomRowContainer>

    </MainContainer>
  )
}
}

export default PromotionRow;
