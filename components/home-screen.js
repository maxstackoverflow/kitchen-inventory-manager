import React from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
    const navigation = useNavigation();
    const screenHeight = Dimensions.get('window').height;
    const blockHeight = screenHeight / 4;

    return (
        <View style={styles.container}>
            <TouchableOpacity style={[styles.block, { height: blockHeight }]} onPress={() => navigation.navigate('Inventory')} />
            <TouchableOpacity style={[styles.block, { height: blockHeight }]} onPress={() => navigation.navigate('RecipeSearch')}/>
            <TouchableOpacity style={[styles.block, { height: blockHeight }]} onPress={() => navigation.navigate('GroceryList')} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    block: {
        backgroundColor: 'gray',
    },
});

export default HomeScreen;