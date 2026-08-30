import { StyleSheet, View } from 'react-native';

export default function Hr() {
    return (
        <View>
            <hr style={styles.hr} />
        </View>
    );
}

const styles = StyleSheet.create({
    hr: {
        height: 1,
        backgroundColor: 'gray',
        marginVertical: 10,
        width: '100%'
    }
});