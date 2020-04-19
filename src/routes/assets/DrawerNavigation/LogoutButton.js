import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import { screenWidth, screenHeight } from '../../../constants/dimensions';


export default function LogoutButton() {
    return (
        <View style={styles.logoutButtonContainer}>
            <SimpleLineIcons name="logout" size={screenWidth * 0.07} color="red" />
            <Text style={styles.logoutTextStyle}>Sair</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    logoutButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: 'blue',
        paddingHorizontal: 0
    },
    logoutTextStyle: {
        color: 'red', 
        fontWeight: '700',
        fontSize: screenWidth * 0.05, 
        marginTop: screenWidth*0.03,
    }
})