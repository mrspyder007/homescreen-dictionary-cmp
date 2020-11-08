
import * as React from 'react';
import {
  View,
  
} from 'react-native';
import HomeScreen from './screens/homeScreen';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        
       <AppContainer/>

      </View>
    );
  }
}


var AppNavigator = createSwitchNavigator({
  Homescreen: Homescreen
});

const AppContainer = createAppContainer(AppNavigator);
