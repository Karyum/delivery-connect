import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import {
  Platform,
  StatusBar,
  StyleSheet,
  View,
  SafeAreaView,
} from 'react-native';

import useCachedResources from './hooks/useCachedResources';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import LinkingConfiguration from './navigation/LinkingConfiguration';
import OwnerLanding from './screens/OwnerLanding';
import DeliveryLanding from './screens/DeliveryLanding';

const Stack = createStackNavigator();

export default function App(props) {
  const [isLoadingComplete, userData] = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' ? (
          <StatusBar barStyle="dark-content" />
        ) : (
          <StatusBar barStyle="default" />
        )}
        <NavigationContainer linking={LinkingConfiguration}>
          <Stack.Navigator>
            <Stack.Screen
              name="Root"
              options={{
                headerStyle: {
                  backgroundColor: userData.type === 'owner' ? '#612CAD' : '#3772FF',
                  height: 80
                },
                headerTitleStyle: {
                  color: 'white',
                  alignSelf: 'center'
                },
                title: 'Delivery connect'
              }}
              component={userData.type === 'owner' ? OwnerLanding : DeliveryLanding}
            />
            <Stack.Screen name="App" component={BottomTabNavigator} />
          </Stack.Navigator>
        </NavigationContainer>
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
