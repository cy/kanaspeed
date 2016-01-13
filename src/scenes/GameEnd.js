/* @flow */
import React, { Text, View } from "react-native";

export default (props) => {
  const { numCorrect, time, question, answer, selected } = props;
  return (
    <View>
      <Text>Game Over</Text>
      <Text>{question}-> ✓{answer}, x {selected}</Text>
      <Text>Score: ✓{numCorrect}, {time}s</Text>
    </View>
  );
}

