import React from 'react';
import { ScrollView, ScrollViewProps, StyleSheet } from 'react-native';

export const BaseScrollView: React.FC<ScrollViewProps> = ({
  children,
  style,
  ...props
}) => {
  return (
    <ScrollView style={[styles.container, style]} {...props}>
      {children}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
