// PerfilStack.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PerfilScreen from '../Views/Perfil';
import Cadastro from '../Views/Cadastro'; // Importe a tela de Cadastro

const PerfilStack = createStackNavigator();

export default function PerfilStackNavigator() {
  return (
    <NavigationContainer>
    <PerfilStack.Navigator>
      <PerfilStack.Screen name="Perfil" 
      component={PerfilScreen} />
      <PerfilStack.Screen name='Cadastro' 
      component={Cadastro} /> {/* Adicione a tela de Cadastro como uma rota */}
    </PerfilStack.Navigator>
  </NavigationContainer>
  );
}