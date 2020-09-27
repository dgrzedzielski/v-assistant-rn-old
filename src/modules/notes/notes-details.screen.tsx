import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { KeyboardAvoidingView, StyleSheet } from 'react-native';
import { useRoute, useNavigation, RouteProp } from '@react-navigation/native';
import { AvailableScreens } from 'core/available-screens';
import { useNavigationHeader } from 'core/hooks/use-navigation-header';
import { BaseContainer } from 'components/base/base-container';
import { ButtonWithIcon } from 'components/ui/button-with-icon';
import { notesColors } from 'styles/colors';
import { NotesForm } from './components/notes-form';
import { NotesColorPicker } from './components/notes-color-picker';
import { removeNote, editNote, selectNote } from './notes.store.slice';
import { NotesStackParamList } from './notes-stack.screen';

type NotesDetailsScreenRouteProps = RouteProp<
  NotesStackParamList,
  AvailableScreens.NotesDetails
>;

export const NotesDetailsScreen: React.FC = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [color, setColor] = useState(notesColors.default);
  const [shouldShowTogglePicker, setShouldShowTogglePicker] = useState(false);
  const dispatch = useDispatch();
  const { params } = useRoute<NotesDetailsScreenRouteProps>();
  const navigation = useNavigation();
  const note = useSelector(selectNote(params!.id!));

  useEffect(() => {
    if (note) {
      setTitle(note.title);
      setContent(note.content);
      setColor(note.color);
    }
  }, [note]);

  const handleSaveNote = () => {
    dispatch(editNote({ content, title, id: params?.id, color }));
    navigation.navigate(AvailableScreens.NotesList);
  };

  const handleDeleteNote = () => {
    dispatch(removeNote(params.id));
    navigation.navigate(AvailableScreens.NotesList);
  };

  const toggleColorPicker = () => {
    setShouldShowTogglePicker((current) => !current);
  };

  useNavigationHeader({
    headerRight: (
      <>
        <ButtonWithIcon icon="delete" onPress={handleDeleteNote} />
        <ButtonWithIcon icon="palette" onPress={toggleColorPicker} />
        <ButtonWithIcon icon="content-save" onPress={handleSaveNote} />
      </>
    ),
  });

  return (
    <BaseContainer style={{ ...styles.container, backgroundColor: color }}>
      <KeyboardAvoidingView>
        <NotesForm
          value={{ title, content, color }}
          onChange={{ setTitle, setContent }}
        />
      </KeyboardAvoidingView>
      {shouldShowTogglePicker && (
        <NotesColorPicker
          options={Object.values(notesColors)}
          onClose={(): void => setShouldShowTogglePicker(false)}
          value={color}
          onChange={setColor}
        />
      )}
    </BaseContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 0,
  },
});
