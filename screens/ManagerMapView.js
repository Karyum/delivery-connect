import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';
import Marker from './Marker'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

export default function ManagerMapView() {
  const deg2rad = (angle) => {
    return angle * 0.017453292519943295; // (angle / 180) * Math.PI;
  };

  const rad2deg = (angle) => {
    return angle * 57.29577951308232; // angle / Math.PI * 180
  };
  var radiusInRad = 1 / 6371;
  var longitudeDelta = rad2deg(radiusInRad / Math.cos(deg2rad(32.8237073)));
  var latitudeDelta = 1 * rad2deg(radiusInRad);

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.mapStyle}
        maxZoomLevel={18}
        minZoomLevel={15}
        customMapStyle={[
          {
            featureType: 'all',
            elementType: 'geometry',
            stylers: [
              {
                color: '#202c3e',
              },
            ],
          },
          {
            featureType: 'all',
            elementType: 'labels.text.fill',
            stylers: [
              {
                gamma: 0.01,
              },
              {
                lightness: 20,
              },
              {
                weight: '1.39',
              },
              {
                color: '#ffffff',
              },
            ],
          },
          {
            featureType: 'all',
            elementType: 'labels.text.stroke',
            stylers: [
              {
                weight: '0.96',
              },
              {
                saturation: '9',
              },
              {
                visibility: 'on',
              },
              {
                color: '#000000',
              },
            ],
          },
          {
            featureType: 'all',
            elementType: 'labels.icon',
            stylers: [
              {
                visibility: 'off',
              },
            ],
          },
          {
            featureType: 'landscape',
            elementType: 'geometry',
            stylers: [
              {
                lightness: 30,
              },
              {
                saturation: '9',
              },
              {
                color: '#29446b',
              },
            ],
          },
          {
            featureType: 'poi',
            elementType: 'geometry',
            stylers: [
              {
                saturation: 20,
              },
            ],
          },
          {
            featureType: 'poi.park',
            elementType: 'geometry',
            stylers: [
              {
                lightness: 20,
              },
              {
                saturation: -20,
              },
            ],
          },
          {
            featureType: 'road',
            elementType: 'geometry',
            stylers: [
              {
                lightness: 10,
              },
              {
                saturation: -30,
              },
            ],
          },
          {
            featureType: 'road',
            elementType: 'geometry.fill',
            stylers: [
              {
                color: '#193a55',
              },
            ],
          },
          {
            featureType: 'road',
            elementType: 'geometry.stroke',
            stylers: [
              {
                saturation: 25,
              },
              {
                lightness: 25,
              },
              {
                weight: '0.01',
              },
            ],
          },
          {
            featureType: 'water',
            elementType: 'all',
            stylers: [
              {
                lightness: -20,
              },
            ],
          },
        ]}
        region={{
          latitude: 32.8237073,
          longitude: 34.9750746,
          longitudeDelta,
          latitudeDelta,
        }}
      >
        <Marker />
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
  title: {
    color: Colors.lightText,
    fontSize: 25,
    marginBottom: 100,
    fontFamily: 'space-mono',
  },
  mapStyle: {
    ...Layout.window,
  },
});
