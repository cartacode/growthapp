import styled from "styled-components/native";
import Theme from '../../../theme';
export const MainContainer = styled.View`
  flex:1;
  background-color:#fafafa;
  padding:20px;
`;
export const CardContainer = styled.View`
  background-color:#ffffff;
  elevation:2;
`;

export const HeaderText = styled.Text`
color:${props => Theme.colors.darkGray};
font-family:${props=> Theme.fontFamily.bold};
font-size:${props=> Theme.fontSize.header};
text-align:left;
`;
export const TitleContainer = styled.View`
margin:20px;
align-items:flex-start;
`;
export const TitleText = styled.Text`
color:${props => Theme.colors.darkGray};
font-family:${props=> Theme.fontFamily.bold};
font-size:${props=> Theme.fontSize.midregular};
`;
export const DateText = styled.Text`
color:${props => Theme.colors.warmGrey};
font-family:${props=> Theme.fontFamily.bold};
font-size:${props=> Theme.fontSize.midregular};
margin-bottom:5px;
`;
export const ChartContainer = styled.View`
 height: 300px;
  padding: 20px;
  flex-direction: row;
  position:relative;
`;
export const ChartInnerContainer =styled.View`
flex: 1;
 margin-left: 10px ;

`;
export const RoundContentContainer =styled.View`
flex-direction: row;
justify-content:space-between;
margin-right:20px;
margin-left:50px;

`;

export const DetailCardContainer = styled.View`
  background-color:#ffffff;
  elevation:3;
  width:150px;
  align-items:flex-start;
  padding:10px 15px;
  position:absolute;
  top:50%;
  left:40%;
`;
