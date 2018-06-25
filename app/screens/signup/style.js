import styled from "styled-components/native";
import Theme from '../../../theme';

export const ContentContainer = styled.View`
justify-content:center;
`;

export const HeadingText = styled.Text`
  color:${props=> Theme.colors.redBalehu};
  font-family:${props=> Theme.fontFamily.bold};
  font-size:${props=> Theme.fontSize.large};
`;

export const TextFieldContainer = styled.View`
margin-bottom:25px
`;
