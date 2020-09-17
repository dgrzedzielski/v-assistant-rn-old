import React from 'react';
import { NoteFormModel } from 'modules/notes/notes-types';
import { TextInputGroup } from 'components/ui/text-input-group';

type NotesFormProps = {
  value: NoteFormModel;
  onChange: (
    key: keyof NoteFormModel,
    value: NoteFormModel[keyof NoteFormModel],
  ) => void;
};

export const NotesForm: React.FC<NotesFormProps> = ({
  value: { content, title },
  onChange,
}) => {
  return (
    <>
      <TextInputGroup
        placeholder="Title"
        value={title}
        onChangeText={(val): void => onChange('title', val)}
      />
      <TextInputGroup
        placeholder="Content..."
        value={content}
        onChangeText={(val): void => onChange('content', val)}
        multiline
        numberOfLines={32}
      />
    </>
  );
};
