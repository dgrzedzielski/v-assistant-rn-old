import React, { useEffect } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { AvailableScreens } from 'core/available-screens';
import { BaseContainer } from 'components/base/base-container';
import { ButtonFloating } from 'components/ui/button-floating';
import { NotesListItem } from './components/notes-list-item';
import { fetchNotes, selectNotesItems } from './notes.store.slice';

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
        contentContainerStyle={styles.contentContainer}
        renderItem={({ item }) => (
          <NotesListItem
            title={item.title}
            content={item.content}
            id={item.id}
            color={item.color}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </BaseContainer>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    marginHorizontal: -10,
  },
});
