import React, { Component } from 'react';
import {Text, View, TextInput} from 'react-native';
import { connect } from 'react-redux'

@connect((store) => {
  return {
    user: store.user
  }
})
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
       <Text>{this.props.user.name}</Text>
        <TextInput
         style={{height: 40, width: 100}}
         placeholder="Co chcesz znalezc"
         onChangeText={(text) => this.setState({text})}
       />
      </View>
   )
  }
}
