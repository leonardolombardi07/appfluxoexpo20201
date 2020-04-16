import React, { useState } from 'react';
import { TextInput, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { connect } from 'react-redux';
import { signIn } from '../../../redux/actions/authActions';

const LoginScreen = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
      <>
      <Text>Login</Text>

      <TextInput placeholder="Digite seu email" value={email} onChangeText={setEmail}
      autoCapitalize='none' autoCorrect={false} style={styles.textInputStyle}/>
      
      <TextInput placeholder="Digite sua senha" value={password} onChangeText={setPassword}
      autoCapitalize='none' autoCorrect={false} secureTextEntry={true} style={styles.textInputStyle}/>

      <Button title="Log In" onPress={() => props.signIn({ email, password})} />
      </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const mapStateToProps = (state) => {
    return { authData: state.authData };
}

export default connect(
    mapStateToProps,
    { signIn }
)(LoginScreen)