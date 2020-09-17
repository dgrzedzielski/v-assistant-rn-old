import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppDispatch, AppThunk } from 'core/store';
import { getItem, setItem } from 'helpers/storage';
import { RootState } from 'core/root-reducer';
import { Note } from 'modules/notes/notes-types';
import App from 'react-native-safe-area-context/lib/typescript/example/src/App';

const STORAGE_KEY = 'NOTES';

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
    const notes = await getItem<Note[]>(STORAGE_KEY);
    if (notes) {
      dispatch(fetchNotesSuccess(notes));
    }
  } catch (e) {
    dispatch(fetchNotesFailure(e.toString()));
  }
};

export const addNote = (payload: Note): AppThunk => async (
  dispatch: AppDispatch,
  getState,
) => {
  const {
    notes: { items },
  } = getState();

  try {
    await setItem(STORAGE_KEY, [...items, payload]);
    dispatch(addNoteSuccess(payload));
  } catch (e) {
    dispatch(addNoteFailure(e.toString()));
  }
};

export const removeNote = (payload: string): AppThunk => async (
  dispatch,
  getState,
) => {
  const {
    notes: { items },
  } = getState();

  const newNotes = items.filter(({ id }) => id !== payload);

  try {
    await setItem(STORAGE_KEY, newNotes);
    dispatch(setNotes(newNotes));
  } catch (e) {
    dispatch(removeNoteFailure(e.toString()));
  }
};

export const editNote = (payload: Note): AppThunk => async (
  dispatch,
  getState,
) => {
  const {
    notes: { items },
  } = getState();

  try {
    const index = items.findIndex(({ id }) => id === payload.id);
    const editedNotes = [...items];
    editedNotes.splice(index, 1, payload);
    await setItem(STORAGE_KEY, editedNotes);
    dispatch(setNotes(editedNotes));
  } catch (e) {
    dispatch(editNoteFailure(e.toString()));
  }
};

export const selectNotesItems = (state: RootState) => state.notes.items;
