import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { screenWidth, screenHeight } from '../constants/dimensions';
import { PRIMARY_COLOR_LIGHT } from '../constants/colors';
import { AntDesign } from '@expo/vector-icons';

export default function PlusButton(props) {
    return (
        <TouchableOpacity onPress={props.onPress} style={styles.buttonContainerStyle}>
            <AntDesign name="plus" color='white' style={styles.buttonTitleStyle}/>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttonContainerStyle: {
        position: 'absolute',
        bottom: screenWidth * 0.05,
        right: screenWidth * 0.05,
        width: screenWidth * 0.14,
        height: screenWidth * 0.14,
        justifyContent: 'center',
        borderRadius: screenWidth * 0.07,
        backgroundColor: 'lightblue'
    },
    buttonTitleStyle: {
        textAlign: 'center',
        fontSize: screenWidth * 0.1,
        color: PRIMARY_COLOR_LIGHT,
    }
})