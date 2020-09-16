import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import { NotesStackScreen } from 'modules/notes/notes-stack-screen';
import { TodosScreen } from 'modules/todos/todos-screen';

const Tab = createMaterialBottomTabNavigator();

const App = () => {
  return (
    <>
      <Provider store={store}>
        <SafeAreaProvider>
          <NavigationContainer theme={DarkTheme}>
            <Tab.Navigator initialRouteName="Notes">
              <Tab.Screen
                name="Notes"
                component={NotesStackScreen}
                options={{ title: 'Notes' }}
              />
              <Tab.Screen
                name="Todos"
                component={TodosScreen}
                options={{ title: 'Things to do' }}
              />
            </Tab.Navigator>
          </NavigationContainer>
        </SafeAreaProvider>
      </Provider>
    </>
  );
};

export default App;
