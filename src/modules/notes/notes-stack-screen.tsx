import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AvailableScreens } from 'core/available-screens';
import { NotesListScreen } from './notes-list-screen';
import { NotesCreateNewScreen } from './notes-create-new-screen';
import { NotesDetailsScreen } from './notes-details-screen';

export type NotesStackParamList = {
  [AvailableScreens.NotesList]: undefined;
  [AvailableScreens.NotesCreateNew]: undefined;
  [AvailableScreens.NotesDetails]: { id: string };
};

const Stack = createStackNavigator<NotesStackParamList>();

export const NotesStackScreen: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName={AvailableScreens.NotesList}>
      <Stack.Screen
        name={AvailableScreens.NotesList}
        component={NotesListScreen}
        options={{ title: 'Notes' }}
      />
      <Stack.Screen
        name={AvailableScreens.NotesCreateNew}
        component={NotesCreateNewScreen}
        options={{ title: 'Create new note' }}
      />
      <Stack.Screen
        name={AvailableScreens.NotesDetails}
        component={NotesDetailsScreen}
        options={{ title: '' }}
      />
    </Stack.Navigator>
  );
};
