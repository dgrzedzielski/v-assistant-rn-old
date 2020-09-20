import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from 'styles/colors';
import { NotesStackScreen } from 'modules/notes/notes-stack.screen';
import { TodosScreen } from 'modules/todos/todos-screen';

const Tab = createMaterialBottomTabNavigator();

export const MainTabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      initialRouteName="Notes"
      activeColor={colors.primary}
      inactiveColor={colors.gray900}
      barStyle={styles.tabBar}>
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
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.panelBg,
    borderTopColor: colors.border,
    borderTopWidth: 1,
  },
});
