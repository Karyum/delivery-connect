import React from 'react';
import { StyleSheet, Text, View, Button, AsyncStorage } from 'react-native';
import BigButton from '../../../components/BigButton';
import Colors from '../../../constants/Colors';

export default function DeliveryLanding({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome delivery person</Text>
      <BigButton
        onPress={() => navigation.push('DeliveryMapView')}
        borderColor={Colors.mainDeliveryColor}
      />
      <Button title="Clear cache" onPress={() => AsyncStorage.clear()} />
      <Button
        title="Refresh"
        onPress={() => global.__r.Refresh.performFullRefresh()}
      />
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
    marginBottom: 100,
    fontFamily: 'space-mono',
  },
});
