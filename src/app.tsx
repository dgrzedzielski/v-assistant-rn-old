import React from 'react';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import { NotesStackScreen } from 'modules/notes/notes-stack-screen';
import { TodosScreen } from 'modules/todos/todos-screen';
import { colors } from 'styles/colors';
import { store } from './store';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialBottomTabNavigator();

const App = () => {
  return (
    <>
      <Provider store={store}>
        <SafeAreaProvider>
          <NavigationContainer theme={DarkTheme}>
            <Tab.Navigator
              initialRouteName="Notes"
              activeColor={colors.primary}
              inactiveColor={colors.gray900}>
              <Tab.Screen
                name="Notes"
                component={NotesStackScreen}
                options={{
                  title: 'Notes',
                  tabBarIcon: ({ focused, color }) => (
                    <Icon
                      name={focused ? 'note-multiple' : 'note-multiple-outline'}
                      color={color}
                      size={20}
                    />
                  ),
                }}
              />
              <Tab.Screen
                name="Todos"
                component={TodosScreen}
                options={{
                  title: 'Things to do',
                  tabBarIcon: ({ focused, color }) => (
                    <Icon
                      name={
                        focused
                          ? 'clipboard-check-multiple'
                          : 'clipboard-check-multiple-outline'
                      }
                      color={color}
                      size={20}
                    />
                  ),
                }}
              />
            </Tab.Navigator>
          </NavigationContainer>
        </SafeAreaProvider>
      </Provider>
    </>
  );
};

export default App;
