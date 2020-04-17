import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { screenWidth } from '../../../constants/dimensions';

export default function MainHeaderButton()  {
    const navigation = useNavigation();
    return (
        <TouchableOpacity 
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
            style={styles.headerButtonStyle}
        >
            <Ionicons name="md-menu" size={35} color="orange" />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    headerButtonStyle: {
        marginLeft: screenWidth * 0.03
    }
})