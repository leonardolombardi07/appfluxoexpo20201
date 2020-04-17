import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ShowError({ errorMessage }) {
    return (
        <View style={styles.showErrorContainer}>
            <Text>{errorMessage}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    showErrorContainer: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: 'red'
    }
})