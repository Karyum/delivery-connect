import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ManagerLanding from '../../screens/ManagerLanding';

import Colors from '../../constants/Colors'

const Stack = createStackNavigator();

import ManagerLinkConf from './ManagerLinkConf'

export default function DeliveryStack() {
    return (
        <NavigationContainer linking={ManagerLinkConf}>
        <Stack.Navigator>
          <Stack.Screen
            name="StartSession"
            options={{
              headerStyle: {
                backgroundColor: Colors.mainManagerColor,
                height: 80
              },
              headerTitleStyle: {
                color: 'white',
                alignSelf: 'center'
              },
              title: 'Delivery connect'
            }}
            component={ManagerLanding}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
}