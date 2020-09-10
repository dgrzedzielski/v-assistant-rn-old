import React from 'react';
import styled from '@emotion/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from 'styles/colors';

type ButtonAddProps = {
  onPress: () => void;
  icon: string;
};

const ButtonContainer = styled.TouchableOpacity`
  background-color: ${colors.accent};
  width: 48px;
  height: 48px;
  border-radius: 24px;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 24px;
  bottom: 24px;
  z-index: 1000;
`;

const ButtonText = styled.Text`
  font-size: 20px;
  color: ${colors.white};
`;

export const ButtonFloating: React.FC<ButtonAddProps> = ({ onPress, icon }) => {
  return (
    <ButtonContainer onPress={onPress}>
      <ButtonText>
        <Icon name={icon} size={24} />
      </ButtonText>
    </ButtonContainer>
  );
};
