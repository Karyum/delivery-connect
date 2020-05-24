import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import DeliveryStack from './navigation/Delivery/DeliveryStack'
import OwnerStack from './navigation/Owner/OwnerStack'

import useCachedResources from './hooks/useCachedResources';
import Signin from './screens/Signin';

export default function App(props) {
  const [isLoadingComplete, userData] = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else if (!userData.type) {
    return <Signin />;
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' ? (
          <StatusBar barStyle="dark-content" />
        ) : (
          <StatusBar barStyle="default" />
        )}

        {userData.type === 'owner' ? <OwnerStack /> : <DeliveryStack />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
