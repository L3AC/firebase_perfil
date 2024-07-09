import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = getAuth();

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('Logged in with:', user.email);
        navigation.navigate('Home');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <View>
      <View style={styles.contenedor}>
        <TextInput style={styles.inputUsu} placeholderTextColor={'#fff'} placeholder="Email" value={email} onChangeText={setEmail} />
        <TextInput style={styles.inputContra} placeholderTextColor={'#fff'} placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
        <TouchableOpacity style={styles.boton} onPress={handleLogin}>
          <Text style={styles.textoBoton}>Login</Text>
        </TouchableOpacity>
        <Text onPress={() => navigation.navigate('Register')}>Don't have an account? Register</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    margin: 20,
    padding: 20,
    borderRadius: 20,
    backgroundColor: '#E3E3E3',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.55,
    shadowRadius: 3.84,
    elevation: 5,
  },

  inputUsu: {
    backgroundColor: '#2F2C2C',
    marginTop: 20,
    width: '75%',
    height: 45,
    borderRadius: 12,
    alignSelf: 'center',
    padding: 10,
    fontFamily: 'Arial'
  },
  inputContra: {
    backgroundColor: '#2F2C2C',
    marginTop: 10,
    width: '75%',
    height: 45,
    borderRadius: 12,
    alignSelf: 'center',
    padding: 10,
    fontFamily: 'Arial'
  },

  boton: {
    width: '50%',
    height:45,
    padding: 10,
    borderColor: '#2F2C2C',
    borderWidth: 2,
    borderRadius: 10,
    marginTop: 10,
    alignSelf: 'center'
  },
  
  textoBoton:{
    color: '#2F2C2C',
    textAlign: 'center',
  },
});

export default LoginScreen;
