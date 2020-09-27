export type NoteFormModel = {
  title: string;
  content: string;
  color: string;
};

export type Note = NoteFormModel & {
  id: string;
};
