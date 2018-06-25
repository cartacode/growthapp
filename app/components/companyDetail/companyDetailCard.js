import React from "react";
import PropTypes from "prop-types";
import { TouchableOpacity, Text, View, Dimensions,ImageBackground,ScrollView } from "react-native";

import TextInput from "../textfield/CustomTextField";
import CustomButtom from "../button/CustomButton";
import CustomIcon from '../icon/svgicon'
import Swiper from 'react-native-swiper';
import Theme from "../../../theme";
import PromotionCard from "./promotions"
import { MainContainer, CompanyDetailContainer, IconContainer, ButtonContainer, ImageTextContainer, ImageText, DescriptionText, DetailContainer, DescriptionContainer, PromotionTitle ,PromotionsContainer} from './style'
let { height, width } = Dimensions.get("window");

const data = [
  {
    title:'Friday Salad Specials!',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.'
  },
  {
    title:'Saturday Salad Specials!',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.'
  }
]
const dummyImage = require('../../../assets/images/layer-1.png');

class CompanyDetail extends React.Component {
  render(){
    return(
      <ScrollView>
      <MainContainer>
        {
        this.props.businesses?
        this.props.businesses.map((data,i)=>{
          return <View key={i}>
                  <ImageBackground
                      source={require('../../../assets/images/layer-1.png')}
                      resizeMode="cover"
                      style={{ height: 200, position: "relative",width:500}}
                      >
                      <ImageTextContainer>
                        <ImageText>{data.name}</ImageText>
                      </ImageTextContainer>
                    </ImageBackground>
                    <CompanyDetailContainer>
                      <DescriptionContainer>
                        <DescriptionText detail>{data.description}</DescriptionText>
                        <IconContainer>
                          <DetailContainer>
                                <CustomIcon
                                name="location"
                                height="16"
                                width="16"
                                />
                              <DescriptionText>{data.address}{`\n`}{data.city},{data['state-or-province']} {data['postal-code']}</DescriptionText>
                          </DetailContainer>
                        <DetailContainer>
                            <CustomIcon
                            name="call"
                            height="14"
                            width="14"
                            />
                          <DescriptionText>{data.phone}</DescriptionText>
                        </DetailContainer>
                        {
                        //   <DetailContainer>
                        //     <CustomIcon
                        //     name="clock"
                        //     height="14"
                        //     width="14"
                        //     />
                        //     <DescriptionText>8:00 am to 10:00 pm</DescriptionText>
                        // </DetailContainer>
                      }
                        <ButtonContainer>
                          <CustomButtom
                            onPress={()=>{
                              this.props.setModalVisible(true,'Buy Gift Card');
                            }}
                            border={Theme.colors.lightBlue}
                            width={250}
                            text={"Buy Gift Card"}
                          />
                        </ButtonContainer>
                      </IconContainer>
                    </DescriptionContainer>
                    </CompanyDetailContainer>
                    <PromotionsContainer>
                      <PromotionTitle>Promotions</PromotionTitle>
                      {this.props.promotion?
                        this.props.promotion.map(e => {
                          if(e['business-id']==data.id)
                          return <PromotionCard data={e}/>
                        })
                      :null}
                    </PromotionsContainer>
                </View>
        }):null
      }
    </MainContainer>
    </ScrollView>
    );
  }
}
export default CompanyDetail;
