import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function TabelaNPS() {
    return (
        <View style={styles.container}>
            <View style={styles.itemViewStyle}>
                <Text style={styles.itemTextStyle}>Promotores</Text>
                <Text style={styles.greenNumberStyle}>44</Text>
            </View>
            <View style={styles.itemViewStyle}>
                <Text style={styles.itemTextStyle}>Neutros</Text>
                <Text style={styles.orangeNumberStyle}>15</Text>
            </View>
            <View style={styles.itemViewStyle}>
                <Text style={styles.itemTextStyle}>Detratores</Text>
                <Text style={styles.redNumberStyle}>2</Text>
            </View>
            <View style={styles.itemViewStyle}>
                <Text style={styles.itemTextStyle}>NPS</Text>
                <Text style={styles.finalNumberStyle}>81.9%</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        flexDirection:'row',
        justifyContent:'space-around',
        borderRadius:20,
        backgroundColor:'white',
        borderRadius:25,
        borderWidth:1,
        paddingBottom:2,
        paddingTop:2,
        paddingHorizontal:8
    },
    itemViewStyle: {
        flexDirection:'column',
        alignItems:'center',
    },
    itemTextStyle: {
        fontSize: 18,
        fontWeight:'bold'
    },
    greenNumberStyle: {
        color:'green',
        fontSize:25,
        fontWeight:'bold'
    },
    orangeNumberStyle: {
        color:'orange',
        fontSize:25,
        fontWeight:'bold'
    },
    redNumberStyle: {
        color:'red',
        fontSize:25,
        fontWeight:'bold'
    },
    finalNumberStyle: {
        color:'grey',
        fontSize: 25,
        fontWeight:'bold'
    }
})