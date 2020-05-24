import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DeliveryLanding from '../../screens/DeliveryLanding';

import Colors from '../../constants/Colors'

const Stack = createStackNavigator();

import DeliveryLinkConf from './DeliveryLinkConf'

export default function DeliveryStack() {
    return (
        <NavigationContainer linking={DeliveryLinkConf}>
        <Stack.Navigator>
          <Stack.Screen
            name="StartSession"
            options={{
              headerStyle: {
                backgroundColor: Colors.mainDeliveryColor,
                height: 80
              },
              headerTitleStyle: {
                color: 'white',
                alignSelf: 'center'
              },
              title: 'Delivery connect'
            }}
            component={DeliveryLanding}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
}