import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { connect } from 'react-redux';
import { tryLocalSignIn } from '../../../redux/actions/authActions';

const SplashScreen = (props) => {

  useEffect(() => {
    props.tryLocalSignIn();
  },[])

  return (
    <View style={styles.container}>
      <Image
            style={styles.logo}
            source={require('../../../assets/logos/skull.png')}
            resizeMode='cover'
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
      backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    flex: 1
  }
});

const mapStateToProps = (state) => {
    return { authData: state.authData };
}

export default connect(
    mapStateToProps,
    { tryLocalSignIn }
)(SplashScreen)