import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import Input  from '../components/input';
import InputC from '../components/inputContra';
import Boton from '../components/boton';

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = getAuth();

  const handleRegister = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <View>
      <View style={styles.contenedor}>
        <Text style={styles.titulo}>Registro</Text>
        <Input
            onChangeText={setEmail}
            value={setEmail}
            placeholder="Email"
        />
        <Input
            onChangeText={setPassword}
            value={password}
            placeholder="Clave"
            secureTextEntry
        />
        <Boton
            textoBoton="Registro"
            accionBoton={handleRegister}
        />
        <View style={styles.contenedorText}>
          <Text style={styles.textoRegistro} onPress={() => navigation.navigate('Login')}>¿Ya tienes una cuenta? Iniciar sesión</Text>
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
    fontWeight: 'bold'
  },
  inputUsu: {
    backgroundColor: '#2F2C2C',
    marginTop: 20,
    width: '75%',
    height: 45,
    borderRadius: 12,
    alignSelf: 'center',
    padding: 10,
    fontFamily: 'Arial',
    color: '#fff'
  },
  inputContra: {
    backgroundColor: '#2F2C2C',
    marginTop: 10,
    width: '75%',
    height: 45,
    borderRadius: 12,
    alignSelf: 'center',
    padding: 10,
    fontFamily: 'Arial',
    color: '#fff'
  },
  boton: {
    width: '50%',
    height: 45,
    padding: 10,
    borderColor: '#2F2C2C',
    borderWidth: 2,
    borderRadius: 10,
    marginTop: 10,
    alignSelf: 'center'
  },
  textoBoton: {
    color: '#2F2C2C',
    textAlign: 'center',
  },
  contenedorText: {
    alignSelf: 'center',
    marginTop: 10
  },
  textoRegistro: {
    fontFamily: 'Arial',
    textAlign: 'center',
    width: 150,
  },
});

export default RegisterScreen;
