/* @flow */
import React from 'react-native';
import OptionButton from '../components/OptionButton';
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

class Game extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      mapping: props.kanaTypes.reduce((acc, type) => acc = {...acc, ...data[type]}, {}),
      q: "",
      options: [],
      correct: 0,
      secondsElapsed: 0,
    };
  }

  tick() {
    this.setState({secondsElapsed: this.state.secondsElapsed + 1});
  }

  componentDidMount() {
    this.pickQuestion();
    this.interval = setInterval(this.tick.bind(this), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
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
      const answer = this.state.mapping[this.state.q];
      if (choice === answer) {
        this.setState({score: this.state.correct++});
        this.pickQuestion();
      } else {
        this.props.navigator.push({id: 'GameEnd',
                                   numCorrect: this.state.correct,
                                   time: this.state.secondsElapsed,
                                   question: this.state.q,
                                   answer: answer,
                                   selected: choice,
        })
      }
    };

    const { options, correct } = this.state;
    return (
      <View style={{flex: 1, alignItems: 'stretch'}}>
      <View style={{flexDirection: 'row', alignItems: 'stretch', justifyContent: 'space-between'}}>
        <Text style={{alignSelf: 'flex-start', padding: 3}}>✓ { correct }</Text>
        <Text style={{alignSelf: 'flex-end', padding: 3}} >{ this.state.secondsElapsed }s</Text>
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
});

export default Game;
