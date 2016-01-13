/* @flow */

import React from "react-native";
import Button from './Button';

export default (props) => {
  const { navigator, children } = props;
  return (
    <Button onPress={() => navigator.push({id: 'Game'})}
            style={{borderWidth: 1, marginTop: 10, paddingRight: 5, paddingLeft: 5}}>
      {children}
    </Button>
  );
}
