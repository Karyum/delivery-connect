import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ManagerLanding from '../../screens/ManagerLanding';
import ManagerMapView from '../../screens/ManagerMapView';
import { TransitionPresets } from '@react-navigation/stack';

import Colors from '../../constants/Colors';

const Stack = createStackNavigator();

import ManagerLinkConf from './ManagerLinkConf';

export default function DeliveryStack() {
  const commonScreenOptions = {
    headerStyle: {
      backgroundColor: Colors.mainManagerColor,
      height: 80,
    },
    headerTitleStyle: {
      color: 'white',
      alignSelf: 'center',
    },
    title: 'Delivery connect',
    ...TransitionPresets.SlideFromRightIOS,
    headerLeft: null
  };

  return (
    <NavigationContainer linking={ManagerLinkConf}>
      <Stack.Navigator>
        <Stack.Screen
          name="StartSession"
          options={{
            ...commonScreenOptions,
          }}
          component={ManagerLanding}
        />

        <Stack.Screen
          name="ManagerMapView"
          options={{
            ...commonScreenOptions,
            headerShown: false
          }}
          component={ManagerMapView}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
