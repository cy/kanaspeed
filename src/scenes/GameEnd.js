/* @flow */
import React, { Text, View } from 'react-native';
import MenuButton from '../components/MenuButton';

export default (props) => {
  const { navigator, numCorrect, time, question, answer, selected } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Game Over</Text>
      <Text style={styles.normalText}>{question} → ✓{answer}, 𝘅{selected}</Text>
      <Text style={styles.normalText}>Score: ✓{numCorrect}, {time}s</Text>

      <MenuButton onPress={() => navigator.push({id: 'MainMenu'})}>
        OK
      </MenuButton>
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  header: {
    fontSize: 50
  },
  normalText: {
    fontSize: 20
  }
};

