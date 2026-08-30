import { View } from 'react-native';
import Server from './Server';

export default function Springboot(props) {
  return (
    <View>
      <Server styles={props.styles} endpoint={'https://cors.springboot.com'} />
    </View>
  );
}