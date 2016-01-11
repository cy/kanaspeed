/* @flow */
/*eslint-disable prefer-const */

import React from "react-native";

let {
  View,
  Text,
  TouchableHighlight,
  StyleSheet
} = React;

class OptionButton extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <View style={styles.optionButton}>
        <Text style={{fontSize: 50}}>{ children }</Text>
      </View>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'stretch'}}>
      <View style={{flexDirection: 'row', alignItems: 'stretch', justifyContent: 'space-between'}}>
        <Text style={{alignSelf: 'flex-start', padding: 3}}>✓ 0</Text>
        <Text style={{alignSelf: 'flex-end', padding: 3}}>0 ms</Text>
      </View>
      <View style={styles.container}>
          <View style={{}}>
            <Text style={{fontSize: 50}}>あ</Text>
          </View>
          <View style={{}}>
            <View style={styles.row}>
              <OptionButton>a</OptionButton>
              <OptionButton>i</OptionButton>
            </View>
            <View style={styles.row}>
              <OptionButton>u</OptionButton>
              <OptionButton>e</OptionButton>
            </View>
          </View>
       </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
    margin: 0,
    padding: 0
  },
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

export default Game;
