import React, { useEffect } from 'react';
import { FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { BaseContainer } from 'components/base/base-container';
import { AvailableScreens } from 'core/available-screens';
import { NotesListItem } from 'modules/notes/components/notes-list-item';
import { fetchNotes, selectNotesItems } from 'modules/notes/notes-store-slice';
import { ButtonFloating } from 'components/ui/button-floating';

export const NotesListScreen: React.FC = () => {
  const notes = useSelector(selectNotesItems);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    dispatch(fetchNotes());
  }, [dispatch, navigation]);

  return (
    <BaseContainer>
      <ButtonFloating
        icon="plus"
        onPress={(): void =>
          navigation.navigate(AvailableScreens.NotesCreateNew)
        }
      />
      <FlatList
        data={notes}
        numColumns={2}
        contentContainerStyle={{
          marginHorizontal: -10,
        }}
        renderItem={({ item }) => (
          <NotesListItem
            title={item.title}
            content={item.content}
            id={item.id}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </BaseContainer>
  );
};
