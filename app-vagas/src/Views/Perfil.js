import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native'; // Certifique-se de incluir o TextInput aqui
import { LinearGradient } from 'expo-linear-gradient';
import styles from '../../assets/Estilos/estilos';


export default function ProfileScreen() {
  const [emailMatriculaCpf, setEmailMatriculaCpf] = useState('E-mail/Matrícula/CPF');
  const [password, setPassword] = useState('****');

  const handleLogin = () => {
    // Lógica de login aqui
    console.log(`Email/Matricula/CPF: ${emailMatriculaCpf}, Senha: ${password}`);
  };

  return (
    <View style={styles.primeiroStyle}>
      <LinearGradient
        colors={['#60BE8E', '#33AFC1', '#00A0F4']}
        style={styles.gradient}
      >
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email, Matrícula ou CPF"
            value={emailMatriculaCpf}
            onChangeText={setEmailMatriculaCpf}
          />
          <TextInput
            style={styles.input}
            placeholder="Senha"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text>Entrar</Text>
          </TouchableOpacity>
          <View style={styles.linksContainer}>
            <TouchableOpacity>
              <Text>Esqueceu sua senha?</Text>
            </TouchableOpacity>
            <TouchableOpacity>
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