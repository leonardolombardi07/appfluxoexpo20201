import React, { useState } from 'react';
import { 
    StyleSheet,
    View,
    TextInput,
    TouchableOpacity,
    Text,
    Image,
    KeyboardAvoidingView,
    SafeAreaView
  } from 'react-native';
import { connect } from 'react-redux';
import { signIn } from '../../../redux/actions/authActions';
import { screenWidth, screenHeight } from '../../../constants/dimensions';

const LoginScreen = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
      <KeyboardAvoidingView behavior='height' style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require('../../../assets/logos/logo-fluxo.png')}
          />
        </View>
        
        <SafeAreaView styles={styles.formContainer}>
          <View style={ styles.containerForm}>
            <View style={styles.container2Form}>   
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

            <TouchableOpacity style={styles.buttonContainerForm}>
              <Text
              style={styles.buttonTextForm}
              onPress={() => props.signIn({ email, password })}
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

const mapStateToProps = (state) => {
  return { authData: state.authData };
}

export default connect(
  mapStateToProps,
  { signIn }
)(LoginScreen)

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
    width: screenHeight > 590 ? screenWidth * 0.5 : screenWidth * 0.4,
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
    padding: screenHeight * 0.026,
  },

  containerForm: {
    position: "relative",
    paddingTop: screenHeight * 0.026,
    paddingHorizontal: screenHeight * 0.026,
    bottom: screenHeight * 0.026
  },

  container2Form: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "white",
    marginBottom: screenHeight * 0.012
  },

  inputForm: {
    height: screenHeight * 0.052,
    fontSize: screenWidth * 0.04,
    color: "#FFF",
    left: screenWidth * 0.04
  },

  buttonContainerForm: {
    backgroundColor: "rgb(243,131,63)",
    paddingVertical: screenHeight * 0.01,
    borderRadius: screenHeight * 0.005,
  },

  buttonTextForm: {
    fontSize: screenHeight * 0.028,
    textAlign: "center",
    fontWeight: "bold",
    color: "white"
  },

});
