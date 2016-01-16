/* @flow */
import React, { Navigator, View, Text, TouchableHighlight, StyleSheet, AsyncStorage } from "react-native";
import Game from "./Game";
import MenuButton from "../components/MenuButton";
import { STORAGE_KEY } from '../constants';

class MainMenu extends React.Component {
  goToGame(kanaTypes) {
    const { navigator, route } = this.props;
    navigator.push({id: 'Game', index: route.index + 1, kanaTypes: kanaTypes});
  }

  async clear() {
    try {
      await AsyncStorage.multiRemove([STORAGE_KEY]);
    } catch (error) {
      console.log('AsyncStorage error: ' + error.message);
    }
  }

  render() {
    const {navigator} = this.props;
    return (
      <View style={{flex: 1}}>
          <View style={styles.container}>
          <MenuButton onPress={this.goToGame.bind(this, ["hiragana"])}>あ</MenuButton>
          <MenuButton onPress={this.goToGame.bind(this, ["katakana"])}>ア</MenuButton>
          <MenuButton onPress={this.goToGame.bind(this, ["hiragana", "katakana"])}>あ+ア</MenuButton>
          <MenuButton onPress={this.clear}>Clear</MenuButton>
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
