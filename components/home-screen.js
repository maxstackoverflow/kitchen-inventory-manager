import React from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <TouchableOpacity style={[styles.block]} onPress={() => navigation.navigate('Inventory')}>
                <Image source={require('../images/albatross-1.png')} style={styles.image} />
                <View style={styles.overlay}/>
                <Text style={styles.text}>Inventory</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.block]} onPress={() => navigation.navigate('RecipeSearch')}>
                <Image source={require('../images/kitten-1.png')} style={styles.image} />
                <View style={styles.overlay}/>
                <Text style={styles.text}>Recipe Search</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.block]} onPress={() => navigation.navigate('GroceryList')}>
                <Image source={require('../images/lizard-1.png')} style={styles.image} />
                <View style={styles.overlay}/>
                <Text style={styles.text}>Grocery List</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignContent: 'center',
        alignItems: 'center',
        paddingTop: 20,
        paddingBottom: 20,
        height: Dimensions.get('window').height * 0.8,
    },
    block: {
        height: Dimensions.get('window').height / 4,
        width: Dimensions.get('window').width * 0.8,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: 600,
        marginTop: 10,
        marginBottom: 10,
        position: 'relative',
    },
    image: {
        flex: 1,
        height: Dimensions.get('window').height / 4,
        width: Dimensions.get('window').width * 0.8,
        maxWidth: 599,
        resizeMode: 'cover',
        alignContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'lightgrey',
    },
    text: {
        position: 'absolute',
        textAlign: 'center',
        fontSize: Math.min(Dimensions.get('window').height / 4, Dimensions.get('window').width * 0.8) * 0.25,
        color: 'white',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10
    },
    overlay: {
        activeOpacity: .7,
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default HomeScreen;