import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import { useRoute, useNavigation, RouteProp } from '@react-navigation/native';
import { AvailableScreens } from 'core/available-screens';
import { NotesStackParamList } from 'modules/notes/notes-stack.screen';
import { BaseContainer } from 'components/base/base-container';
import { ButtonWithIcon } from 'components/ui/button-with-icon';
import { NotesForm } from 'modules/notes/components/notes-form';
import { removeNote, selectNotesItems, editNote } from 'src/modules/notes/notes.store.slice';

type NotesDetailsScreenRouteProps = RouteProp<
  NotesStackParamList,
  AvailableScreens.NotesDetails
>;

export const NotesDetailsScreen: React.FC = () => {
  const dispatch = useDispatch();
  const { params } = useRoute<NotesDetailsScreenRouteProps>();
  const navigation = useNavigation();
  const notes = useSelector(selectNotesItems);
  const note = notes.find(({ id }) => id === params?.id)!;
  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);

  const handleSaveNote = useCallback(() => {
    dispatch(editNote({ content, title, id: note.id }));
    navigation.navigate(AvailableScreens.NotesList);
  }, [content, dispatch, navigation, note.id, title]);

  const handleDeleteNote = useCallback(() => {
    dispatch(removeNote(params.id));
    navigation.navigate(AvailableScreens.NotesList);
  }, [dispatch, navigation, params.id]);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={styles.headerRightContainer}>
          <ButtonWithIcon icon="delete" onPress={handleDeleteNote} />
          <ButtonWithIcon icon="content-save" onPress={handleSaveNote} />
        </View>
      ),
    });
  }, [handleDeleteNote, handleSaveNote, navigation]);

  return (
    <BaseContainer style={styles.container}>
      <NotesForm
        value={{ title, content }}
        onChange={{ setTitle, setContent }}
      />
    </BaseContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 0,
  },
  headerRightContainer: {
    flexDirection: 'row',
  },
});
