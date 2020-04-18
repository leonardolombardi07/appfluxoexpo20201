import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { screenWidth } from '../../../constants/dimensions';

export default function MainHeaderBackButton() {
    const navigation = useNavigation();
    return (
        <TouchableOpacity 
            onPress={() => navigation.goBack()}
            style={styles.headerButtonStyle}
        >
            <Ionicons name="md-arrow-round-back" size={screenWidth * 0.075} color="orange" />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    headerButtonStyle: {
        marginLeft: screenWidth * 0.05,
        marginRight: screenWidth * 0.06
    }
});