import React from 'react';
import { Pressable, StyleSheet, PressableProps } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from 'styles/colors';

type ButtonWithIconProps = Omit<PressableProps, 'children'> & {
  icon: string;
  onPress: () => void;
  children?: undefined;
};

export const ButtonWithIcon: React.FC<ButtonWithIconProps> = ({
  icon,
  onPress,
  style,
  ...props
}) => {
  return (
    <Pressable
      onPress={onPress}
      android_ripple={{ color: colors.white, radius: 18 }}
      // @ts-ignore
      style={[styles.pressable, style]}
      {...props}>
      <Icon name={icon} style={styles.icon} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pressable: {
    padding: 12,
  },
  icon: {
    fontSize: 24,
    color: colors.white,
  },
});
