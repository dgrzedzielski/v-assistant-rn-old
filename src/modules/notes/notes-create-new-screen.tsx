import React, { useCallback, useEffect, useState } from 'react';
import { KeyboardAvoidingView, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { uuid } from 'helpers/uuid';
import { AvailableScreens } from 'core/available-screens';
import { NoteFormModel } from 'modules/notes/notes-types';
import { BaseContainer } from 'components/base/base-container';
import { ButtonWithIcon } from 'components/ui/button-with-icon';
import { NotesForm } from './components/notes-form';
import { addNote } from './notes-store-slice';

export const NotesCreateNewScreen: React.FC = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleFormChange = (
    key: keyof NoteFormModel,
    value: NoteFormModel[keyof NoteFormModel],
  ) => {
    const setter = {
      title: setTitle,
      content: setContent,
    };

    setter[key](value);
  };

  const saveNote = useCallback(() => {
    dispatch(
      addNote({
        content,
        title,
        id: uuid(),
      }),
    );
    navigation.navigate(AvailableScreens.NotesList);
  }, [content, dispatch, navigation, title]);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <ButtonWithIcon icon="content-save" onPress={saveNote} />
      ),
    });
  }, [navigation, saveNote]);

  return (
    <BaseContainer style={styles.container}>
      <KeyboardAvoidingView>
        <NotesForm value={{ title, content }} onChange={handleFormChange} />
      </KeyboardAvoidingView>
    </BaseContainer>
  );
};

const styles = StyleSheet.create({
  container: { padding: 0 },
});
