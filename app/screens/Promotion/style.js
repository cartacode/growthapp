import styled from "styled-components/native";
import Theme from '../../../theme';
import { Dimensions, StyleSheet } from 'react-native'

const deviceWidth = Dimensions.get('window').width

//Container
export const MainContainer = styled.View`

`;

export const PromotionContainer = styled.View`
  padding-left:20px;
  padding-right:20px;
  padding-top:30px;
  padding-bottom:40px;
  background-color:#ffffff;
  elevation:3;
`;

export const MarketPlaceContainer = styled.View`
  margin-top:15px;
  padding-left:20px;
  padding-right:20px;
  padding-top:30px;
  padding-bottom:40px;
  background-color:#ffffff;
  elevation:3;
`;
export const DropContainer =styled.View`
  margin-top:15px;
`;
export const CommonContainer = styled.View`
  margin-top:20px
`;

export const DayContainer = styled.View`
  display:flex;
  flex-direction:row;
  margin-top:${props=> props.row ? '10px': '0px'};
`;

export const DayBoxView = styled.TouchableOpacity`
  width: ${deviceWidth / 4.5};
  height: 50px;
  background-color: ${props => props.selectedDay == props.day ? Theme.colors.twitterBlue : Theme.colors.inputBackgroundColor};
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  border-radius:3px;
  elevation: 1;
`

export const ButtonContainer = styled.View`
  margin-top:30px;
  justify-content:center;
  padding-left:20px;
  padding-right:20px;
  align-items:center;
`

export const ImageButtonContainer = styled.View`
  position:absolute;
  right:15px;
  left:20px;
  bottom:15px;
`;
export const Container = styled.View`
  flex:1px;
  flex-direction:row;
`;
export const RadioContainer = styled.View`
  flex:0.5px;
`;
export const InputContainer = styled.View`
  flex:0.5px;
  justify-content:flex-start;
`;
export const ToolBar =styled.View`
  height:35px;
  flex:1;
  flex-direction:row;
  background-color:#e0e0e0;
  justify-content:flex-start;
  align-items:flex-start;
  padding-left:20px;
  padding-top:10px;
  padding-bottom:10px;
`;
export const IconContainer = styled.TouchableOpacity`
  margin-right:20px;
  margin-top:${props => props.italic ? '2px' : '0px'};
`;


//Text
export const TitleText = styled.Text`
  color:${props=> Theme.colors.darkGray};
  font-family:${props=> Theme.fontFamily.bold};
  font-size:${props=> Theme.fontSize.header};
`;
export const HeadingText = styled.Text`
  color:${props=> Theme.colors.darkGray};
  font-family:${props=> Theme.fontFamily.bold};
  font-size:${props=> Theme.fontSize.medium};
  margin-bottom:15px;
`;

export const DayText = styled.Text`
  color:${props => props.selectedDay == props.day ? '#ffffff' : '#9e9e9e'};
  font-family:${props=> Theme.fontFamily.regular};
  font-size:${props=> Theme.fontSize.midregular};
`

export const BitTextInput = styled.TextInput`
  height: 40px;
  padding:10px;
  font-size:${props=> Theme.fontSize.midregular};
  fontFamily:${props=>Theme.fontFamily.regular}
  color:${props=>Theme.colors.warmGrey};
  backgroundColor: ${props=>Theme.colors.inputBackgroundColor};
`;
