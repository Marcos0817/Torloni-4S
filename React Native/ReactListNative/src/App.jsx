import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Styles } from "./Styles";
import { Header } from "./components/header/Header";
import { FrmCadTask } from "./components/frmCadTask/FrmCadTask";


function App(){ 
    return (
        <SafeAreaProvider>
            <SafeAreaView style={Styles.safeArea}>
                <Header />
                <FrmCadTask />
                <View style={Styles.container}>
                    <Text>My App</Text>
                    <StatusBar style="auto" />
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}




export default App;