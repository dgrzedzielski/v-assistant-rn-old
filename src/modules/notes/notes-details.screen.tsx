import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyleSheet } from 'react-native';
import { useRoute, useNavigation, RouteProp } from '@react-navigation/native';
import { AvailableScreens } from 'core/available-screens';
import { useNavigationHeader } from 'core/hooks/use-navigation-header';
import { BaseContainer } from 'components/base/base-container';
import { ButtonWithIcon } from 'components/ui/button-with-icon';
import { NotesForm } from 'modules/notes/components/notes-form';
import { removeNote, editNote, selectNote } from './notes.store.slice';
import { NotesStackParamList } from './notes-stack.screen';

type NotesDetailsScreenRouteProps = RouteProp<
  NotesStackParamList,
  AvailableScreens.NotesDetails
>;

export const NotesDetailsScreen: React.FC = () => {
  const dispatch = useDispatch();
  const { params } = useRoute<NotesDetailsScreenRouteProps>();
  const navigation = useNavigation();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const note = useSelector(selectNote(params!.id!));

  useEffect(() => {
    if (note) {
      setTitle(note.title);
      setContent(note.content);
    }
  }, [note]);

  const handleSaveNote = () => {
    dispatch(editNote({ content, title, id: params?.id }));
    navigation.navigate(AvailableScreens.NotesList);
  };

  const handleDeleteNote = () => {
    dispatch(removeNote(params.id));
    navigation.navigate(AvailableScreens.NotesList);
  };

  useNavigationHeader({
    headerRight: (
      <>
        <ButtonWithIcon icon="delete" onPress={handleDeleteNote} />
        <ButtonWithIcon icon="content-save" onPress={handleSaveNote} />
      </>
    ),
  });

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
});
