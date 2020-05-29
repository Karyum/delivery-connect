import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import mapStyle from './mapStyle'
import {useDelta} from './mapUtils'


export default function AutoCenterMap({ children, lat, lng }) {
 const [lngDelta, latDelta] = useDelta()

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.mapStyle}
        maxZoomLevel={22}
        minZoomLevel={15}
        customMapStyle={mapStyle}
        region={{
          //   latitude: 32.8237073,
          //   longitude: 34.9750746,
          latitude: lat,
          longitude: lng,
          longitudeDelta: lngDelta,
          latitudeDelta: latDelta,
        }}
      >
        {children}
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
