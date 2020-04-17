import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import { screenHeight } from '../../../constants/dimensions';
import { HerokuApiGetAuth } from '../../../apis/HerokuApi';
import LoadingIndicator from '../../../components/LoadingIndicator';
import limitStringNameSize from '../../../constants/functions/limitStringNameSize';

export default function DrawerHeader(props) {
    const [imageURL, setImageUrl] = useState(undefined);
    const [username, setUsername] = useState(undefined);

    const getImageURL = async () => {
        try {
            const response = await HerokuApiGetAuth.get('/user/status/');
            setImageUrl(response.data.imagem)
            setUsername(limitStringNameSize(response.data.nome))
        } catch(error) {
           setImageUrl(null)
           setUsername(null)
        }
    };
    
    useEffect(() => {
        getImageURL();
    },[])


    return (
        <View style={styles.drawerHeaderContainer}>
            <View style={styles.imagemStyle}>
                { 
                    imageURL === undefined ?
                    <LoadingIndicator /> :
                    imageURL === null ?
                    null : //provide default image
                    <Image 
                    source={{uri: imageURL}} 
                    fadeDuration={0.1}
                    resizeMode='cover' 
                    style={styles.imagemStyle}
                />
                }
            </View>
            <Text style={styles.usernameTextStyle}>Seja bem-vindx, {"\n"}           {username}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    drawerHeaderContainer: {
        flex: 1,
        backgroundColor: 'white',
        borderBottomWidth: 0.8,
        borderColor: 'lightgrey',
        marginBottom: screenHeight * 0.025,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F5F5F5'
    },
    imagemStyle: {
        height: screenHeight * 0.15,
        width: screenHeight * 0.15,
        borderRadius: screenHeight * 0.15 / 2,
        borderWidth: 0.5,
        borderColor: '#D6D6D6',
        overflow: 'hidden',
    },
    usernameTextStyle: {
        flex: 1,
        marginVertical: screenHeight * 0.015,
        fontSize: screenHeight * 0.03,
        fontWeight:'bold',
        marginLeft:'20%',
        alignSelf:'flex-start'
        
    }
})