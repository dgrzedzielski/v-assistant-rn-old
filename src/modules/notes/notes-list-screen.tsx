import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { BaseContainer } from 'components/base/base-container';
import { ButtonFloating } from 'components/ui/button-floating';
import { useSelector } from 'react-redux';
import { RootState } from 'src/root-reducer';
import { AvailableScreens } from 'src/available-screens';
import { FlatList, View } from 'react-native';
import { NotesListItem } from 'modules/notes/components/notes-list-item';

export const NotesListScreen: React.FC = () => {
  const notes = useSelector((state: RootState) => state.notes.notes);
  const navigation = useNavigation();

  return (
    <BaseContainer>
      <ButtonFloating
        icon="plus"
        onPress={(): void => {
          navigation.navigate(AvailableScreens.NotesCreateNew);
        }}
      />
      <FlatList
        data={notes}
        numColumns={2}
        contentContainerStyle={{
          flex: 1,
          marginHorizontal: -10,
        }}
        renderItem={({ item }) => (
          <NotesListItem title={item.title} content={item.content} />
        )}
        keyExtractor={(item) => item.id}
      />
    </BaseContainer>
  );
};
