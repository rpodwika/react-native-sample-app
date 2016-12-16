/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';

import store from './src/store'
import LoginForm from './src/components/LoginForm';

export default class AwesomeProject extends Component {
  constructor() {
    super();
    this.data = {};
  }
  componentWillMount() {
    this.data = {
      name : 'Robert'
    }
  }
  render() {
    const pic = {
        uri: 'https://media.giphy.com/media/l0HlvjvkiEuGePG3m/giphy.gif'
    };

    return (
      <Provider store={store}>
      <View style={styles.container}>
        <LoginForm></LoginForm>
        <Image source={pic} style={styles.welcomeImg} />
        <Text style={styles.welcome}>
          asdfa {this.data.name}
        </Text>
      </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  welcomeImg: {
    width : 200,
    height: 200
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
