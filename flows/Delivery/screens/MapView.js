import React from 'react';
import Colors from '../constants/Colors';
import * as Location from 'expo-location';
import Marker from './MyMarker';
import Map from './Map';

export default function DeliveryMapView() {
  const [userLocation, setUserLocation] = React.useState({});

  React.useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();

      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
      }

      let location = await Location.getCurrentPositionAsync({});

      setUserLocation(location.coords);
    })();
  }, []);

  if (!userLocation.latitude) {
    return <Map lat={32.8237073} lng={34.9750746} />;
  }

  return (
    <Map lat={userLocation.latitude} lng={userLocation.longitude}>
      <Marker lat={userLocation.latitude} lng={userLocation.longitude} />
    </Map>
  );
}
