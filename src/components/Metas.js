import React from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import { Card, CardItem } from 'native-base';
import AnimatedProgressWheel from 'react-native-progress-wheel';

export default function Metas (props) {
    
    return(
        <View>
            <Card style={styles.Card}>
                <CardItem style={styles.carditem}>
                <Text style={{fontWeight: "bold", fontSize: 30, marginBottom: 15}}>Metas</Text>
                    <View style ={ styles.Line1}>
                        <AnimatedProgressWheel 
                            size={screenWidth * 0.375 * 0.5} 
                            width={10} 
                            color={'orange'}
                            progress={50}
                            backgroundColor={'grey'}
                        />
                        <Text style = {styles.moedastext}>
                          NPS  
                        </Text>

                        <AnimatedProgressWheel 
                            size={screenWidth * 0.375 * 0.5} 
                            width={10} 
                            color={'orange'}
                            progress={50}
                            backgroundColor={'grey'}
                        />
                        <Text style = {styles.moedastext}>
                            Prazo
                        </Text>
                    </View>
                    <View style = {styles.Line2}>
                        <AnimatedProgressWheel 
                            size={screenWidth * 0.375 * 0.5} 
                            width={10} 
                            color={'orange'}
                            progress={50}
                            backgroundColor={'grey'}
                        />
                        <Text style = {styles.moedastext}>
                            Valor Vendido
                        </Text>
                    </View>
                </CardItem>
            </Card>
        </View>
    )
}

const screenWidth = Math.round(Dimensions.get("window").width);

const styles = StyleSheet.create({
  line1: {
    width: screenWidth * 0.8,
    flexDirection: "row",
    justifyContent: "space-between",

    // borderColor: "#f00",
    // borderWidth: StyleSheet.hairlineWidth
  },

  carditem: {
    flexDirection: "column",
    borderRadius: 15,
    marginLeft: "auto",
    marginRight: "auto"
    },

    card:{
        flex: 1,
        borderRadius: 15,
        marginLeft: '5%',
        marginRight: '5%',
        marginBottom: 30,
    },
    carditem:{
        flex: 0,
        flexDirection: 'column',
        borderRadius: 15,
        marginLeft: 'auto',
        marginRight: 'auto',
},

});





