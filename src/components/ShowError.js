import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, RefreshControl, ScrollView } from 'react-native';
import { SECONDARY_COLOR, PRIMARY_COLOR_MAIN_TEXT, PRIMARY_COLOR_DARK } from '../constants/colors';
import { screenWidth, screenHeight } from '../constants/dimensions';
import { Button } from 'native-base';

export default function ShowError(props) {
    // const [isRefreshing, setIsRefreshing] = useState(false);

    // let primaryErrorMessage;
    // let secondaryErrorMessage;
    // switch ( props.errorMessage ) {
    //     case '//':
    //         break;
    //     case '/':
    //         break;
    //     default:
    //         primaryErrorMessage = "Uoops... Algo deu errado!"
    //         secondaryErrorMessage = "Dá um refresh, quem sabe resolve";
    //         break;
    // };

    // const handleRefresh = () => {
    //     setIsRefreshing(true);
    //     try {
    //       props.handleRefresh();
    //     } catch (error) {
    //       alert(error.message)
    //     } finally {
    //       setIsRefreshing(false)
    //     }
    // };

    return (
        <View style={styles.showErrorContainer}>
            <ScrollView 
            showsVerticalScrollIndicator={false}
            // refreshControl={
            // <RefreshControl
            //     refreshing={isRefreshing}
            //     onRefresh={handleRefresh} />
            // }
            >
            <View style={styles.sadSkullContainer}>
                <Image
                style={styles.sadSkullDimensions}
                source={require('../assets/images/sadSkull.png')}
                resizeMode='center'
                />
                <Text style={styles.primaryErrorMessage}>Uoops... Algo deu errado!</Text>
            </View>
            <Text style={styles.secondaryErrorMessage}>
                Parece que nossos servidores cansaram. {'\n'}
                Fica tranquilo, não é você, somos nós.
                Desculpa, caveira!
            </Text>
     
            {/* <TouchableOpacity style={styles.buttonStyle} onPress={handleRefresh}>
                <Text style={styles.buttonTextStyle}>Tentar Novamente</Text>
            </TouchableOpacity> */}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    showErrorContainer: {
        flex:1,
        paddingTop: screenHeight * 0.1,
        alignItems:'center',
        backgroundColor: SECONDARY_COLOR,
        paddingHorizontal: screenWidth * 0.03

    },
    sadSkullContainer: {
        marginBottom: screenHeight * 0.01,
        paddingHorizontal: screenWidth * 0.025,
        // backgroundColor: 'red',
        alignItems:'center',
    },
    sadSkullDimensions: {
        width: screenWidth * 0.4,
        height: screenWidth * 0.6
    },
    primaryErrorMessage: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: screenHeight * 0.03,
        textAlign: 'center',
        marginVertical: screenHeight * 0.005
    },
    secondaryErrorMessage: {
        color: 'black',
        fontWeight: '200',
        fontSize: screenHeight * 0.025,
        fontStyle:'italic',
        textAlign: 'center'
    },
    buttonStyle: {
        marginTop: screenHeight * 0.04,
        height: screenHeight * 0.04,
        padding: screenHeight * 0.04,
        width: '90%',
        alignSelf:'center',
        backgroundColor: '#41c651',
        justifyContent: 'center',
        borderRadius: 10
    },
    buttonTextStyle: {
        textAlign: 'center',
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold'
    }

})