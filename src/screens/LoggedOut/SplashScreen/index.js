import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { tryLocalSignIn } from '../../../redux/actions/authActions';

const SplashScreen = (props) => {

  useEffect(() => {
    props.tryLocalSignIn();
  },[])

  return (
    <View style={styles.container}>
      <Text>SplashScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const mapStateToProps = (state) => {
    return { authData: state.authData };
}

export default connect(
    mapStateToProps,
    { tryLocalSignIn }
)(SplashScreen)