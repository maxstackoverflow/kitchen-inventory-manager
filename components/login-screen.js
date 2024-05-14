import React from 'react';
import { View, TextInput, Pressable, StyleSheet, Dimensions, Text } from 'react-native';
import AuthContext from './auth-context.js';

const LoginScreen = () => {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    const { signIn } = React.useContext(AuthContext);
   
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Username"
                keyboardType="default"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            <Pressable style={styles.button} onPress={() => signIn({ username, password })} >
                <Text style={styles.buttonText}>Login</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        width: Dimensions.get('window').width * 0.8,
        height: 40,
        borderWidth: 1,
        borderColor: 'gray',
        marginBottom: 10,
        paddingHorizontal: 10,
        maxWidth: 500
    },
    button: {
        width: Dimensions.get('window').width * 0.8,
        height: 40,
        borderWidth: 1,
        borderColor: 'lightgray',
        backgroundColor: 'lightblue',
        marginBottom: 10,
        paddingHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: 500
    },
    buttonText: {
        textAlign: 'center',
        verticalAlign: 'middle'
    }
});

export default LoginScreen;