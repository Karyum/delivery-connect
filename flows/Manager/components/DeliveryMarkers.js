import React from 'react';
import { Marker } from 'react-native-maps';
import ENV from '../../../constants/env';

const io = require('socket.io-client');

export default function DeliveryMarkers({ coords }) {
  const [connected, setConnected] = React.useState(false);
  const [locationState, setLocationState] = React.useState({
    current: {
      latitude: coords.latitude,
      longitude: coords.longitude,
    },
    past: {
      longitude: 34.981582,
      latitude: 32.821673,
    },
  });
  const [currentLocation, setCurrentLocation] = React.useState({
    latitude: 32.8237073,
    longitude: 34.9750746,
  });
  // move marker from position current to moveto in t seconds
  function animatedMove(t, current, moveto) {
    var lng = locationState.past.longitude;
    var lat = locationState.past.latitude;

    var deltalat =
      (locationState.current.latitude - locationState.past.latitude) / 100;
    var deltalng =
      (locationState.current.longitude - locationState.past.longitude) / 100;

    var delay = 10 * t;
    for (var i = 0; i < 100; i++) {
      (function (ind) {
        setTimeout(function () {
          lat += deltalat;
          lng += deltalng;

          setCurrentLocation({
            latitude: lat,
            longitude: lng,
          });
        }, delay * ind);
      })(i);
    }
  }

  React.useEffect(() => {
    animatedMove(0.5);
  }, [locationState]);

  React.useEffect(() => {
    const socket = io(ENV.apiUrl, {
      // transports: ['websocket'],
      forceNode: true,
      query: {
        type: 'manager',
        id: 1,
      },
    });

    socket.on('connect', function (test) {
      // setConnected(true);
      console.log('test', this.on);
    });
    socket.on('mario', (data) => {
      console.log('mario', data);
      // if ()
      setLocationState((prevState) => ({
        current: {
          latitude: data.latitude,
          longitude: data.longitude,
        },
        past: {
          latitude: prevState.current.latitude,
          longitude: prevState.current.longitude,
        },
      }));
    });

    return () => socket.disconnect();
  }, []);

  return (
    <Marker
      coordinate={{
        latitude: currentLocation.latitude,
        longitude: currentLocation.longitude,
      }}
      key={1}
      style={{
        width: 40,
        height: 40,
      }}
      image={require('../../../assets/icons/delivery.png')}
    />
  );
}
