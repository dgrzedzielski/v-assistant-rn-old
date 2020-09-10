import React from 'react';
import styled from '@emotion/native';
import { colors } from 'src/styles/colors';

type NotesListItemProps = {
  title: string;
  content: string;
};

const Wrapper = styled.View`
  flex-basis: 50%;
  padding: 0 10px;
`;

const Container = styled.TouchableOpacity`
  elevation: 3;
  background: ${colors.panelBg};
  margin-bottom: 20px;
`;

const TitleContainer = styled.View`
  border-bottom: 1px solid ${colors.inputBorder};
  height: 40px;
  padding: 16px;
`;

const Title = styled.Text`
  font-size: 20px;
  color: ${colors.white};
`;

const Content = styled.Text`
  font-size: 14px;
  padding: 16px;
  color: ${colors.white};
`;

export const NotesListItem: React.FC<NotesListItemProps> = ({
  title,
  content,
}) => {
  return (
    <Wrapper>
      <Container>
        <TitleContainer>
          <Title>{title}</Title>
        </TitleContainer>
        <Content>{content}</Content>
      </Container>
    </Wrapper>
  );
};
