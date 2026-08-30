import { View } from 'react-native';
import Server from './Server';

export default function Express(props) {
    return (
        <View>
            <Server styles={props.styles} endpoint={'https://cors.express.com'} />
        </View>
    );
}