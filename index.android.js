const React = require('react-native');

const {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  Image,
  TouchableHighlight, TouchableOpacity
} = React;

import Game from './src/scenes/Game';
import MainMenu from './src/scenes/MainMenu';
import GameEnd from './src/scenes/GameEnd';

class kanaspeed extends React.Component {
  renderScene(route, navigator) {
    if (route.id === 'MainMenu') {
      return <MainMenu navigator={navigator} route={route} />
    }
    if (route.id === 'Game') {
      return <Game navigator={navigator}
                   route={route}
                   kanaTypes={route.kanaTypes}
              />
    }
    if (route.id === 'GameEnd') {
      return <GameEnd numCorrect={route.numCorrect}
                      navigator={navigator}
                      time={route.time}
                      selected={route.selected}
                      question={route.question}
                      answer={route.answer}
                      kanaTypes={route.kanaTypes}
                      />
    }
  }

  render() {
    return (
      <Navigator style={{flex:1}}
                  initialRoute={{id: 'MainMenu', name: 'MainMenu', index: 0}}
                  renderScene={this.renderScene}
       />
    );
  }
}

AppRegistry.registerComponent('kanaspeed', () => kanaspeed);
