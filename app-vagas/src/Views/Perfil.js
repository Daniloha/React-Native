import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
//Perfil.js

import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native'; //
import styles from '../../assets/Estilos/estilo-geral';
import estiloPerfil from '../../assets/Estilos/estilo-perfil';
import Cadastro from './Cadastro';


export default function ProfileScreen() {
  const [emailMatriculaCpf, setEmailMatriculaCpf] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation(); //função de navegação

  const handleLogin = () => {
    // Lógica
    console.log(
      `Email/Matricula/CPF: ${emailMatriculaCpf}, Senha: ${password}`
    );
  };

  const handleCadastroPress = () => {
    navigation.navigate('Cadastro'); // Navegue para a tela de Cadastro
  };

  return (
    <View style={estiloPerfil.primeiroStyle}>
      <LinearGradient
        colors={['#60BE8E', '#33AFC1', '#00A0F4']}
        style={estiloPerfil.gradient}>
        <View style={estiloPerfil.formContainer}>
          <TextInput
            style={estiloPerfil.input}
            placeholder="Email, Matrícula ou CPF"
            value={emailMatriculaCpf}
            onChangeText={setEmailMatriculaCpf}
          />
          <TextInput
            style={estiloPerfil.input}
            placeholder="Senha"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity style={estiloPerfil.button}
           onPress={handleLogin}>
            <Text>Entrar</Text>
          </TouchableOpacity>
          <View style={estiloPerfil.linksContainer}>
            <TouchableOpacity>
              <Text>Esqueceu sua senha?</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => 
            navigation.navigate('Cadastro')}>
              <Text>Cadastrar</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text>Privacidade</Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}
