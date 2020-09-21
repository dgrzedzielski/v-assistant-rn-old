import React, { useState } from 'react';
import { KeyboardAvoidingView, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { AvailableScreens } from 'core/available-screens';
import { useNavigationHeader } from 'core/hooks/use-navigation-header';
import { BaseContainer } from 'components/base/base-container';
import { ButtonWithIcon } from 'components/ui/button-with-icon';
import { NotesForm } from './components/notes-form';
import { addNote } from './notes.store.slice';

export const NotesCreateNewScreen: React.FC = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const saveNote = () => {
    dispatch(
      addNote({
        content,
        title,
      }),
    );
    navigation.navigate(AvailableScreens.NotesList);
  };

  useNavigationHeader({
    headerRight: <ButtonWithIcon icon="content-save" onPress={saveNote} />,
  });

  return (
    <BaseContainer style={styles.container}>
      <KeyboardAvoidingView>
        <NotesForm
          value={{ title, content }}
          onChange={{ setTitle, setContent }}
        />
      </KeyboardAvoidingView>
    </BaseContainer>
  );
};

const styles = StyleSheet.create({
  container: { padding: 0 },
});
