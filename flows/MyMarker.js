import React from 'react';
import { Marker } from 'react-native-maps';
import ENV from '../constants/env';
import * as Location from 'expo-location';
import { Text, Alert } from 'react-native';

const io = require('socket.io-client');

export default function MyMarker({ lat, lng }) {
  const [userLocation, setUserLocation] = React.useState({
    latitude: lat,
    longitude: lng,
  });

  React.useEffect(() => {
    const positionWatch = Location.watchPositionAsync(
      { distanceInterval: 1 },
      ({ coords }) => {
        setUserLocation(coords);
      }
    );

    return () => positionWatch.then(({ remove }) => remove());
  }, []);

  console.log('change');
  return (
    <Marker
      coordinate={{
        latitude: userLocation.latitude,
        longitude: userLocation.longitude,
      }}
      key={1}
      image={require('../assets/icons/delivery.png')}
    />
  );
}
