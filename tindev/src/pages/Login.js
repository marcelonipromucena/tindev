import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import {
  KeyboardAvoidingView,
  StyleSheet,
  Image,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import api from '../services/api';

import logo from '../assets/logo.png';

export default function Login({navigation}) {
  const [user, setUser] = useState('marcelonipromucena');

  useEffect(() => {
    AsyncStorage.getItem('user').then(user => {
      if (user) {
        navigation.navigate('Main', {user});
      }
    });
  }, []);

  async function handleLogin() {
    try {
      const response = await api.post('/devs', {username: user});
      const {_id} = response.data;

      await AsyncStorage.setItem('user', _id);

      navigation.navigate('Main', {user: _id});
    } catch (error) {
      console.error('Houve um erro', error);
    }
  }
  return (
    <KeyboardAvoidingView
      behavior="padding"
      enabled={Platform.OS === 'ios'}
      style={styles.container}>
      <Image source={logo} />
      <TextInput
        placeholder="Digite seu usuário no github"
        placeholderTextColor="#999"
        autoCapitalize="none"
        autoCorrect={false}
        value={user}
        onChangeText={setUser}
        style={styles.input}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  input: {
    height: 46,
    alignSelf: 'stretch',
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    marginTop: 20,
    paddingHorizontal: 15,
  },
  button: {
    height: 46,
    alignSelf: 'stretch',
    backgroundColor: '#DF4723',
    borderRadius: 4,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
