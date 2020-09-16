import React, { useCallback, useEffect, useState } from 'react';
import { TextInputGroup } from 'components/ui/text-input-group';
import { useDispatch } from 'react-redux';
import { Note } from 'modules/notes/types';
import { uuid } from 'helpers/uuid';
import { addNote } from './notes-store-slice';
import { BaseContainer } from 'components/base/base-container';
import { ButtonFloating } from 'components/ui/button-floating';
import { Dimensions, KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AvailableScreens } from 'src/available-screens';
import { ButtonWithIcon } from 'components/ui/button-with-icon';

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
    <BaseContainer>
      <KeyboardAvoidingView>
        <TextInputGroup
          label="Note title"
          value={title}
          onChangeText={setTitle}
        />
        <TextInputGroup
          label="Note content"
          value={content}
          onChangeText={setContent}
          multiline
          style={{
            textAlignVertical: 'top',
            height: Dimensions.get('screen').height - 300,
            alignSelf: 'flex-start',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
          }}
        />
      </KeyboardAvoidingView>
    </BaseContainer>
  );
};
