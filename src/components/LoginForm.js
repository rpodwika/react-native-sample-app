import React, { Component } from 'react';
import {Text, View, TextInput} from 'react-native';

export default class LoginForm extends Component
{
  constructor (props) {
    super(props)
    this.state = {
      text : ''
    }
  }
  render() { 
    return (
      <View>
        <TextInput
         style={{height: 40, width: 100}}
         placeholder="Co chcesz znalezc"
         onChangeText={(text) => this.setState({text})}
       />
      </View>
   )
  }
}
