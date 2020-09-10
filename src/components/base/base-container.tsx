import React from 'react';
import styled from '@emotion/native';
import { colors } from 'styles/colors';
import { SafeAreaView } from 'react-native-safe-area-context';

export const SafeAreaContainer = styled(SafeAreaView)`
  flex: 1;
`;

export const ViewContainer = styled.View`
  flex: 1;
  background: ${colors.screenBg};
  padding: 24px;
  position: relative;
`;

export const BaseContainer: React.FC = ({ children }) => {
  return (
    <SafeAreaContainer>
      <ViewContainer>{children}</ViewContainer>
    </SafeAreaContainer>
  );
};
