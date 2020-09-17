import React from 'react';
import { StyleSheet, Text, TextProps } from 'react-native';
import { colors } from 'styles/colors';

export const BaseText: React.FC<TextProps> = ({
  children,
  style,
  ...props
}) => {
  return (
    <Text style={[styles.text, style]} {...props}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    color: colors.white,
  },
});
