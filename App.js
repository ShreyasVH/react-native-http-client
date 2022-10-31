import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Component } from 'react';
import Play from './src/components/Play';
import Springboot from './src/components/Springboot';

export default class App extends Component {
  render () {
    return (
     <View style={styles.container}>
       <View>
         <Play />
       </View>

       <View>
         <Springboot />
       </View>
       <StatusBar style="auto" />
     </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
