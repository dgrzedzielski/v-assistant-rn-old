import React from 'react';
import { StyleSheet } from 'react-native';
import { NoteFormModel } from 'modules/notes/notes.types';
import { TextInputGroup } from 'components/ui/text-input-group';

type NotesFormProps = {
  value: NoteFormModel;
  onChange: {
    setTitle: React.Dispatch<React.SetStateAction<string>>;
    setContent: React.Dispatch<React.SetStateAction<string>>;
  };
};

export const NotesForm: React.FC<NotesFormProps> = ({
  value: { content, title },
  onChange: { setTitle, setContent },
}) => {
  return (
    <>
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
        style={styles.contentInput}
      />
    </>
  );
};

const styles = StyleSheet.create({
  titleInput: {
    fontSize: 20,
  },
  contentInput: {
    fontSize: 16,
  },
});
