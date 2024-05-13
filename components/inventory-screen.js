import React from 'react';
import { View, ScrollView, Button } from 'react-native';

const InventoryScreen = () => {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                <Button title="Button 1" onPress={() => {}} />
                <Button title="Button 2" onPress={() => {}} />
                <Button title="Button 3" onPress={() => {}} />
            </View>
            <ScrollView style={{ flex: 1 }}>
                {/* Render your list of items here */}
            </ScrollView>
            <View style={{ padding: 10 }}>
                <Button title="Long Button" onPress={() => {}} />
            </View>
        </View>
    );
};

export default InventoryScreen;