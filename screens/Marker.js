import React from 'react';
import { Marker } from 'react-native-maps';
import ENV from '../constants/env';

const io = require('socket.io-client');

export default function ManagerMapView() {
  const [connected, setConnected] = React.useState(false);
  const [locationState, setLocationState] = React.useState({
    current: {
        toggle: false,
        latitude: 32.8237073,
        longitude: 34.9750746,
      },
      past: {
        longitude: 34.981582,
        latitude: 32.821673,
      },
  });
  const [currentLocation, setCurrentLocation] = React.useState({
    latitude: 32.8237073,
    longitude: 34.9750746,
  })

  // move marker from position current to moveto in t seconds
  function animatedMove(t, current, moveto) {
      var lng = locationState.past.longitude;
      var lat = locationState.past.latitude;

    var deltalat = (locationState.current.latitude - locationState.past.latitude) / 100;
    var deltalng = (locationState.current.longitude - locationState.past.longitude) / 100;

    var delay = 10 * t;
    for (var i = 0; i < 100; i++) {
      (function (ind) {
        setTimeout(function () {
          lat += deltalat;
          lng += deltalng;
          
          setCurrentLocation({
              latitude: lat,
              longitude: lng
          })
        }, delay * ind);
      })(i);
    }
  }

  React.useEffect(() => {

    animatedMove(0.5)
  }, [locationState])

  React.useEffect(() => {
    const socket = io(ENV.apiUrl, {
      // transports: ['websocket'],
      forceNode: true,
    });


    socket.on('connect', () => {
      setConnected(true);
      console.log(1)
    });

    socket.on('ping', () => {

      setLocationState((prevState) => {
        if (!prevState.current.toggle) {
          return {
            current: {
              toggle: true,
              longitude: 34.981582,
              latitude: 32.821673,
            },
            past: {
              latitude: 32.8237073,
              longitude: 34.9750746,
            },
          };
        }

        return {
          current: {
            toggle: false,
            latitude: 32.8237073,
            longitude: 34.9750746,
          },
          past: {
            longitude: 34.981582,
            latitude: 32.821673,
          },
        };
      });
    });

    return () => socket.close()
  }, []);

  return (
    <Marker
      coordinate={{
        latitude: currentLocation.latitude,
        longitude: currentLocation.longitude,
      }}
      key={1}
      image={require('../assets/icons/delivery.png')}
    />
  );
}
