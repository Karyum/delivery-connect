import React from 'react';
import * as Location from 'expo-location';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import Map from '@components/Map/AutoCenterMap';
import Colors from '@constants/Colors';
import Layout from '@constants/Layout';
import Pulse from '@components/Map/Pulse';

export default function DeliveryMapView() {
  const [userLocation, setUserLocation] = React.useState({});

  // refreshes the entire app
  // global.__r.Refresh.performFullRefresh()
  
  
  React.useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();

      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
      }
      console.log(status);
      let location = await Location.getCurrentPositionAsync({});

      setUserLocation(location.coords);
    })();
  }, []);

  if (!userLocation.latitude) {
    return <Map lat={32.8237073} lng={34.9750746} />;
  }

  return (
    <View style={styles.mainMapContainer} pointerEvents="none">
      <Map lat={userLocation.latitude} lng={userLocation.longitude} />
      <View style={styles.box}>
        <Text style={styles.searchingText}>Searching...</Text>
      </View>
      <Pulse
        color='white'
        numPulses={4}
        diameter={500}
        speed={20}
        duration={2000}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  mainMapContainer: {
    ...Layout.window,
  },
  box: {
    backgroundColor: Colors.spaceBlackBackground,
    opacity: 0.75,
    position: 'absolute',
    bottom: 40,
    width: Dimensions.get('window').width * 0.8,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 5,
  },
  searchingText: {
    padding: 30,
    color: 'white',
  },
});
