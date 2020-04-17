import React, { useState } from 'react';
import { StyleSheet,
    View,
    TextInput,
    TouchableOpacity,
    Text,
    Image,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
    StatusBar,
    ActivityIndicator,
    Dimensions,
    Platform,
    Container,
    ScrollView,
    SafeAreaView, Button  } from 'react-native';

export default function Teste () {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        {/* <ScrollView contentContainerStyle={{ flex: 1 }}>
        <Container> */}
        <StatusBar barStyle="light-content" />
        
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require('../assets/logos/Logo.png')}
          />
        </View>
        
        <SafeAreaView styles={styles.formContainer}>
          <View style={ styles.containerForm}>
            <View style={styles.container2Form}>
              {/* <Icon
                name="user-o"
                size={18}
                color="rgb(243,131,63)"
                 style={{ left: 2 }}
              /> */}
               
              <TextInput
                style={styles.inputForm}
                placeholder="Usuário (Podio)"
                onChangeText={value => setEmail(value)}
                placeholderTextColor="#d2dae2"
                autoCapitalize="none"
                keyboardType="email-address"
                returnKeyType="next"
                keyboardAppearance="dark"
              />
            </View>
            
            <View style={styles.container2Form}>
              {/* <Icon
                name="asterisk"
                size={18}
                color="rgb(243,131,63)"
                style={{ left: 2 }}
              /> */}
              
              <TextInput
                style={styles.inputForm}
                placeholder="Senha (Podio)"
                onChangeText={value => setPassword(value)}
                placeholderTextColor="#d2dae2"
                autoCapitalize="none"
                secureTextEntry
                returnKeyType="go"
                keyboardAppearance="dark"
              />
            </View>

            {/* <Text style={styles.errorMesage}>
              {this.state.feedback}
            </Text> */}

            <TouchableOpacity style={styles.buttonContainerForm}>
              <Text
              style={styles.buttonTextForm}
              onPress={() =>
                console.log("ola")}
              >
                Login
              </Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text>
                    Esqueci minha senha
                </Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </KeyboardAvoidingView>
    );
};

const largura = Dimensions.get("window").width;
const altura = Dimensions.get("window").height;

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: "#1e272e"
  },

  logoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  logo: {
    resizeMode: "contain",
    width: altura > 590 ? largura * 0.5 : largura * 0.4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84
  },

  formContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  containerForm: {
    position: "relative",
    paddingTop: 20,
    paddingHorizontal: 20,
    bottom: 20
  },

  container2Form: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "white",
    marginBottom: 10
  },

  inputForm: {
    flex: 1,
    height: 40,
    fontSize: 15,
    color: "#FFF",
    left: 15
  },

  buttonContainerForm: {
    backgroundColor: "rgb(243,131,63)",
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: -5
  },

  buttonTextForm: {
    fontSize: 19,
    textAlign: "center",
    fontWeight: "bold",
    color: "white"
  },

});