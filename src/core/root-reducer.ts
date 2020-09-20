import { combineReducers } from '@reduxjs/toolkit';
import notesReducer from 'modules/notes/notes.store.slice';

export const rootReducer = combineReducers({
  notes: notesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
