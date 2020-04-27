import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Image,
  KeyboardAvoidingView,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import { connect } from "react-redux";
import { signIn } from "../../../redux/actions/authActions";
import { screenWidth, screenHeight } from "../../../constants/dimensions";
import { FontAwesome } from "@expo/vector-icons";

const LoginScreen = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSignInPress = async ({ email, password }) => {
    setIsLoading(true);
    await props.signIn({ email, password });
    setIsLoading(false);
  };

  return (
    <KeyboardAvoidingView behavior="height" style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../../../assets/logos/logo-fluxo.png")}
        />
      </View>

      <SafeAreaView styles={styles.formContainer}>
        <View style={styles.containerForm}>
          <View style={styles.container2Form}>
            <FontAwesome name="user" style={styles.iconStyle} />
            <TextInput
              style={styles.inputForm}
              placeholder="Usuário (Podio)"
              onChangeText={(value) => setEmail(value)}
              placeholderTextColor="#d2dae2"
              autoCapitalize="none"
              keyboardType="email-address"
              returnKeyType="next"
              keyboardAppearance="dark"
            />
          </View>

          <View style={styles.container2Form}>
            <FontAwesome name="asterisk" style={styles.iconStyle} />
            <TextInput
              style={styles.input2Form}
              placeholder="Senha (Podio)"
              onChangeText={(value) => setPassword(value)}
              placeholderTextColor="#d2dae2"
              autoCapitalize="none"
              secureTextEntry
              returnKeyType="go"
              keyboardAppearance="dark"
            />
          </View>

          <View style={styles.errorMessageContainer}>
            {props.authData.loginErrorMessage === null ? null : (
              <Text style={styles.errorMessageStyle}>
                {props.authData.loginErrorMessage}
              </Text>
            )}
          </View>

          <TouchableOpacity
            style={styles.buttonContainerForm}
            activeOpacity={2}
          >
            {isLoading === true ? (
              <ActivityIndicator size="small" />
            ) : (
              <Text
                style={styles.buttonTextForm}
                onPress={() => handleSignInPress({ email, password })}
              >
                Login
              </Text>
            )}
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => props.navigation.navigate("ResetPasswordScreen")}
          >
            <Text style={styles.linkTextStyle}>Esqueci minha senha</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

const mapStateToProps = (state) => {
  return { authData: state.authData };
};

export default connect(mapStateToProps, { signIn })(LoginScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e272e",
  },

  logoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  logo: {
    resizeMode: "contain",
    width: screenHeight > 590 ? screenWidth * 0.5 : screenWidth * 0.4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },

  formContainer: {
    flex: 1,
    padding: screenHeight * 0.026,
  },

  containerForm: {
    position: "relative",
    paddingTop: screenHeight * 0.026,
    paddingHorizontal: screenHeight * 0.026,
    bottom: screenHeight * 0.026,
  },

  container2Form: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "white",
    flexDirection: "row",
    paddingLeft: screenWidth * 0.02,
    alignItems: "center",
  },
  iconStyle: {
    color: "rgb(243,131,63)",
    fontSize: 23,
  },
  inputForm: {
    height: screenHeight * 0.052,
    fontSize: screenWidth * 0.04,
    color: "#FFF",
    width: "89%",
    marginLeft: 20,
  },
  input2Form: {
    height: screenHeight * 0.052,
    fontSize: screenWidth * 0.04,
    color: "#FFF",
    width: "89%",
    marginLeft: 15,
  },

  buttonContainerForm: {
    backgroundColor: "rgb(243,131,63)",
    paddingVertical: screenHeight * 0.01,
    borderRadius: screenHeight * 0.005,
    height: screenHeight * 0.057,
    justifyContent: "center",
  },

  buttonTextForm: {
    fontSize: screenHeight * 0.025,
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
  },
  errorMessageContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: screenHeight * 0.05,
  },
  errorMessageStyle: {
    color: "#ED2939",
    fontSize: screenHeight * 0.018,
  },
  linkTextStyle: {
    color: "white",
    textAlign: "center",
    fontSize: screenHeight * 0.022,
    marginTop: screenHeight * 0.02,
    marginBottom: screenHeight * 0.025,
  },
});
