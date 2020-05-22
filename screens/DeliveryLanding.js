import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BigButton from '../components/BigButton'

export default function DeliveryLanding() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome delivery person</Text>
      <BigButton borderColor="#3772FF" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#272223',
  },
  title: {
    color: '#B9A6CB',
    fontSize: 25,
    marginBottom: 100 
  }
});
