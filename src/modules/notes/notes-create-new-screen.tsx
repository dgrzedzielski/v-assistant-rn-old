import React, { useState } from 'react';
import { TextInputGroup } from 'components/ui/text-input-group';
import { BaseContainerScrollView } from 'components/base/base-container-scroll-view';
import { BaseButton } from 'components/base/base-button';
import { useDispatch } from 'react-redux';
import { Note } from 'modules/notes/types';
import { uuid } from 'helpers/uuid';
import { addNote } from './notes-store-slice';
import { BaseContainer } from 'components/base/base-container';
import { ButtonFloating } from 'components/ui/button-floating';
import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AvailableScreens } from 'src/available-screens';

export const NotesCreateNewScreen: React.FC = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const saveNote = () => {
    const payload: Note = {
      content,
      title,
      id: uuid(),
    };

    dispatch(addNote(payload));
    navigation.navigate(AvailableScreens.NotesList);
  };

  return (
    <BaseContainer>
      <ButtonFloating onPress={saveNote} icon="content-save" />
      <TextInputGroup
        label="Note title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInputGroup
        label="Note content"
        value={content}
        onChangeText={setContent}
        style={{
          height: Dimensions.get('screen').height - 300,
          alignSelf: 'flex-start',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
        }}
      />
    </BaseContainer>
  );
};
