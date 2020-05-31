import React from 'react';
import { StyleSheet, Image, View, Dimensions } from 'react-native';
import Colors from '@constants/Colors';
import Layout from '@constants/Layout';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import mapStyle from './mapStyle';
import { useDelta } from './mapUtils';
import * as Location from 'expo-location';
import ENV from '@constants/env';

const io = require('socket.io-client');

export default function AutoCenterMap({ children, lat, lng }) {
  const [lngDelta, latDelta] = useDelta();
  const [userLocation, setUserLocation] = React.useState({
    latitude: lat,
    longitude: lng,
  });

  React.useEffect(() => {
    const socket = io(ENV.apiUrl, {
      // transports: ['websocket'],
      query: {
        type: 'delivery',
        id: 1,
      },
      forceNode: true,
    });

    socket.on('connect', () => {});

    const positionWatch = Location.watchPositionAsync(
      { distanceInterval: 1, timeInterval: 2, accuracy: 6 },
      ({ coords }) => {
        console.log('changed', coords)
        socket.emit('locationChange', { data: coords });

        setUserLocation(coords);
      }
    );

    // socket.on('ping', (data) => console.log('delivery', data))

    return () => {
      socket.close();
      positionWatch.then(({ remove }) => remove());
    };
  }, []);

  return (
    <MapView
      provider={PROVIDER_GOOGLE}
      style={styles.mapStyle}
      maxZoomLevel={23}
      minZoomLevel={18}
      customMapStyle={mapStyle}
      region={{
        latitude: userLocation.latitude,
        longitude: userLocation.longitude,
        longitudeDelta: lngDelta,
        latitudeDelta: latDelta,
      }}
    >
      <Marker
        coordinate={{
          latitude: userLocation.latitude,
          longitude: userLocation.longitude,
        }}
        style={{
        }}
        key={1}
        image={require('../../assets/icons/delivery.png')}
      />
    </MapView>
  );
}

const styles = StyleSheet.create({
  mapStyle: {
    ...Layout.window,
  },
  pulse: {
    // borderRadius: Dimensions.get('window').width / 2
  },
});
