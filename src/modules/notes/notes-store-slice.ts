import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Note } from './types';

type NotesState = {
  notes: Array<Note>;
};

const initialState: NotesState = {
  notes: [],
};

const notesSlice = createSlice({
  name: 'Notes',
  initialState,
  reducers: {
    addNote(state, action: PayloadAction<Note>) {
      state.notes.push(action.payload);
    },
    removeNote(state, action: PayloadAction<string>) {
      state.notes = state.notes.filter((el) => el.id === action.payload);
    },
  },
});

export default notesSlice.reducer;

export const { addNote, removeNote } = notesSlice.actions;
