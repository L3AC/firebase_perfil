import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { database } from '../config/firebase';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import CardProductos from '../components/CardProductos';
import { getAuth, signOut } from 'firebase/auth';


const Home = ({ navigation }) => {
    const [productos, setProductos] = useState([]);
    const auth = getAuth();

    useEffect(() => {
        const q = query(collection(database, 'productos'), orderBy('creado', 'desc'));
        
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const docs = [];
            querySnapshot.forEach((doc) => {
                docs.push({ id: doc.id, ...doc.data() });
            });
            setProductos(docs);
        });

        return () => unsubscribe();
    }, []);

    const goToAdd = () => { 
        navigation.navigate('Add');
    };

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                console.log('User signed out!');
                navigation.navigate('Login');
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const renderItem = ({ item }) => (
        <CardProductos
            id={item.id}
            nombre={item.nombre}
            precio={item.precio}
            vendido={item.vendido}
            imagen={item.imagen}
        />
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Productos Disponibles</Text>
            {
                productos.length !== 0 ?
                <FlatList
                    data={productos}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={styles.list}
                />
                : 
                <Text style={styles.Subtitle}>No hay productos disponibles</Text>
            }
            <TouchableOpacity
                style={styles.Button}
                onPress={goToAdd}>
                <Text style={styles.ButtonText}>Agregar Producto</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.Button}
                onPress={handleSignOut}>
                <Text style={styles.ButtonText}>Cerrar sesión</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FEFEFE',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    Subtitle: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
        color:'#ff9800'
    },
    Button: {
        backgroundColor: '#0288d1',
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
        marginHorizontal: 50,
        paddingVertical: 20,
    },
    ButtonText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    list: {
        flexGrow: 1,
    },
});
