import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './Styles';


export default function App() {
  return (

    <SafeAreaProvider>
      <SafeAreaView style={styles.SafeArea}> 

        <View style={styles.container}>
          <Text style={styles.textHello}>Hello Expo</Text>
          <Text style={styles.text}>Marcos Vinicius de Lima Silva</Text>
          <StatusBar style="auto" />
        </View>

      </SafeAreaView>
    </SafeAreaProvider>
  );
}

