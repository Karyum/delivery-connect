import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BigButton from '../components/BigButton'
import Colors from '../constants/Colors'

export default function DeliveryLanding() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome delivery person</Text>
      <BigButton borderColor={Colors.mainDeliveryColor} />
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
