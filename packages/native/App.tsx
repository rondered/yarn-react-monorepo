import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useExample } from '@react-monorepo/common';

export default function App() {

  const { example, setExample } = useExample();

  return (
    <View style={styles.container}>
      <Text>first line</Text>
      <Text>{{example}}</Text>
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
