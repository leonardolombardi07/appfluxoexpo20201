import React from 'react';
import { 
    SimpleLineIcons, 
    Ionicons, 
    MaterialCommunityIcons, 
    FontAwesome, 
    Entypo,
    EvilIcons
} from '@expo/vector-icons';
import { screenWidth } from '../../../constants/dimensions';

export function HomeIcon() {
    return (
        <Ionicons name="md-home" size={screenWidth * 0.07} color="orange" />
    )
}

export function UtilidadesIcon() {
    return (
        <EvilIcons name="gear" size={screenWidth * 0.07} color="orange" />
    )
}

export function CCEIcon() {
    return (
        <MaterialCommunityIcons name="cellphone" size={screenWidth * 0.07} color="orange" />
    )
}

export function CELIcon() {
    return (
        <Ionicons name="ios-thunderstorm" size={screenWidth * 0.07} color="orange" />
    )
}

export function MNPIcon() {
    return (
        <FontAwesome name="gears" size={screenWidth * 0.07} color="orange" />
    )
}

export function PROIcon() {
    return (
        <Entypo name="line-graph" size={screenWidth * 0.07} color="orange" />
    )
}

export function QABIcon() {
    return (
        <SimpleLineIcons name="chemistry" size={screenWidth * 0.07} color="orange" />
    )
}