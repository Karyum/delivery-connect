import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';
import DeliveryMarkers from './DeliveryMarkers';
import Map from './Map';

export default function ManagerMapView() {

  React.useEffect(() => {
    // fetch the amount of delivery people online right now 

  }, [])

  return (
    <Map>
      <DeliveryMarkers />
    </Map>
  );
}

const styles = StyleSheet.create({});
