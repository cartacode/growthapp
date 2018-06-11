import styled from "styled-components/native";
import Theme from '../../../theme';

export const MainContainer = styled.View`
`;

export const ConsumerText = styled.Text`
color:${props=> Theme.colors.darkGray};
font-family:${props=> Theme.fontFamily.bold};
font-size:${props=> Theme.fontSize.medium};
`;

export const CheckbocConatiner = styled.View`
margin-top:20px;
`;
export const TextInputContainer = styled.View`
margin-top:10px;
`;
export const TextInputsContainer = styled.View`
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:space-between;
`;

export const AddProductText = styled.Text`
color:#5c9eff;
font-family:${props=> Theme.fontFamily.bold};
font-size:14px;
margin-top:20px;
`;

export const RewardContainer = styled.View`
  margin-top:30px;
`;

export const ButtonContianer = styled.View`
  margin-top:20px;
`;
