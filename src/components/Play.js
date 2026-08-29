import { View } from 'react-native';
import Server from './Server';

export default function Play(props) {
  return (
      <View>
        <Server styles={props.styles} endpoint={'https://cors.playframework.com'} />
      </View>
  );
}