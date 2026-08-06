import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';


export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea} contentContainerStyle={styles.content}>
        <ScrollView style={styles.container}>

            <Text style={styles.text}>Bem vindo ao React List, um aplicativo nativo feito com React Native</Text>
            <Text style={styles.text}>Bem vindo ao React List, um aplicativo nativo feito com React Native</Text>
            <Text style={styles.text}>Bem vindo ao React List, um aplicativo nativo feito com React Native</Text>
            <Text style={styles.text}>Bem vindo ao React List, um aplicativo nativo feito com React Native</Text>
            <Text style={styles.text}>Bem vindo ao React List, um aplicativo nativo feito com React Native</Text>
            <Text style={styles.text}>Bem vindo ao React List, um aplicativo nativo feito com React Native</Text>
            <Text style={styles.text}>Bem vindo ao React List, um aplicativo nativo feito com React Native</Text>
            <Text style={styles.text}>Bem vindo ao React List, um aplicativo nativo feito com React Native</Text>
            <Text style={styles.text}>Bem vindo ao React List, um aplicativo nativo feito com React Native</Text>
            <Text style={styles.text}>Bem vindo ao React List, um aplicativo nativo feito com React Native</Text>
            <Text style={styles.text}>Bem vindo ao React List, um aplicativo nativo feito com React Native</Text>

        </ScrollView>

      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  text: {
    fontSize: 30,
    marginBottom: 20,
  },
  //conteúdo da ScroolView
  content: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,

  },
});
