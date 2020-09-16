import React from 'react';
import styled from '@emotion/native';
import { colors } from 'src/styles/colors';
import { useNavigation } from '@react-navigation/native';
import { AvailableScreens } from 'src/available-screens';

type NotesListItemProps = {
  id: string;
  title: string;
  content: string;
};

const Wrapper = styled.View`
  flex-basis: 50%;
  padding: 0 10px;
  max-height: 300px;
  margin-bottom: 20px;
`;

const Container = styled.TouchableOpacity`
  elevation: 3;
  background: ${colors.panelBg};
  height: 100%;
`;

const TitleContainer = styled.View`
  border-bottom: 1px solid ${colors.inputBorder};
  padding: 12px 16px;
`;

const Title = styled.Text`
  font-size: 20px;
  color: ${colors.white};
`;

const ContentContainer = styled.View`
  padding: 12px 16px 16px;
`;

const Content = styled.Text`
  font-size: 14px;
  color: ${colors.white};
  max-height: 230px;
  overflow: hidden;
`;

export const NotesListItem: React.FC<NotesListItemProps> = ({
  id,
  title,
  content,
}) => {
  const navigation = useNavigation();
  const goToNoteDetails = () => {
    navigation.navigate(AvailableScreens.NotesDetails, {
      id,
    });
  };

  return (
    <Wrapper>
      <Container onPress={goToNoteDetails}>
        <TitleContainer>
          <Title>{title}</Title>
        </TitleContainer>
        <ContentContainer>
          <Content>{content}</Content>
        </ContentContainer>
      </Container>
    </Wrapper>
  );
};
