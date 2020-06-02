import React from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';

import DeliveryMarkers from '../components/DeliveryMarkers';
import Map from '../../../components/Map/ManagerMap';
import { Api } from '@utils';

export default function ManagerMapView() {

  return (
    <Map>
        <DeliveryMarkers />
    </Map>
  );
}

const styles = StyleSheet.create({});
