import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BigButton from '../components/BigButton'

export default function OwnerLanding() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome business owner</Text>
      <BigButton borderColor="#612CAD" />
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
