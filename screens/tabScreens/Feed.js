import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Card = ({ title, subtitle, image, backgroundColor, size }) => {
    return (
        <View style={[styles.card, { backgroundColor, width: size, height: size }]}>
            <Image source={image} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
    );
};

const Feed = () => {
    const { width } = Dimensions.get('window');
    const gridSize = width / 2 - 24; // Calcula el tamaño de las tarjetas según el ancho de la pantalla

    const niches = [
        {
            title: 'Nicho 1',
            subtitle: 'Descripción del Nicho 1',
            image: require('../../assets/llantas.png'), // Reemplaza con la ruta correcta de la imagen
            backgroundColor: '#FF5733', // Color de fondo personalizado
            size: gridSize, // Tamaño de la tarjeta
        },
        {
            title: 'Nicho 2',
            subtitle: 'Descripción del Nicho 2',
            image: require('../../assets/pantalon.png'), // Reemplaza con la ruta correcta de la imagen
            backgroundColor: '#33FF57', // Color de fondo personalizado
            size: gridSize, // Tamaño de la tarjeta
        },
        {
            title: 'Nicho 3',
            subtitle: 'Descripción del Nicho 3',
            image: require('../../assets/pantalon.png'), // Reemplaza con la ruta correcta de la imagen
            backgroundColor: '#33FF57', // Color de fondo personalizado
            size: gridSize, // Tamaño de la tarjeta
        },
        // Agrega más nichos según sea necesario
    ];

    const stores = [
        {
            title: 'Tienda 1',
            subtitle: 'Descripción de la Tienda 1',
            image: require('../../assets/269296629_441887287375666_1192425410188724404_n.jpg'), // Reemplaza con la ruta correcta de la imagen
            backgroundColor: '#5733FF', // Color de fondo personalizado
            size: gridSize, // Tamaño de la tarjeta
        },
        {
            title: 'Tienda 2',
            subtitle: 'Descripción de la Tienda 2',
            image: require('../../assets/ropa.png'), // Reemplaza con la ruta correcta de la imagen
            backgroundColor: '#FF5733', // Color de fondo personalizado
            size: gridSize, // Tamaño de la tarjeta
        },
        // Agrega más tiendas según sea necesario
    ];

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.sectionTitle}>Nichos</Text>
            <View style={styles.gridContainer}>
                {niches.map((niche, index) => (
                    <Card key={index} {...niche} />
                ))}
            </View>

            <Text style={styles.sectionTitle}>Tiendas</Text>
            <View style={styles.gridContainer}>
                {stores.map((store, index) => (
                    <Card key={index} {...store} />
                ))}
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    gridContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    card: {
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 16,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2,
        alignItems: 'center', // Alinea el contenido al centro verticalmente
        justifyContent: 'center', // Alinea el contenido al centro horizontalmente
    },
    image: {
        width: '100%',
        height: '60%', // Establece la altura de la imagen en un porcentaje del tamaño de la tarjeta
        resizeMode: 'cover',
        marginBottom: 8,
        borderRadius: 8,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    subtitle: {
        fontSize: 14,
    },
});

export default Feed;
