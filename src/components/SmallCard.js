import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PRIMARY_COLOR_LIGHT, PRIMARY_COLOR_DARK } from '../constants/colors';
import { screenWidth, screenHeight } from '../constants/dimensions';
import PrimaryButton from './PrimaryButton';


export default function SmallCard(props) {
    return (
        <View style={styles.cardContainer}>
            <View style={styles.headerContainer}>
                <Text style={styles.cardTitle}>{props.cardTitle}</Text>
                <View style={styles.cardIcon}>
                    {props.icon}
                </View>
                
            </View>
            <View style={styles.footerContainer}>
                <PrimaryButton buttonTitle={props.firstButtonTitle} onPress={props.firstButtonOnPress}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        height: screenHeight * 0.2,
        width: screenWidth * 0.425,
        backgroundColor: 'transparent',
        marginVertical: screenHeight *0.03
    },
    headerContainer: {
        height: '65%',
        backgroundColor: '#000000',
        padding: screenHeight * 0.02,
        borderTopStartRadius: screenHeight * 0.025,
        borderTopRightRadius: screenHeight * 0.025
    },
    cardTitle: {
        color: PRIMARY_COLOR_LIGHT,
        fontWeight: 'bold',
        fontSize: screenHeight * 0.033,
        lineHeight: screenHeight * 0.033
    },
    footerContainer: {
        height: '35%',
        backgroundColor: PRIMARY_COLOR_DARK,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'space-around',
        borderBottomLeftRadius: screenHeight * 0.025,
        borderBottomRightRadius: screenHeight * 0.025
    },
    cardIcon: { 
        alignItems:'flex-end',
        height: screenHeight * 0.05,
        justifyContent:'center'
    }
})