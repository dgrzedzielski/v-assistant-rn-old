import React from 'react';
import { Pressable, Text, StyleSheet, PressableProps } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from 'styles/colors';

type ButtonAddProps = Omit<PressableProps, 'children'> & {
  onPress: () => void;
  icon: string;
};

export const ButtonFloating: React.FC<ButtonAddProps> = ({
  onPress,
  icon,
  style,
  ...props
}) => {
  return (
    <Pressable
      android_ripple={{ radius: 24, color: colors.white }}
      onPress={onPress}
      // @ts-ignore
      style={[styles.pressable, style]}
      {...props}>
      <Text style={styles.text}>
        <Icon name={icon} size={24} />
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pressable: {
    backgroundColor: colors.accent,
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 24,
    bottom: 24,
    zIndex: 1000,
  },
  text: {
    fontSize: 20,
    color: colors.white,
  },
});
