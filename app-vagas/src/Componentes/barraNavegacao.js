// BottomTabNavigator.js
import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Views/Home';
import SearchScreen from '../Views/Busca';
import ContactScreen from '../Views/Contato';
import ProfileScreen from '../Views/Perfil';

const Tab = createBottomTabNavigator();

export default function BarraNavegacao() {
  return (
    <Tab.Navigator
    screenOptions={{
    headerShown: false, // Oculta o cabeçalho
    headerStyle: {
      backgroundColor: '#60BE8E', // Cor do header
      borderBottomWidth: 0, // Remove a linha branca do header
    },
    tabBarStyle: {
      padding: 0,
      margin: 8,
      backgroundColor: '#f0f0f0', // Cor da barra de navegação
      borderTopWidth: 0, // Remove a linha branca da tabbar
    },
  }}>
      <Tab.Screen 
      name="Home" 
      component={HomeScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color, size }) => (
            <Image 
            
            source={require('../../assets/Img/BarIcons/home.png')}
            style={{
              width: 30, height: 30}}
            />
        ),
        headerShown: false, // Oculta o cabeçalho
      }}
      />
      <Tab.Screen
       name="Busca"
        component={SearchScreen}
        options={{
          tabBarLabel: 'Busca',
          tabBarIcon: ({ color, size }) => (
            <Image 
            source={require('../../assets/Img/BarIcons/search.png')}
            style={{width: 30, height: 30}}
            />
          ),
        headerShown: false, // Oculta o cabeçalho
        }}
         />
      <Tab.Screen 
      name="Contato"
      component={ContactScreen}
      options={{
        tabBarLabel: 'Contato',
        tabBarIcon: ({ color, size }) => (
          <Image 
          source={require('../../assets/Img/BarIcons/chat.png')}
          style={{width: 30, height: 30}}
          />
        ),
        headerShown: false, // Oculta o cabeçalho
      }}
      />
      <Tab.Screen 
      name="Perfil" 
      component={ProfileScreen}
      options={{
        tabBarLabel: 'Perfil',
        tabBarIcon: ({ color, size }) => (
          <Image 
          source={require('../../assets/Img/BarIcons/user.png')}
          style={{width: 30, height: 30}}
          />
        ),
        headerShown: false, // Oculta o cabeçalho
      }}
      />
    </Tab.Navigator>
  );
}