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
  }

  render() {
    return (
      <Navigator style={{flex:1}}
                  initialRoute={{id: 'MainMenu', name: 'MainMenu', index: 0}}
                  renderScene={this.renderScene}
                  navigationBar={ <Navigator.NavigationBar routeMapper={NavigationBarRouteMapper} /> } 
       />
    );
  }
}


var NavigationBarRouteMapper = {
  LeftButton(route, navigator, index, navState) {
    if(index > 0) {
      return (
      <TouchableHighlight  style={{marginTop: 10}} onPress={() => {
            if (index > 0) {
              navigator.pop();
            }
        }}>
       <Text>Back</Text>
     </TouchableHighlight>
 )} else {
 return null}
 },
  RightButton(route, navigator, index, navState) {
    return null;
  },
  Title(route, navigator, index, navState) {
    return null
  }
};


var styles = StyleSheet.create({

});

AppRegistry.registerComponent('kanaspeed', () => kanaspeed);
