import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppDispatch, AppThunk } from 'core/store';
import { getItem, setItem } from 'helpers/storage';
import { RootState } from 'core/root-reducer';
import { Note } from 'modules/notes/notes.types';
import { fetchAllNotes, NotesService } from 'modules/notes/notes.service';

type NotesState = {
  items: Array<Note>;
};

const initialState: NotesState = {
  items: [],
};

const notesSlice = createSlice({
  name: 'Notes',
  initialState,
  reducers: {
    fetchNotesSuccess(state, action: PayloadAction<Note[]>) {
      state.items = action.payload;
    },
    fetchNotesFailure(state, action: PayloadAction<string>) {
      // TODO implement
    },
    addNoteSuccess(state, action: PayloadAction<Note>) {
      state.items.push(action.payload);
    },
    addNoteFailure(state, action: PayloadAction<string>) {
      // TODO implement
    },
    removeNoteSuccess(state, action: PayloadAction<string>) {
      state.items = state.items.filter(({ id }) => id !== action.payload);
    },
    removeNoteFailure(state, action: PayloadAction<string>) {
      // TODO implement
    },
    setNotes(state, action: PayloadAction<Note[]>) {
      state.items = action.payload;
    },
    editNoteFailure(state, action: PayloadAction<string>) {
      // TODO implement
    },
  },
});

export default notesSlice.reducer;

export const {
  addNoteSuccess,
  addNoteFailure,
  fetchNotesSuccess,
  fetchNotesFailure,
  removeNoteFailure,
  setNotes,
  editNoteFailure,
} = notesSlice.actions;

export const fetchNotes = (): AppThunk => async (dispatch: AppDispatch) => {
  try {
    const notes = await NotesService.fetchNotes();

    if (notes) {
      dispatch(fetchNotesSuccess(notes));
    }
  } catch (e) {
    dispatch(fetchNotesFailure(e.toString()));
  }
};

export const addNote = (payload: Note): AppThunk => async (
  dispatch: AppDispatch,
) => {
  try {
    const result = await NotesService.addNote(payload);
    dispatch(addNoteSuccess(result));
  } catch (e) {
    dispatch(addNoteFailure(e.toString()));
  }
};

export const removeNote = (noteId: string): AppThunk => async (dispatch) => {
  try {
    const result = await NotesService.removeNote(noteId);
    dispatch(setNotes(result));
  } catch (e) {
    dispatch(removeNoteFailure(e.toString()));
  }
};

export const editNote = (newNote: Note): AppThunk => async (dispatch) => {
  try {
    const editedNotes = await NotesService.editNote(newNote);
    dispatch(setNotes(editedNotes));
  } catch (e) {
    dispatch(editNoteFailure(e.toString()));
  }
};

export const selectNotesItems = (state: RootState) => state.notes.items;
