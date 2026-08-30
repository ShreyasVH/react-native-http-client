import { View } from 'react-native';
import Server from './Server';

export default function DotnetCore(props) {
    return (
        <View>
            <Server styles={props.styles} endpoint={'https://cors.dotnetcore.com'} />
        </View>
    );
}