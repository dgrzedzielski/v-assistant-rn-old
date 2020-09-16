import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { colors } from 'styles/colors';

type BaseButtonProps = {
  onPress: () => void;
  children?: React.ReactNode;
};

export const BaseButton: React.FC<BaseButtonProps> = ({
  children,
  onPress,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={styles.container}
      android_ripple={{ radius: 24, color: colors.white }}>
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.accent,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 24,
  },
  text: {
    color: colors.white,
    textAlign: 'center',
  },
});
