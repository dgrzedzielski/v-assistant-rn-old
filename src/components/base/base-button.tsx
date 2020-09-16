import React from 'react';
import styled from '@emotion/native';
import { colors } from 'styles/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ButtonContainer = styled.TouchableOpacity`
  background: ${colors.accent};
  padding: 12px 24px;
  max-width: 200px;
  border-radius: 24px;
`;

const ButtonText = styled.Text`
  color: ${colors.white};
  text-align: center;
`;

type BaseButtonProps = {
  onPress: () => void;
  children?: React.ReactNode;
  icon?: string;
};

export const BaseButton: React.FC<BaseButtonProps> = ({
  children,
  onPress,
  icon,
}) => {
  return (
    <ButtonContainer onPress={onPress}>
      {icon ? <Icon name={icon} /> : <ButtonText>{children}</ButtonText>}
    </ButtonContainer>
  );
};
