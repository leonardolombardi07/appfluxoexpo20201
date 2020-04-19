import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { screenWidth } from '../constants/dimensions';

export default function Circle(props) {
    let cor;
    if (props.color === undefined) {
        cor = 'black'
    } else {
        cor = props.color
    };

    return (
        <View style={{...styles.circleStyle, backgroundColor: cor}}>
            <Text>{props.text}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    circleStyle: {
        marginHorizontal: screenWidth * 0.02,
        width: screenWidth * 0.05,
        height: screenWidth * 0.05,
        borderRadius: screenWidth * 0.05 / 2, 
        backgroundColor: '#D6D6D6',
        alignItems: 'center',
        justifyContent: 'center'
    }
});