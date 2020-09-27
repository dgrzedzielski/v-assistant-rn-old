import React, { useState } from 'react';
import { KeyboardAvoidingView, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { AvailableScreens } from 'core/available-screens';
import { useNavigationHeader } from 'core/hooks/use-navigation-header';
import { BaseContainer } from 'components/base/base-container';
import { ButtonWithIcon } from 'components/ui/button-with-icon';
import { notesColors } from 'styles/colors';
import { NotesForm } from './components/notes-form';
import { addNote } from './notes.store.slice';
import { NotesColorPicker } from 'modules/notes/components/notes-color-picker';

export const NotesCreateNewScreen: React.FC = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [color, setColor] = useState(notesColors.default);
  const [shouldShowTogglePicker, setShouldShowTogglePicker] = useState(false);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const saveNote = () => {
    dispatch(
      addNote({
        content,
        title,
        color,
      }),
    );
    navigation.navigate(AvailableScreens.NotesList);
  };

  const toggleColorPicker = () => {
    setShouldShowTogglePicker((current) => !current);
  };

  useNavigationHeader({
    headerRight: (
      <>
        <ButtonWithIcon icon="palette" onPress={toggleColorPicker} />
        <ButtonWithIcon icon="content-save" onPress={saveNote} />
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
  container: { padding: 0 },
});
