import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function TabelaProjetos({ no_prazo, atrasados, critico, total_projetos }) {
    return (
        <View style={styles.container}>
            <View style={styles.itemViewStyle}>
                <Text style={styles.itemTextStyle}>No Prazo</Text>
                <Text style={styles.greenNumberStyle}>{no_prazo}</Text>
            </View>
            <View style={styles.itemViewStyle}>
                <Text style={styles.itemTextStyle}>Atrasado</Text>
                <Text style={styles.orangeNumberStyle}>{atrasados}</Text>
            </View>
            <View style={styles.itemViewStyle}>
                <Text style={styles.itemTextStyle}>Crítico</Text>
                <Text style={styles.redNumberStyle}>{critico}</Text>
            </View>
            <View style={styles.itemViewStyle}>
                <Text style={styles.itemTextStyle}>Total</Text>
                <Text style={styles.finalNumberStyle}>{total_projetos}</Text>
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
        paddingTop:2
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