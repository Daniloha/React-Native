// App.js
import React from 'react';
import {LinearGradient} from 'expo-linear-gradient';
import { View, Text, SafeAreaView , Image} from 'react-native';
import styles from './assets/Estilos/estilos';
import { NavigationContainer } from '@react-navigation/native';
import BarraNavegacao from './src/Componentes/barraNavegacao'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
      <Text style={styles.headerText}>Projeto RH em Ação</Text>
      <Image source={require('./assets/Img/IconMain/Estacio.png')}
      style={{width: 30, height: 30}}/>
      </View>  
        <View style={styles.container}>

        <NavigationContainer>
          <BarraNavegacao />
        </NavigationContainer>
      </View>
    </SafeAreaView>
  );
}
