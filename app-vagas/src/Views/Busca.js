// SearchScreen.js
import React from 'react';
import {View, Text} from 'react-native';
import styles from '../../assets/Estilos/estilos';
import {LinearGradient} from 'expo-linear-gradient';
export default function SearchScreen() {
  return (
    <View style={styles.primeiroStyle}>
    <LinearGradient
      colors={['#60BE8E', '#33AFC1', '#00A0F4']}
      style={styles.gradient}
    >
            <Text>Busca</Text>
    </LinearGradient>
    </View>
    );
}