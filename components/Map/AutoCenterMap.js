import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import Colors from '../../constants/Colors';
import Layout from '../../constants/Layout';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import mapStyle from './mapStyle';
import { useDelta } from './mapUtils';
import * as Location from 'expo-location';

export default function AutoCenterMap({ children, lat, lng }) {
  const [lngDelta, latDelta] = useDelta();
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

  return (
    <View style={styles.container} pointerEvents="none">
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.mapStyle}
        maxZoomLevel={22}
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
          key={1}
          image={require('../../assets/icons/delivery.png')}
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.spaceBlackBackground,
  },
  mapStyle: {
    ...Layout.window,
  },
});
