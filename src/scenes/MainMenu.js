/* @flow */
/*eslint-disable prefer-const */

import React from "react-native";
import Game from "./Game";

let {
  Navigator,
  View,
  Text,
  TouchableHighlight,
  StyleSheet
} = React;

class MenuButton extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <TouchableHighlight onPress={() => this.props.navigator.push({id: 'Game'})}>
        <View style={{borderWidth: 1, marginTop: 10, paddingRight: 5, paddingLeft: 5}}>
          <Text style={{fontSize: 50}}>{children}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

class MainMenu extends React.Component {
  render() {
    const {navigator} = this.props;
    return (
      <View style={{flex: 1}}>
          <View style={styles.container}>
          <MenuButton navigator={navigator}>あ</MenuButton>
          <MenuButton navigator={navigator}>ア</MenuButton>
          <MenuButton navigator={navigator}>あ+ア</MenuButton>
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
    }
});

export default MainMenu;
