import { StatusBar } from 'expo-status-bar';
import {  Text, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { styles } from './assets/Estilos/Geral.js';
import {NavBar} from './src/Componentes/barraNav.js';
import { BarraStyle } from './assets/Estilos/Barra-nav.js';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
    <NavigationContainer style={BarraStyle.container}>
    <View styles={styles.container}>
      <Text style={styles.text}>Hello World!</Text>
      <NavBar style={BarraStyle.navbar} />
    </View>
    </NavigationContainer>
    <StatusBar style="auto" />
    </SafeAreaView>
  );
}



