export type NoteFormModel = {
  title: string;
  content: string;
};

export type Note = NoteFormModel & {
  id: string;
};
