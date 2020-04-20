import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, CardItem, Text } from 'native-base'


export default function FraseMotivadora({ frase }) {

    return (
        <View style={styles.cardContainerStyle}>
        <Card style={styles.cardStyle}>
            <CardItem style={styles.cardItemStyle}>
                    <Text style={styles.cardItemTextStyle}>
                    {frase} 
                    </Text>
            </CardItem>
        </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainerStyle: {
        width:'90%',
    },
    cardStyle: {
        borderRadius:50,

    },
    cardItemStyle: {
        backgroundColor:'white',
        borderRadius:15,
        borderWidth:1,
        paddingBottom:2,
        paddingTop:2,
        justifyContent:'center',
        minHeight: 60

    },
    cardItemTextStyle: {
        fontSize:22, 
        textAlign:'center',
        fontWeight:'bold'
    }
})