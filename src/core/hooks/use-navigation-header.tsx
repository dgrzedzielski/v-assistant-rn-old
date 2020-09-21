import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View } from 'react-native';

type UseNavigationHeaderOptions = {
  headerRight: React.ReactNode;
};

export const useNavigationHeader = ({
  headerRight,
}: UseNavigationHeaderOptions) => {
  const navigation = useNavigation();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={styles.headerContentContainer}>{headerRight}</View>
      ),
    });
  }, [headerRight, navigation]);
};

const styles = StyleSheet.create({
  headerContentContainer: {
    flexDirection: 'row',
  },
});
