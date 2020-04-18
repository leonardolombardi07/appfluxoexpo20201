import React from 'react';
import { View } from 'react-native';
import { screenHeight } from '../constants/dimensions';

export default function Spacer(props) {
    let spacerHeight = 0.2;

    if (props.height !== undefined) {
        spacerHeight = props.height;
    }
    return (
        <View style={{ height: screenHeight * spacerHeight}} />
    );
};