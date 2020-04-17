import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function MNPScreen(props) {

  return (
    <View style={styles.container}>
      <Text>MNPScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgrey',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

