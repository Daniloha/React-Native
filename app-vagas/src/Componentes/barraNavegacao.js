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
    <Tab.Navigator>
      <Tab.Screen 
      name="Home" 
      component={HomeScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color, size }) => (
            <Image 
            
            source={require('../../assets/Img/BarIcons/home.png')}
            style={{width: 30, height: 30}}
            />
        )
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
          )
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
        )
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
        )
      }}
      />
    </Tab.Navigator>
  );
}