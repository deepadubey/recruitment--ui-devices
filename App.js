import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ApiCall1 from './components/sample/ApiCall1';
import SignInComponent from './components/user/SignInComponent';n
import AlertTitle from '@material-ui/lab/AlertTitle'

export default function App() {
  return (
    <View style={styles.container}>
      
      <ApiCall1/>
      <Text>Open up App.js to start working on your app! this line is added by deepak</Text>
      <StatusBar style="auto" />

      
    </View>
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
