import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text, Modal  } from 'react-native';
import { Picker } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function FormsModal(props) {
    const navigation = useNavigation();
    const [title, setTitle] = useState();

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
                        selectedValue={state.prioridade}
                        onValueChange={(value) => changeState.setPrioridade(value)}
                    >
                        <Picker.Item label="1" value="1" />
                        <Picker.Item label="2" value="2" />
                        <Picker.Item label="3" value="3" />
                        <Picker.Item label="4" value="4" />
                        <Picker.Item label="5" value="5" />
                    </Picker>
                </View>
                <View style={styles.formsRowContainer}>
                <TouchableOpacity style={styles.formsButton} onPress={console.log("hi")}>
                    <Text style={styles.formsButtonText}>Salvar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.formsButton} onPress={() => navigation.goBack()}>
                    <Text style={styles.formsButtonText}>Cancelar</Text>
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
            width: '90%',
            backgroundColor:'white'
        },
        formsTitleContainer: {
            //
        }, 
        formsTitleInputText: {
            borderBottomWidth: 1,
            borderColor: 'grey',
            fontSize: 25,
            marginLeft:50,
            marginRight: 10,
            marginTop: 10
    
        },
        formsRowContainer: {
            flexDirection: 'row',
            borderWidth: 0.5,
            borderColor: 'grey',
            marginTop: 10,
            marginHorizontal: 8,
            height: 50,
            alignItems:'center',
            paddingLeft:2
        },
        formsPicker: {
            //
        },
        formsButton: {
            backgroundColor: 'dodgerblue',
            justifyContent: 'center',
            marginVertical: 20,
            marginHorizontal: 20,
            width: '30%',
            height: 40,
            alignSelf: 'flex-end',
        },
        formsButtonText: {
            color: 'white',
            textAlign:'center',
            fontSize: 20
        }
    })