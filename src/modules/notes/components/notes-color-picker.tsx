import React from 'react';
import { ScrollView, StyleSheet, View, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from 'styles/colors';

type NotesColorPickerProps = {
  options: string[];
  onClose: () => void;
  value: string;
  onChange: (value: string) => void;
};

export const NotesColorPicker: React.FC<NotesColorPickerProps> = ({
  options,
  onClose,
  value,
  onChange,
}) => {
  const handleChange = (val: string) => {
    onChange(val);
    onClose();
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal={true}>
        {options.map((option) => (
          <Pressable
            key={option}
            style={{ ...styles.color, backgroundColor: option }}
            onPress={(): void => handleChange(option)}
            android_ripple={{ color: colors.white, radius: 16 }}>
            {value === option ? (
              <Icon name="check" color={colors.white} size={16} />
            ) : null}
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    left: 0,
    top: 0,
    backgroundColor: colors.panelBg,
    elevation: 15,
    padding: 10,
  },
  color: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'hsla(0, 100%, 100%, 0.2)',
  },
});
