import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function PROScreen(props) {

  return (
    <View style={styles.container}>
      <Text>PROScreen</Text>
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

