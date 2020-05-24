import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BigButton from '../components/BigButton'
import Colors from '../constants/Colors'

export default function OwnerLanding() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome business owner</Text>
      <BigButton borderColor={Colors.mainOwnerColor} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.spaceBlackBackground,
  },
  title: {
    color: Colors.lightText,
    fontSize: 25,
    marginBottom: 100 
  }
});
