/* @flow */
import React, { Text, View, AsyncStorage, ScrollView } from 'react-native';
import MenuButton from '../components/MenuButton';
import { STORAGE_KEY } from '../constants';

export default class GameEnd extends React.Component {

  constructor(props) {
    super(props);
    this.state = {highscores: [], ranked: false};
  }

  componentDidMount() {
    this.loadHighscores().done();
  }

  async checkHighscore(highscores: Array<Object>) {
    const { numCorrect, time } = this.props;
    const scores = [...highscores, {numCorrect: numCorrect, time: time, marked: true}];
    const topScores = _.take(_.sortBy(scores, (s) => -s.numCorrect, 'time'), 5);
    const ranked = _.reduce(topScores, (result, s) => s.marked ? true : result, false);
    if (ranked) {
      this.setState({ranked: true});
      this.writeHighscore(topScores).done();
    }
  }

  async loadHighscores() {
    try {
      console.log(`${STORAGE_KEY}:${this.props.kanaTypes.join('.')}`);
      const highscores = await AsyncStorage.getItem(`${STORAGE_KEY}:${this.props.kanaTypes.join('.')}`);
      if (highscores !== null) {
        this.checkHighscore(JSON.parse(highscores)).done();
      } else {
        console.log('Initialized with no selection on disk.');
        this.setState({ ranked: true });
        this.writeHighscore([{ numCorrect: this.props.numCorrect, time: this.props.time, marked: true }]).done();
      }
    } catch (error) {
      console.log('AsyncStorage error: ' + error.message);
    }
  }

  async writeHighscore(topScores: Array<Object>) {
    try {
      await AsyncStorage.setItem(`${STORAGE_KEY}:${this.props.kanaTypes.join('.')}`,
                                 JSON.stringify(topScores.map(s => {return {numCorrect: s.numCorrect, time: s.time};} )));
      console.log('Saved selection to disk' + JSON.stringify(topScores));
      this.setState({ highscores: topScores });
    } catch (error) {
      console.log('AsyncStorage error: ' + error.message);
    }
  }

  render() {
    const { navigator,
            numCorrect,
            time,
            question,
            answer,
            selected } = this.props;
    const { highscores, ranked } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.header}>Game Over</Text>
        <Text style={styles.normalText}>{question} → ✓ {answer}, x {selected}</Text>
        <Text style={styles.normalText}>Score: ✓{numCorrect}, {time}s</Text>
        { ranked &&
            <Text style={{fontSize: 15, marginTop: 5}}>
              You made it to the highscore!
            </Text>
        }
          <View style={styles.score}>
          <Text style={{flex: 1, alignItems: 'center'}}>Highscores</Text>
          { highscores.map( (score, i) =>
            <Text key={i} style={{fontSize: 15, color: score.marked ? '#48D1CC' : '#000000'}}>✓{score.numCorrect} {score.time}s</Text>
            )
          }
          </View>
        <MenuButton onPress={() => navigator.push({id: 'MainMenu'})}>
          OK
        </MenuButton>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  highScore: {
    flex: 1,
    width: 200,
    borderWidth: 1,
    margin: 10
  },
  header: {
    fontSize: 50
  },
  normalText: {
    fontSize: 20
  }
};
