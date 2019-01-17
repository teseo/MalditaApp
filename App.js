/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import styled from 'styled-components'

const MainCounter = styled.View`
  flex:1;
  justify-content: center;
  align-items: center;
  background-color: #F5FCFF;
`;
const WelcomeText = styled.Text`
  font-size: 20;
  text-align: center;
  margin: 10px;
`;
const InstructionsText = styled.Text`
  font-size: 20;
  text-align: center;
  margin-bottom: 5;
  color: #333333;
`;
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <MainCounter>
        <WelcomeText>Welcome to React Native!</WelcomeText>
        <InstructionsText>To get started, edit App.js</InstructionsText>
        <InstructionsText>{instructions}</InstructionsText>
      </MainCounter>
    );
  }
}
