import React, { useEffect, useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, Dimensions } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { notesColors } from 'styles/colors';
import { TextInputGroup } from 'components/ui/text-input-group';
import { BaseContainer } from 'components/base/base-container';
import { AvailableScreens } from 'core/available-screens';
import { useNavigationHeader } from 'core/hooks/use-navigation-header';
import { ButtonWithIcon } from 'components/ui/button-with-icon';
import { NotesColorPicker } from './components/notes-color-picker';
import { addNote, editNote, removeNote, selectNote } from './notes.store.slice';
import { NotesStackParamList } from './notes-stack.screen';
import { useDimensions } from 'core/hooks/use-dimensions';

type NotesDetailsScreenRouteProps = RouteProp<
  NotesStackParamList,
  AvailableScreens.NotesDetails
>;

export const NotesFormScreen: React.FC = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [color, setColor] = useState(notesColors.default);
  const [shouldShowColorPicker, setShouldShowColorPicker] = useState(false);
  const dispatch = useDispatch();
  const { params } = useRoute<NotesDetailsScreenRouteProps>();
  const navigation = useNavigation();
  const note = useSelector(selectNote(params?.id));
  const { windowHeight } = useDimensions();

  const isEditMode = !!note;

  useEffect(() => {
    if (note) {
      setTitle(note.title);
      setContent(note.content);
      setColor(note.color);
    }
  }, [note]);

  const handleDeleteNote = () => {
    dispatch(removeNote(params.id));
    navigation.navigate(AvailableScreens.NotesList);
  };

  const handleSaveNote = () => {
    if (isEditMode) {
      dispatch(editNote({ content, title, id: params?.id, color }));
    } else {
      dispatch(addNote({ content, title, color }));
    }
    navigation.navigate(AvailableScreens.NotesList);
  };

  const toggleColorPicker = () => {
    setShouldShowColorPicker((current) => !current);
  };

  useNavigationHeader({
    headerRight: (
      <>
        {isEditMode && (
          <ButtonWithIcon icon="delete" onPress={handleDeleteNote} />
        )}
        <ButtonWithIcon icon="palette" onPress={toggleColorPicker} />
        <ButtonWithIcon icon="content-save" onPress={handleSaveNote} />
      </>
    ),
  });

  return (
    <>
      <BaseContainer style={{ ...styles.container, backgroundColor: color }}>
        <KeyboardAvoidingView>
          <TextInputGroup
            placeholder="Title"
            value={title}
            onChangeText={setTitle}
            style={styles.titleInput}
          />
          <TextInputGroup
            placeholder="Content..."
            value={content}
            onChangeText={setContent}
            multiline
            numberOfLines={32}
            style={{
              ...styles.contentInput,
              height: windowHeight - 208,
            }}
          />
          {shouldShowColorPicker && (
            <NotesColorPicker
              options={Object.values(notesColors)}
              onClose={(): void => toggleColorPicker()}
              value={color}
              onChange={setColor}
            />
          )}
        </KeyboardAvoidingView>
      </BaseContainer>
    </>
  );
};

const styles = StyleSheet.create({
  container: { padding: 0 },
  titleInput: {
    fontSize: 20,
  },
  contentInput: {
    fontSize: 16,
  },
});
