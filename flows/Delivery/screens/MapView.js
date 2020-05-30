import React from 'react';
import * as Location from 'expo-location';
// import Marker from './MyMarker';
import { View, StyleSheet } from 'react-native';
import Map from '@components/Map/AutoCenterMap';
import Colors from '@constants/Colors'
import Layout from '@constants/Layout';

export default function DeliveryMapView() {
  const [userLocation, setUserLocation] = React.useState({});

  React.useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();

      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
      }
      console.log(status)
      let location = await Location.getCurrentPositionAsync({});

      setUserLocation(location.coords);
    })();
  }, []);

  if (!userLocation.latitude) {
    return <Map lat={32.8237073} lng={34.9750746} />;
  }

  // so we got the map that following and watching the user location
  // now we need to do 3 things
  // 1) send to the socket the location for the user
  // 2) show a popup that it's searching for deliveries
  // 3) show some sort of animation that it is searching
  return (
    <View>
      <Map lat={userLocation.latitude} lng={userLocation.longitude} />
      {/* <View style={styles.box}></View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  mainMapContainer: {
    ...Layout.window
  },
  box: {
    backgroundColor: Colors.spaceBlackBackground,
    opacity: 0.3,
    position: 'absolute'
  }
})