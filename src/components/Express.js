import { Component } from 'react';
import { View } from 'react-native';
import Server from './Server';

export default class Express extends Component {
    render () {
        return (
            <View>
                <Server endpoint={'http://192.168.0.239:19002'} />
            </View>
        );
    }
}