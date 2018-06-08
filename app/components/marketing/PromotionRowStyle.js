import React from 'react'
import PropTypes from 'prop-types'
import styled from "styled-components/native";
import Theme from '../../../theme';

export const MainContainer = styled.View`
border-bottom-width:1px;
border-bottom-color: #DCDCDC;
margin:0px 20px 10px 20px;

`;
export const RowContainer = styled.View`
flex-direction:row;
align-items:center;
justify-content:space-between;
padding:0px 10px 20px 0px;

`;
export const BottomRowContainer = styled.View`
flex-direction:row;
align-items:center;
justify-content:space-between;
padding:0px 10px 20px 0px;

`;

export const ImageContainer = styled.View`
padding-top:5px ;
padding-right:15px;
`;
export const DetailContianer = styled.View`
  flex-wrap:wrap;
  align-items:flex-start;
  justify-content:center;
  width:165px;
  padding-right:10px;

`;

export const ButtonContainer = styled.View`

`;
export const SwitchContainer = styled.View`
align-items:center;
justify-content:center;

`;

export const TitleText = styled.Text`
color:${props => Theme.colors.darkGray};
font-family:${props=> Theme.fontFamily.bold};
font-size:${props=> Theme.fontSize.medium};
margin-top:10px;
`;
export const ContentText = styled.Text`
color:${props => Theme.colors.warmGrey};
font-family:${props=> Theme.fontFamily.regular};
font-size:${props=> Theme.fontSize.small};
text-align:left;

`;

export const ActiveText = styled.Text`
color:${props => Theme.colors.darkGray};
font-family:${props=> Theme.fontFamily.bold};
font-size:${props=> Theme.fontSize.small};

`;
