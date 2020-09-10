import React from 'react';
import { View, Text, TouchableNativeFeedback } from 'react-native';
import { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs/src/types';

export const TabBarButton: React.FC<BottomTabBarButtonProps> = ({
  children,
  onPress,
}) => {
  return (
    <TouchableNativeFeedback onPress={onPress}>
      <Text>
        <Text>Tab</Text>
        {children}
      </Text>
    </TouchableNativeFeedback>
  );
};
