import React from 'react';
import { Pressable, StyleSheet, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AvailableScreens } from 'core/available-screens';
import { colors } from 'styles/colors';

type NotesListItemProps = {
  id: string;
  title: string;
  content: string;
  color: string;
};

export const NotesListItem: React.FC<NotesListItemProps> = ({
  id,
  title,
  content,
  color,
}) => {
  const navigation = useNavigation();
  const goToNoteDetails = () => {
    navigation.navigate(AvailableScreens.NotesDetails, {
      id,
    });
  };

  return (
    <View style={styles.wrapper}>
      <Pressable
        onPress={goToNoteDetails}
        android_ripple={{ color: colors.white }}
        style={{ ...styles.pressable, backgroundColor: color }}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.content}>{content}</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexBasis: '50%',
    paddingHorizontal: 10,
    maxHeight: 300,
    marginBottom: 20,
    overflow: 'hidden',
  },
  pressable: {
    height: '100%',
    elevation: 3,
    backgroundColor: colors.panelBg,
  },
  titleContainer: {
    borderBottomColor: colors.border,
    borderBottomWidth: 1,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 20,
    color: colors.white,
  },
  contentContainer: {
    padding: 16,
  },
  content: {
    fontSize: 14,
    color: colors.white,
  },
});
