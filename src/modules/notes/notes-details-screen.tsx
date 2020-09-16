import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRoute, useNavigation, RouteProp } from '@react-navigation/native';
import { AvailableScreens } from 'src/available-screens';
import { NotesStackParamList } from 'modules/notes/notes-stack-screen';
import { removeNote, selectNotesItems } from 'modules/notes/notes-store-slice';
import { BaseContainer } from 'components/base/base-container';
import { BaseText } from 'components/base/base-text';
import { ButtonWithIcon } from 'components/ui/button-with-icon';

type NotesDetailsScreenRouteProps = RouteProp<
  NotesStackParamList,
  AvailableScreens.NotesDetails
>;

export const NotesDetailsScreen: React.FC = () => {
  const dispatch = useDispatch();
  const { params } = useRoute<NotesDetailsScreenRouteProps>();
  const navigation = useNavigation();
  const notes = useSelector(selectNotesItems);
  const note = notes.find(({ id }) => id === params?.id);

  const handleDeleteNote = useCallback(() => {
    dispatch(removeNote(params.id));
    navigation.navigate(AvailableScreens.NotesList);
  }, [dispatch, navigation, params.id]);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <ButtonWithIcon icon="delete" onPress={handleDeleteNote} />
      ),
    });
  }, [handleDeleteNote, navigation]);

  return (
    <BaseContainer>
      <BaseText>Single note screen</BaseText>
    </BaseContainer>
  );
};
