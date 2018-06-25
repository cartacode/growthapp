import React from "react";
import PropTypes from "prop-types";
import { TouchableOpacity, Text, View, Dimensions,Modal,ScrollView } from "react-native";
import TextInput from "../textfield/CustomTextField";
import CustomButtom from "../button/CustomButton";
import { MainContainer, CardContainer, PromotionContainer, IconContainer, Container, SubContainer, TitleText, CoinInfoText, CoinText, PriceText } from "./style";
import CustomIcon from '../icon/svgicon'
import Theme from "../../../theme";
import Card from '../giftCardPopup/giftCard';
import SendCoin from '../../screens/coin/sendCoin';
import ReceiveCoin from '../../screens/coin/coinsTab';
import RedeemPromotion from '../../screens/redeempromotion/RedeemPromotion';
import GiftCardBalance from '../../screens/cardbalance/GiftCardBalance';
import CompanyCash from '../../screens/companyCash/CompanyCash';
import QrCodeScan from '../qrCodeScan/qrCode';
import TransferNotification from '../../screens/transferNotification/transferNotification';
import TranscationHistory from '../../screens/history/TranscationHistory';
import LoyaltyReward from '../../screens/loyalty/LoyaltyReward';

class Wallets extends React.Component {
  static navigationOptions = {
    headerVisible:false,
  }

  constructor(){
    super();
    this.state = {
     modalVisible: false,
     modalName:''
   }
  }
   setModalVisible = (visible,modal) => {
     this.setState({modalVisible: visible,modalName:modal});
   }
  render(){
    return(
      <ScrollView>
      <MainContainer>
        <CardContainer>
          <Container primary>
            <TitleText>Balehu Coins</TitleText>
            <CoinInfoText>1 coin = $.01 usd</CoinInfoText>
          </Container>

          <SubContainer>
            <CoinText>0.00</CoinText>
            <PriceText>$.01 USD </PriceText>
          </SubContainer>

          <View style={{marginTop:20,flexDirection:'row',justifyContent:'space-between'}}>
            <CustomButtom
              style={{width:'48%'}}
              onPress={() => {
                this.setModalVisible(true,'Send Coins');
              }}
              fill={Theme.colors.green}
              text={"Send Coins"}
            />
            <CustomButtom
              style={{width:'48%'}}
              onPress={() => {
                this.setModalVisible(true,'Receive Coins');
              }}
              fill={Theme.colors.violet}
              text={"Receive Coins"}
            />
        </View>
        </CardContainer>

        <CardContainer>
        {
            //<TitleText>Promotions</TitleText>
        }
          <PromotionContainer>
            <CustomButtom
              onPress={() => {
                this.setModalVisible(true,'Redeem Promotion');
              }}
              fill={Theme.colors.PromotionBlue}
              text={"Promotions"}
            />
          </PromotionContainer>
        </CardContainer>

        <CardContainer>
            <TitleText>Loyalty Rewards</TitleText>
          <PromotionContainer>
            <CustomButtom
              onPress={() => {
                this.setModalVisible(true,'Loyalty Reward');
              }}
              fill={'#1e88e5'}
              text={"Rewards Progress"}
            />
          </PromotionContainer>
        </CardContainer>

        <CardContainer>
            <TitleText>Transaction History</TitleText>
          <PromotionContainer>
            <CustomButtom
              onPress={() => {
                this.setModalVisible(true,'Transaction History');
              }}
              fill={'#ffffff'}
              border={'#9e9e9e'}
              borderWidth={'1px'}
              text={"View History"}
            />
          </PromotionContainer>
        </CardContainer>


        <CardContainer>
        {
          //<TitleText>Merchant Cash</TitleText>
      }
          <PromotionContainer>
            <CustomButtom
              onPress={() => {
                this.setModalVisible(true,'Gift Card Balnance');
              }}
              fill={Theme.colors.purple}
              width={310}
              text={"Merchant Cash"}
            />
          </PromotionContainer>
        </CardContainer>
        <Modal
        animationType="slide"
        transparent={true}
        visible={this.state.modalVisible}
        >
        <View style={{flex:1,backgroundColor:'rgba(0,0,0,0.6)',paddingTop:50,paddingBottom:50,paddingLeft:27,paddingRight:27}}>
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
          <ScrollView>
            <Card title={this.state.modalName=='Receive Coins'?'':this.state.modalName}>
              {
                this.state.modalName=='Send Coins'?
                <SendCoin  setModalVisible={this.setModalVisible}/>
                :this.state.modalName=='Receive Coins'?
                  <ReceiveCoin setModalVisible={this.setModalVisible}/>
                :this.state.modalName=='Redeem Promotion'?
                  <RedeemPromotion setModalVisible={this.setModalVisible} />
                :this.state.modalName=='Gift Card Balnance'?
                  <GiftCardBalance setModalVisible={this.setModalVisible} />
                : this.state.modalName=='Scan QR code'?
                  <QrCodeScan setModalVisible={this.setModalVisible} />
                :this.state.modalName=='Loyalty Reward'?
                  <LoyaltyReward setModalVisible={this.setModalVisible} />
                  :this.state.modalName== 'Transaction History'?
                  <TranscationHistory setModalVisible={this.setModalVisible} />
                :<CompanyCash navigation={this.props.navigation} setModalVisible={this.setModalVisible}/>
              }
            </Card>
          </ScrollView>
        </View>
      </Modal>
      </MainContainer>
      </ScrollView>
    );
  }
}
export default Wallets;
