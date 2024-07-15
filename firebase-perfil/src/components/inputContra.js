import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const input = ({ onChangeText, value ,placeholder}) => {
    return (
        <TextInput style={styles.inputUsu}
            placeholderTextColor={'#fff'}
            placeholder={placeholder} value={value}
            onChangeText={onChangeText} secureTextEntry/>
    );
};

const styles = StyleSheet.create({
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
});

export default input;
