import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';

const GroceryList = () => {
    const groceryItems = [
        { name: 'Apples', quantity: 5, measure: 'pieces' },
        { name: 'Bananas', quantity: 3, measure: 'pieces' },
        { name: 'Milk', quantity: 1, measure: 'litre' },
        // Add more grocery items here
    ];

    return (
        <View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}>
                    <Text>Button 1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text>Button 2</Text>
                </TouchableOpacity>
            </View>
            <ScrollView style={styles.listContainer}>
                {groceryItems.map((item, index) => (
                    <View key={index} style={styles.itemContainer}>
                        <Text>{item.name}</Text>
                        <Text>{item.quantity} {item.measure}</Text>
                        <View style={styles.itemButtons}>
                            <TouchableOpacity style={styles.smallButton}>
                                <Text>Button 1</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.smallButton}>
                                <Text>Button 2</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.smallButton}>
                                <Text>Button 3</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = {
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
    },
    button: {
        backgroundColor: 'lightblue',
        padding: 10,
        borderRadius: 5,
    },
    listContainer: {
        marginTop: 10,
        paddingHorizontal: 10,
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 5,
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray',
    },
    itemButtons: {
        flexDirection: 'row',
    },
    smallButton: {
        backgroundColor: 'lightblue',
        padding: 5,
        borderRadius: 5,
        marginLeft: 5,
    },
};

export default GroceryList;