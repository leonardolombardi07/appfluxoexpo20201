import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { screenWidth, screenHeight } from '../constants/dimensions';
import { PRIMARY_COLOR_DARK } from '../constants/colors';

export default function PrimaryButton(props) {
    return (
        <TouchableOpacity onPress={props.onPress} style={styles.buttonContainerStyle}>
            <Text style={styles.buttonTitleStyle}>{props.buttonTitle}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttonContainerStyle: {
        width: screenWidth * 0.4,
        height: screenWidth * 0.08,
        backgroundColor: '#F5F5F5',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: screenWidth * 0.01,
        overflow: 'hidden'
    },
    buttonTitleStyle: {
        textAlign: 'center',
    }
})