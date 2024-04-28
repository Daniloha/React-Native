/**
 * Cadastro.js
 */

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Switch } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import estiloPerfil from '../../assets/Estilos/estilo-perfil';

export default function SignUpScreen() {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [profissao, setProfissao] = useState('');
  const [email, setEmail] = useState('');
  const [idade, setIdade] = useState('');
  const [aluno, setAluno] = useState(false);
  const [matricula, setMatricula] = useState('');
  const [curso, setCurso] = useState('');
  const [emailEstudante, setEmailEstudante] = useState('');
  const [semestre, setSemestre] = useState('');

  const handleSignUp = () => {
    // Lógica de cadastro aqui
    console.log('Cadastro realizado com sucesso');
  };

  return (
    <View style={estiloPerfil.primeiroStyle}>
      <LinearGradient
        colors={['#60BE8E', '#33AFC1', '#00A0F4']}
        style={estiloPerfil.gradient}
      >
        <View style={estiloPerfil.formContainer}>
          <TextInput
            style={estiloPerfil.input}
            placeholder="Nome"
            value={nome}
            onChangeText={setNome}
          />
          <TextInput
            style={estiloPerfil.input}
            placeholder="CPF"
            value={cpf}
            onChangeText={setCpf}
          />
          <TextInput
            style={estiloPerfil.input}
            placeholder="Profissão"
            value={profissao}
            onChangeText={setProfissao}
          />
          <TextInput
            style={estiloPerfil.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={estiloPerfil.input}
            placeholder="Idade"
            value={idade}
            onChangeText={setIdade}
          />
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text>É aluno?</Text>
            <Switch
              value={aluno}
              onValueChange={setAluno}
            />
          </View>
          {aluno && (
            <>
              <TextInput
                style={estiloPerfil.input}
                placeholder="Matrícula"
                value={matricula}
                onChangeText={setMatricula}
              />
              <TextInput
                style={estiloPerfil.input}
                placeholder="Curso"
                value={curso}
                onChangeText={setCurso}
              />
              <TextInput
                style={estiloPerfil.input}
                placeholder="Email do estudante"
                value={emailEstudante}
                onChangeText={setEmailEstudante}
              />
              <TextInput
                style={estiloPerfil.input}
                placeholder="Semestre"
                value={semestre}
                onChangeText={setSemestre}
              />
            </>
          )}
          <TouchableOpacity 
          style={estiloPerfil.button} onPress={handleSignUp}>
            <Text>Cadastrar</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
}