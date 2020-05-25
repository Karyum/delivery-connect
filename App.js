import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';

import DeliveryStack from './navigation/Delivery/DeliveryStack';
import ManagerStack from './navigation/Manager/ManagerStack';

import useCachedResources from './hooks/useCachedResources';
import Signin from './screens/Signin';

const useForceUpdate = () => React.useState()[1];

export default function App(props) {
  const [{isLoadingComplete, userData}] = useCachedResources();
  const [signedIn, setSignedIn] = React.useState({ status: false, user: {} });

  if (!isLoadingComplete) {
    return null;
  } else if (!userData.role && !signedIn.user.role) {
    return <Signin setUserData={setSignedIn} />;
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' ? (
          <StatusBar barStyle="dark-content" />
        ) : (
          <StatusBar barStyle="default" />
        )}

        {userData.role === 'manager' || signedIn.user.role === 'manager' ? (
          <ManagerStack />
        ) : (
          <DeliveryStack />
        )}
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
