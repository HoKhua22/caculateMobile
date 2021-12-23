import React from 'react';
import { TouchableOpacity, StyleSheet, Text, Dimensions } from 'react-native';

const screen = Dimensions.get('window');
const buttonWidth = screen.width / 4;

const styles = StyleSheet.create({
  text: {
    color: '#fff',
    fontSize: 25,
  },
  textSecondary: {
    color: '#060606',
  },
  button: {
    backgroundColor: '#333333',
    flex: 1,
    height: Math.floor(buttonWidth - 10),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: Math.floor(buttonWidth),
    margin: 5,
  },
  buttonDouble: {
    width: screen.width / 2 - 10,
    flex: 0,
    alignItems: 'flex-end',
    paddingRight: 40,
  },
  buttonLength: {
    flex: 1,
    justifyContent: 'flex-end',
    height: screen.width / 2 - 10,
    backgroundColor: '#FF6699',
  },
  buttonEqual: {
    backgroundColor: '#FF6699',
  },
  buttonSecondary: {
    backgroundColor: '#a6a6a6',
  },
  buttonAccent: {
    backgroundColor: '#f09a36',
  },
});

export default ({ onPress, text, size, theme }) => {
  const buttonStyles = [styles.button];
  const textStyles = [styles.text];

  if (size === 'double') {
    buttonStyles.push(styles.buttonDouble);
  }

  if (size == 'long') {
    buttonStyles.push(styles.buttonLength);
  }

  if (theme === 'secondary') {
    buttonStyles.push(styles.buttonSecondary);
    textStyles.push(styles.textSecondary);
  } else if (theme === 'accent') {
    buttonStyles.push(styles.buttonAccent);
  } else if (theme === 'buttonEqual') {
    buttonStyles.push(styles.buttonEqual);
  }

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyles}>
      <Text style={textStyles}>{text}</Text>
    </TouchableOpacity>
  );
};
