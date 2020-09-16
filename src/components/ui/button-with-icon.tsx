import React from 'react';
import styled from '@emotion/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors } from 'styles/colors';

const ButtonContainer = styled.Pressable`
  padding: 12px;
`;

const ButtonIcon = styled(Icon)`
  color: ${colors.white};
  font-size: 24px;
`;

type ButtonWithIconProps = {
  icon: string;
  onPress: () => void;
};

export const ButtonWithIcon: React.FC<ButtonWithIconProps> = ({
  icon,
  onPress,
}) => {
  return (
    <ButtonContainer
      onPress={onPress}
      android_ripple={{ color: colors.white, radius: 18 }}>
      <ButtonIcon name={icon} />
    </ButtonContainer>
  );
};
