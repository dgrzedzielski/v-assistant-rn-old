import React from 'react';
import styled from '@emotion/native';
import { StyleProp, TextStyle } from 'react-native';
import { colors } from 'styles/colors';

type TextInputGroupProps = {
  label: string;
  value: string;
  onChangeText: (val: string) => void;
  placeholder?: string;
  multiline?: boolean;
  numberOfLines?: number;
  style?: StyleProp<TextStyle>;
};

const Container = styled.View`
  margin-bottom: 16px;
`;

const Input = styled.TextInput`
  border-radius: 4px;
  background: ${colors.inputBg};
  border: 1px solid ${colors.inputBorder};
  width: 100%;
  color: ${colors.white};
  padding: 8px 16px;
  align-items: flex-start;
`;

const Label = styled.Text`
  color: ${colors.white};
  margin-bottom: 4px;
`;

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
    <Container>
      <Label>{label}</Label>
      <Input
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        multiline={multiline}
        numberOfLines={numberOfLines}
        style={style}
      />
    </Container>
  );
};
