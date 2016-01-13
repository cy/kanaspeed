/* @flow */

import React from "react-native";

let {
  View,
  Text,
  TouchableHighlight,
  StyleSheet
} = React;

export default (props) => {
  const { children, style, onPress } = props;
  return (
    <TouchableHighlight onPress={ onPress }>
      <View style={style}>
        <Text style={{fontSize: 50}}>{children}</Text>
      </View>
    </TouchableHighlight>
  );
}

