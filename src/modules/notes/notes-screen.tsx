import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NotesListScreen } from './notes-list-screen';
import { NotesCreateNewScreen } from './notes-create-new-screen';
import { NotesDetailsScreen } from './notes-details-screen';
import { AvailableScreens } from 'src/available-screens';

const Stack = createStackNavigator();

export const NotesScreen: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Notes.List">
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
      />
    </Stack.Navigator>
  );
};
