import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PRIMARY_COLOR_LIGHT, PRIMARY_COLOR_DARK } from '../constants/colors';
import { screenWidth, screenHeight } from '../constants/dimensions';
import PrimaryButton from './PrimaryButton';

export default function LargeCard(props) {
    return (
        <View style={styles.cardContainer}>
            <View style={styles.headerContainer}>
                <Text style={styles.cardTitle}>{props.cardTitle} {'\n'}      {props.cardSubTitle}</Text>
                {props.icon}
            </View>
            <View style={styles.footerContainer}>
                { props.withStatus ? 
                <Text style={styles.buttonTitleStyle}>
                    {props.status === null ? "SEM PLANTAO" : props.status}
                </Text> :
                <PrimaryButton 
                buttonTitle={props.firstButtonTitle} 
                onPress={props.firstButtonOnPress}
                />
                }
                <PrimaryButton 
                    buttonTitle={props.secondButtonTitle} 
                    onPress={props.secondButtonOnPress} 
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        alignSelf: 'center',
        height: screenHeight * 0.2,
        width:  screenWidth * 0.90,
        backgroundColor: 'transparent',
        marginVertical: screenHeight * 0.03
    },
    headerContainer: {
        height: '65%',
        backgroundColor: '#000000',
        flexDirection: 'row',
        paddingTop: screenHeight * 0.015,
        justifyContent: 'space-around',
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
    buttonTitleStyle: {
        textAlign: 'center',
    }
})