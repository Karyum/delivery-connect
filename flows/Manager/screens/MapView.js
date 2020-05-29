import React from 'react';
import { StyleSheet, Image, View } from 'react-native';

import DeliveryMarkers from '../components/DeliveryMarkers';
import Map from '../../../components/Map/ManagerMap';

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
