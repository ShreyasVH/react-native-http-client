import 'react-native-reanimated';
import { StyleSheet, View, ScrollView } from 'react-native';
import Play from "../src/components/Play";
import Springboot from "../src/components/Springboot";
import DotNetCore from "../src/components/DotnetCore";
import Phalcon from "../src/components/Phalcon";
import Express from "../src/components/Express";
import Hr from "../src/components/Hr";

export default function RootLayout() {
  return (
      <ScrollView >
          <View style={styles.container}>
              <Play styles={styles} />

              <br />
              <Hr />
              <br />

              <Springboot styles={styles} />

              <br />
              <Hr />
              <br />

              <DotNetCore styles={styles} />

              <br />
              <Hr />
              <br />

              <Phalcon styles={styles} />

              <br />
              <Hr />
              <br />

              <Express styles={styles} />
          </View>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
      margin: '1%',
  },
    paragraph: {
      marginBottom: 16
    },
    bold: {
      fontWeight: 'bold'
    }
});
