import { Component } from 'react';
import { View } from 'react-native';
import Server from './Server';

export default class Play extends Component {
  render () {
    return (
      <View>
        <Server endpoint={'http://192.168.0.204:9013'} />
      </View>
    );
  }
}