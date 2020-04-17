import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { screenWidth } from '../../../constants/dimensions';

export default function MainHeaderButton()  {
    const navigation = useNavigation();

    return (
        <TouchableOpacity 
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            style={styles.headerButtonStyle}
        >
            <Ionicons name="md-menu" size={screenWidth * 0.088} color="orange" />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    headerButtonStyle: {
        marginLeft: screenWidth * 0.05,
        marginRight: screenWidth * 0.06
    }
})