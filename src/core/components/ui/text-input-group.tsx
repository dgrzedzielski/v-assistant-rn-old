import React from 'react';
import {
  StyleProp,
  StyleSheet,
  TextInput,
  TextStyle,
  View,
  Text,
} from 'react-native';
import { colors } from 'styles/colors';

type TextInputGroupProps = {
  label?: string;
  value: string;
  onChangeText: (val: string) => void;
  placeholder?: string;
  multiline?: boolean;
  numberOfLines?: number;
  style?: StyleProp<TextStyle>;
};

export const TextInputGroup: React.FC<TextInputGroupProps> = ({
  value,
  label,
  onChangeText,
  placeholder,
  numberOfLines,
  multiline = false,
  style,
}) => {
  return (
    <View style={styles.container}>
      {label ? <Text style={styles.label}>{label}</Text> : null}
      <TextInput
        placeholderTextColor={colors.gray800}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        multiline={multiline}
        scrollEnabled={multiline}
        numberOfLines={numberOfLines}
        style={[styles.input, style]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  label: {
    marginBottom: 4,
    color: colors.white,
  },
  input: {
    width: '100%',
    paddingHorizontal: 24,
    paddingVertical: 16,
    alignItems: 'flex-start',
    color: colors.white,
    backgroundColor: colors.inputBg,
    textAlignVertical: 'top',
    borderBottomColor: colors.border,
    borderBottomWidth: 1,
  },
});
