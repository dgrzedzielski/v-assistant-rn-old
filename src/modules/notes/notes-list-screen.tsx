import React, { useEffect } from 'react';
import { FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { rootReducer, RootState } from 'src/root-reducer';
import { BaseContainer } from 'components/base/base-container';
import { AvailableScreens } from 'src/available-screens';
import { NotesListItem } from 'modules/notes/components/notes-list-item';
import { fetchNotes, selectNotesItems } from 'modules/notes/notes-store-slice';
import { ButtonWithIcon } from 'components/ui/button-with-icon';

export const NotesListScreen: React.FC = () => {
  const notes = useSelector(selectNotesItems);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    dispatch(fetchNotes());
    navigation.setOptions({
      headerRight: () => (
        <ButtonWithIcon
          icon="add"
          onPress={(): void =>
            navigation.navigate(AvailableScreens.NotesCreateNew)
          }
        />
      ),
    });
  }, [dispatch, navigation]);

  return (
    <BaseContainer>
      <FlatList
        data={notes}
        numColumns={2}
        contentContainerStyle={{
          marginHorizontal: -10,
        }}
        renderItem={({ item }) => (
          <NotesListItem
            title={item.title}
            content={item.content}
            id={item.id}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </BaseContainer>
  );
};
