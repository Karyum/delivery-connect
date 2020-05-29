import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingView from '../../flows/Delivery/screens/LandingView';
import MapView from '../../flows/Delivery/screens/MapView';
import { TransitionPresets } from '@react-navigation/stack';

import Colors from '../../constants/Colors';

const Stack = createStackNavigator();

import DeliveryLinkConf from './DeliveryLinkConf';

export default function DeliveryStack() {
  const commonScreenOptions = {
    headerStyle: {
      backgroundColor: Colors.mainDeliveryColor,
      height: 80,
    },
    headerTitleStyle: {
      color: 'white',
      alignSelf: 'center',
    },
    title: 'Delivery connect',
    ...TransitionPresets.SlideFromRightIOS,
    headerLeft: null,
  };

  return (
    <NavigationContainer linking={DeliveryLinkConf}>
      <Stack.Navigator>
        <Stack.Screen
          name="StartSession"
          options={{
            ...commonScreenOptions,
          }}
          component={LandingView}
        />
        <Stack.Screen
          name="DeliveryMapView"
          options={{
            ...commonScreenOptions,
            headerShown: false,
          }}
          component={MapView}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
