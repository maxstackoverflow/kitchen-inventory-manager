import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const RecipeSearch = () => {
    const navigation = useNavigation();
    const [searchTerm1, setSearchTerm1] = useState('');
    const [searchTerm2, setSearchTerm2] = useState('');
    const [searchTerm3, setSearchTerm3] = useState('');

    const handleSearch = () => {
        console.log('Search terms:', searchTerm1, searchTerm2, searchTerm3);
        navigation.navigate("RecipeList");
    };

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Search Field 1:</Text>
                <TextInput
                    style={styles.input}
                    value={searchTerm1}
                    onChangeText={setSearchTerm1}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Search Field 2:</Text>
                <TextInput
                    style={styles.input}
                    value={searchTerm2}
                    onChangeText={setSearchTerm2}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Search Field 3:</Text>
                <TextInput
                    style={styles.input}
                    value={searchTerm3}
                    onChangeText={setSearchTerm3}
                />
            </View>
            <TouchableOpacity style={styles.button} onPress={handleSearch}>
                <Text style={styles.buttonText}>Search</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    inputContainer: {
        marginBottom: 16,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        padding: 8,
        fontSize: 16,
    },
    button: {
        backgroundColor: 'blue',
        borderRadius: 4,
        padding: 16,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default RecipeSearch;