import AsyncStorage from '@react-native-community/async-storage';

export const getItem = async <T>(key: string): Promise<T | null> => {
  const result = await AsyncStorage.getItem(key);

  return result ? JSON.parse(result) : null;
};

export const setItem = async <T>(key: string, value: T) => {
  return AsyncStorage.setItem(key, JSON.stringify(value));
};
