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

import hiragana from '../../hiragana.json';
import katakana from '../../katakana.json';

const data = {
  "hiragana": hiragana,
  "katakana": katakana
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
      mapping: props.kanaTypes.reduce((acc, type) => acc = {...acc, ...data[type]}, {}),
      q: "",
      options: [],
      correct: 0
    };
  }

  componentDidMount() {
    this.pickQuestion();
  }

  pickQuestion() {
    const { mapping } = this.state;
    const q = this.getRandKey(mapping);
    const others = [0,0,0].map(() => this.getRandValue(mapping));
    this.setState({
      q: q,
      options: _.shuffle([mapping[q], ...others]),
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
      if (choice === this.state.mapping[this.state.q]) {
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
