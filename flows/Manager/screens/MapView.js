import React from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';

import DeliveryMarkers from '../components/DeliveryMarkers';
import Map from '../../../components/Map/ManagerMap';
import { Api } from '@utils';

export default function ManagerMapView() {
  const [deliveries, setDeliveries] = React.useState([]);

  React.useEffect(() => {
    // fetch the amount of delivery people online right now
    (async () => {
      try {
        const { data } = await Api.post('/auth/coords', {});

        setDeliveries(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  if (!deliveries.length) {
    return <Text>Loading....</Text>;
  }

  return (
    <Map>
      {deliveries.map((coords, i) => (
        <DeliveryMarkers key={i} coords={coords} />
      ))}
    </Map>
  );
}

const styles = StyleSheet.create({});
