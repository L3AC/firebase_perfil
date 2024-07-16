import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import Input from '../components/input';
import Boton from '../components/boton';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = getAuth();

  const handleLogin = () => {
    console.log('Email:', email, 'Password:', password); 

    if (!email || !password) {
      console.error('Email and password must not be empty');
      return;
    }

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
        <Text style={styles.titulo}>Login</Text>
        <Input
            onChangeText={setEmail}
            value={email}
            placeholder="Email"
        />
        <Input
            onChangeText={setPassword}
            value={password}
            placeholder="Clave"
            secureTextEntry
        />
        <Boton
            textoBoton="Login"
            accionBoton={handleLogin}
        />
        <View style={styles.contenedorText}>
          <Text style={styles.textoRegistro} onPress={() => navigation.navigate('Register')}>No tienes cuenta</Text>
        </View>
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
  titulo: {
    textAlign: 'center',
    fontFamily: 'Arial',
    fontSize: 26,
    fontWeight: 'bold',
  },
  contenedorText: {
    alignSelf: 'center',
    marginTop: 10,
  },
  textoRegistro: {
    fontFamily: 'Arial',
    textAlign: 'center',
    width: 150,
  },
});

export default LoginScreen;
