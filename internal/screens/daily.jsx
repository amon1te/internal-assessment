import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, TextInput } from 'react-native';

const Daily = () => {
    const [goal, setGoal] = useState('run 10 miles');
    return (
        <View style={styles.container}>
            <Text style={styles. goal}>{goal}</Text>
            <Text style={{fontSize: 20, color: 'white'}}>New goal of the day?</Text>
            <TextInput style={styles.input} placeholder='eg. run 10 miles' placeholderTextColor='grey' onChangeText={(value) => setGoal(value)}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'none',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        borderWidth: 1,
        borderBottomColor: '#777',
        borderColor: '#171717',
        padding: 8,
        margin: 10,
        color: 'white',
    },
    goal: {
        fontSize: 40, 
        color: 'white',
        textAlign: 'center',
        paddingHorizontal: 50,
        paddingVertical: 50,
    }
})

export default Daily;