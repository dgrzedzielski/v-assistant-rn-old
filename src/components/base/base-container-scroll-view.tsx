import React from 'react';
import styled from '@emotion/native';
import { colors } from 'styles/colors';
import { SafeAreaContainer } from './base-container';
import { BaseScrollView } from './base-scroll-view';

const Container = styled(BaseScrollView)`
  background: ${colors.screenBg};
  padding: 24px;
  position: relative;
`;

export const BaseContainerScrollView: React.FC = ({ children }) => {
  return (
    <SafeAreaContainer>
      <Container>{children}</Container>
    </SafeAreaContainer>
  );
};
