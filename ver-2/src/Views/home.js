/*
*Tela Home
*/

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import {stylesHomeStyle} from '../../assets/Estilos/home-style.js';

export default function App() {
    return (
        <View style={stylesHomeStyle.container}>
            <Text>Inicial</Text>
            <StatusBar style="auto" />
        </View>
    );
}
