import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import OwnerLanding from '../../screens/OwnerLanding';

import Colors from '../../constants/Colors'

const Stack = createStackNavigator();

import OwnerLinkConf from './OwnerLinkConf'

export default function DeliveryStack() {
    return (
        <NavigationContainer linking={OwnerLinkConf}>
        <Stack.Navigator>
          <Stack.Screen
            name="StartSession"
            options={{
              headerStyle: {
                backgroundColor: Colors.mainOwnerColor,
                height: 80
              },
              headerTitleStyle: {
                color: 'white',
                alignSelf: 'center'
              },
              title: 'Delivery connect'
            }}
            component={OwnerLanding}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
}