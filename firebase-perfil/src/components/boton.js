import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const Boton = ({ textoBoton, accionBoton }) => {
    return (
        <TouchableOpacity style={styles.boton} onPress={accionBoton}>
            <Text style={styles.textoBoton}>{textoBoton}</Text>
        </TouchableOpacity>
    );
};

export default Boton;

const styles = StyleSheet.create({
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
});
