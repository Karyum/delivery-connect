import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import * as React from 'react';
import { AsyncStorage } from 'react-native';

import { deviceDataStorageKey } from '../constants/storageKeys';
export default function useCachedResources() {
  const [dataLoad, setDataLoad] = React.useState({
    isLoadingComplete: false,
    userData: {},
  });

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      let userData;

      try {
        SplashScreen.preventAutoHideAsync();

        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          'space-mono': require('../assets/fonts/SpaceMono-Regular.ttf'),
        });

        // AsyncStorage.clear();

        // for authentication
        // https://medium.com/better-programming/how-to-add-authentication-to-your-react-native-app-with-react-hooks-and-react-context-api-46f57aedbbd
        const deviceData = await AsyncStorage.getItem(deviceDataStorageKey);

        const parsedDeviceData = JSON.parse(deviceData || `{"user": "{}"}`);

        userData = parsedDeviceData.user;
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {

        setDataLoad({ isLoadingComplete: true, userData });
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return [dataLoad];
}
