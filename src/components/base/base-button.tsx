import React from 'react';
import styled from '@emotion/native';
import { colors } from 'styles/colors';

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
  children: React.ReactNode;
  onPress: () => void;
};

export const BaseButton: React.FC<BaseButtonProps> = ({
  children,
  onPress,
}) => {
  return (
    <ButtonContainer onPress={onPress}>
      <ButtonText>{children}</ButtonText>
    </ButtonContainer>
  );
};
