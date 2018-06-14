import React from 'react'
import PropTypes from 'prop-types'
import {
  View,ScrollView,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Dimensions,
} from 'react-native'
import Theme from '../../../theme';
import {
  MainContainer,
  CardContainer,
  TitleText,
  PromotionTitle,
  TabContainer,
  RowContainer,
  ContentContainer,
  ContentText,
  InnerContainer,
  RewardText
} from './style';
import CustomButton from '../../components/button/CustomButton';
let { height, width } = Dimensions.get("window");
import HeaderRightIcon from '../../components/header/HeaderRightIcon';
import HeaderLeftIcon from '../../components/header/HeaderLeftIcon';


class MyReward extends React.Component {
  static navigationOptions = (navigation) => ({
    headerTitle:(<View/>),
    headerLeft: (<HeaderLeftIcon icon={'left-arrow'} {...navigation}/>),
    headerRight: (<View/>),
  })

  render () {
    return(
      <MainContainer>
        <CardContainer>
          <PromotionTitle>
              <TitleText>My Rewards</TitleText>
          </PromotionTitle>
          <ContentContainer>
            <RowContainer>
              <RewardText>Reward 1</RewardText>
                <CustomButton
                  border={"#e0e0e0"}
                  textColor={"#757575"}
                  fontSize={Theme.fontSize.small}
                  width="115"
                  height="33"
                  text="Edit"

                  />
              </RowContainer>
              <InnerContainer>
              <ContentText>For $1000 USD spent</ContentText>
                <ContentText>Reward with 100 Balehu Coins</ContentText>
                </InnerContainer>
            </ContentContainer>
            <ContentContainer>
              <RowContainer>
                <RewardText>Reward 2</RewardText>
                  <CustomButton
                    border={"#e0e0e0"}
                    textColor={"#757575"}
                    fontSize={Theme.fontSize.small}
                    width="115"
                    height="33"
                    text="Edit"

                    />
                </RowContainer>
                <InnerContainer>
                <ContentText>For 2 Margaritas bought</ContentText>
                  <ContentText>Reward with 1 free Margarita</ContentText>
                  </InnerContainer>
              </ContentContainer>
        </CardContainer>
        </MainContainer>
      )
    }
  }

  export default MyReward;
