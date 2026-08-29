import { View } from 'react-native';
import Server from './Server';

export default function Phalcon(props) {
    return (
        <View>
            <Server styles={props.styles} endpoint={'https://cors.phalcon.com'} />
        </View>
    );
}