import React from 'react';
import { StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

export default function ResetPasswordScreen() {
    return (
      <WebView source={{ uri: 'https://podio.com/user/recover/' }} style={styles.webViewContainer} />
    );
};

const styles = StyleSheet.create({
  webViewContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})