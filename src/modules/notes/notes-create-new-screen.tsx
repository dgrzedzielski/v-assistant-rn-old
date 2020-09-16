import React, { useCallback, useEffect, useState } from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { uuid } from 'helpers/uuid';
import { AvailableScreens } from 'src/available-screens';
import { Note } from 'modules/notes/types';
import { TextInputGroup } from 'components/ui/text-input-group';
import { BaseContainer } from 'components/base/base-container';
import { ButtonWithIcon } from 'components/ui/button-with-icon';
import { addNote } from './notes-store-slice';

export const NotesCreateNewScreen: React.FC = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const saveNote = useCallback(() => {
    const payload: Note = {
      content,
      title,
      id: uuid(),
    };

    dispatch(addNote(payload));
    navigation.navigate(AvailableScreens.NotesList);
  }, [content, dispatch, navigation, title]);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <ButtonWithIcon icon="save" onPress={saveNote} />,
    });
  }, [navigation, saveNote]);

  return (
    <BaseContainer style={{ padding: 0 }}>
      <KeyboardAvoidingView>
        <TextInputGroup
          placeholder="Title"
          value={title}
          onChangeText={setTitle}
        />
        <TextInputGroup
          placeholder="Content..."
          value={content}
          onChangeText={setContent}
          multiline
          numberOfLines={32}
        />
      </KeyboardAvoidingView>
    </BaseContainer>
  );
};
