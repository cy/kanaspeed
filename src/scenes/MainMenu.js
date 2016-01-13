/* @flow */
/*eslint-disable prefer-const */

import React from "react-native";
import Game from "./Game";
import MenuButton from "../components/MenuButton";

let {
  Navigator,
  View,
  Text,
  TouchableHighlight,
  StyleSheet
} = React;

class MainMenu extends React.Component {
  goToGame() {
    this.props.navigator.push({id: 'Game'});
  }

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
