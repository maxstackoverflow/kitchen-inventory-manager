import React from 'react';
import { View, FlatList, Image, Text } from 'react-native';

const RecipeList = () => {
    // Sample data for the list of recipes
    const recipes = [
        {
            id: 1,
            image: require('../images/lizard-1.png'),
            title: 'Recipe 1',
            name: 'Recipe Name 1',
            description: 'Recipe Description 1',
        },
        {
            id: 2,
            image: require('../images/albatross-1.png'),
            title: 'Recipe 2',
            name: 'Recipe Name 2',
            description: 'Recipe Description 2',
        },
        // Add more recipes as needed
    ];

    // Render each item in the list
    const renderItem = ({ item }) => (
        <View>
            <Image source={item.image} style={{ width: 100, height: 100 }} />
            <Text>{item.title}</Text>
            <Text>{item.name}</Text>
            <Text>{item.description}</Text>
        </View>
    );

    return (
        <View>
            <FlatList
                data={recipes}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
};

export default RecipeList;