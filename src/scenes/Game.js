/* @flow */
/*eslint-disable prefer-const */

import React from 'react-native';
import Button from '../components/Button';
import _ from 'lodash';

let {
  View,
  Text,
  TouchableHighlight,
  StyleSheet
} = React;

const data = {
  "hiragana": { "あ": "a", "い": "i", "う": "u", "え": "e", "お": "o", "か": "ka", "き": "ki", "く": "ku", "け": "ke", "こ": "ko", "さ": "sa", "し": "shi", "す": "su", "せ": "se", "そ": "so", "た": "ta", "ち": "chi", "つ": "tsu", "て": "te", "と": "to", "な": "na", "に": "ni", "ぬ": "nu", "ね": "ne", "の": "no", "は": "ha", "ひ": "hi", "ふ": "fu", "へ": "he", "ほ": "ho", "ま": "ma", "み": "mi", "む": "mu", "め": "me", "も": "mo", "ら": "ra", "り": "ri", "る": "ru", "れ": "re", "ろ": "ro", "わ": "wa", "を": "wo", "ん": "n", "が": "ga", "ぎ": "gi", "ぐ": "gu", "げ": "ge", "ご": "go", "ざ": "za", "じ": "ji", "ず": "zu", "ぜ": "ze", "ぞ": "zo", "だ": "da", "ぢ": "ji", "づ": "zu", "で": "de", "ど": "do", "ば": "ba", "び": "bi", "ぶ": "bu", "べ": "be", "ぼ": "bo", "ぱ": "pa", "ぴ": "pi", "ぷ": "pu", "ぺ": "pe", "ぽ": "po", "や": "ya", "ゆ": "yu", "よ": "yo", "きゃ": "kya", "きゅ": "kyu", "きょ": "kyo", "しゃ": "sha", "しゅ": "shu", "しょ": "sho", "ちゃ": "cha", "ちゅ": "chu", "ちょ": "cho", "にゃ": "nya", "にゅ": "nyu", "にょ": "nyo", "ひゃ": "hya", "ひゅ": "hyu", "ひょ": "hyo", "みゃ": "mya", "みゅ": "myu", "みょ": "myo", "りゃ": "rya", "りゅ": "ryu", "りょ": "ryo", "ぎゃ": "gya", "ぎゅ": "gyu", "ぎょ": "gyo", "じゃ": "ja", "じゅ": "ju", "じょ": "jo", "びゃ": "bya", "びゅ": "byu", "びょ": "byo", "ぴゃ": "pya", "ぴゅ": "pyu", "ぴょ": "pyo" }
};

class OptionButton extends React.Component {
  render() {
    const { children, onPress } = this.props;
    return (
      <Button style={styles.optionButton} onPress={onPress}>{children}</Button>
    );
  }
}

class Game extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      q: "",
      options: [],
      correct: 0
    };
  }

  componentDidMount() {
    this.pickQuestion();
  }

  pickQuestion() {
    const q = this.getRandKey(data.hiragana);
    const others = [0,0,0].map(() => this.getRandValue(data.hiragana));
    this.setState({
      q: q,
      options: _.shuffle([data.hiragana[q], ...others]),
    });
  }

  getRandIndex(arr) {
    return Math.floor(Math.random() * Object.keys(arr).length);
  }

  getRandKey(arr) {
    const randIndex = Math.floor(Math.random() * Object.keys(arr).length);
    return Object.keys(arr)[randIndex];
  }

  getRandValue(arr) {
    const randIndex = Math.floor(Math.random() * Object.keys(arr).length);
    return arr[Object.keys(arr)[randIndex]];
  }

  render() {
    const check = (choice) => {
      if (choice === data.hiragana[this.state.q]) {
        this.setState({score: this.state.correct++});
        this.pickQuestion();
      }
      // end game
    };

    const { options, correct } = this.state;
    return (
      <View style={{flex: 1, alignItems: 'stretch'}}>
      <View style={{flexDirection: 'row', alignItems: 'stretch', justifyContent: 'space-between'}}>
        <Text style={{alignSelf: 'flex-start', padding: 3}}>✓ { correct }</Text>
        <Text style={{alignSelf: 'flex-end', padding: 3}}>0 ms</Text>
      </View>
      <View style={styles.container}>
          <View style={{}}>
            <Text style={{fontSize: 50}}>{this.state.q}</Text>
          </View>
          <View style={{}}>
            <View style={styles.row}>
              <OptionButton onPress={check.bind(this, options[0])}>{options[0]}</OptionButton>
              <OptionButton onPress={check.bind(this, options[1])}>{options[1]}</OptionButton>
            </View>
            <View style={styles.row}>
              <OptionButton onPress={check.bind(this, options[2])}>{options[2]}</OptionButton>
              <OptionButton onPress={check.bind(this, options[3])}>{options[3]}</OptionButton>
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
