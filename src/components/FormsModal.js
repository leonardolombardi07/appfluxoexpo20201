import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text, Modal  } from 'react-native';
import { Picker } from 'native-base';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { screenWidth, screenHeight } from '../constants/dimensions';

export default function FormsModal(props) {
    const navigation = useNavigation();
    const [title, setTitle] = useState();
    const [prioridade, setPrioridade] = useState(1);

    return (
        <View style={styles.formsScreenContainer}>
            <View style={styles.formsContainer}>
                <TextInput 
                style={styles.formsTitleInputText}
                placeholder="Adicionar título"
                value={title}
                onChangeText={(newTitle) => setTitle(newTitle)}
                />
                <View style={styles.formsRowContainer}>
                    <Ionicons name="md-clock" size={30} color="grey" />
                   
             
                </View>
                <View style={styles.formsRowContainer}>
                    <AntDesign name="exclamation" size={30} color="grey" />
                    <Text style={{fontSize: 18, color: 'black'}}>Prioridade: </Text>
                    <Picker
                        mode='dropdown'
                        selectedValue={prioridade}
                        onValueChange={(value) =>setPrioridade(value)}
                    >
                        <Picker.Item label="1" value="1" />
                        <Picker.Item label="2" value="2" />
                        <Picker.Item label="3" value="3" />
                        <Picker.Item label="4" value="4" />
                    </Picker>
                </View>
                <View style={styles.formsButtonRowContainer}>
                    <TouchableOpacity style={styles.formsButton} onPress={() => navigation.goBack()}>
                        <Text style={styles.formsButtonText}>Cancelar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.formsButton} onPress={console.log("hi")}>
                        <Text style={styles.formsButtonText}>Salvar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        )
    }

const styles = StyleSheet.create({
        formsScreenContainer: {
            flex: 1,
            justifyContent:'center',
            alignItems: 'center',
        },
        formsContainer: {
            elevation: 10,
            width: screenWidth * 0.9,
            backgroundColor:'white',
            borderRadius: screenHeight * 0.01
        },
        formsTitleInputText: {
            borderBottomWidth: 1,
            borderColor: 'grey',
            fontSize: screenHeight *0.05,
            marginLeft: screenWidth * 0.1,
            marginRight: screenWidth * 0.02,
            marginVertical: screenHeight * 0.01
    
        },
        formsRowContainer: {
            flexDirection: 'row',
            borderWidth: 0.5,
            borderColor: 'grey',
            marginVertical: 10,
            marginHorizontal: screenWidth * 0.02,
            height: screenHeight * 0.065,
            alignItems:'center',
            paddingLeft: screenWidth * 0.01
        },
        formsButtonRowContainer: {
            flexDirection: 'row',
            justifyContent:'center',
            height: screenHeight * 0.065,
            marginVertical: screenHeight * 0.03,
            alignItems:'center',
        },
        formsButton: {
            backgroundColor: 'dodgerblue',
            justifyContent: 'center',
            marginHorizontal: screenWidth * 0.06,
            width: screenWidth * 0.3,
            height: '80%',
        },
        formsButtonText: {
            color: 'white',
            textAlign:'center',
            fontSize: screenHeight * 0.03
        }
    })