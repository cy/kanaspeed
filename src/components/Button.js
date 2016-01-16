/* @flow */

import React, {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from "react-native";

export default (props) => {
  const { children, style, onPress } = props;
  return (
    <TouchableOpacity onPress={ onPress }>
      <View style={style}>
        <Text style={{fontSize: 50}}>{children}</Text>
      </View>
    </TouchableOpacity>
  );
}

