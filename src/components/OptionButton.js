/* @flow */
import React, { StyleSheet } from "react-native";
import Button from './Button';

export default (props) => {
  const { children, onPress } = props;
  return (
    <Button style={styles.optionButton} onPress={onPress}>{children}</Button>
  );
}

var styles = StyleSheet.create({
  optionButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    width: 100,
    height: 100,
    marginTop: 10,
    marginLeft: 10,
  }
});
