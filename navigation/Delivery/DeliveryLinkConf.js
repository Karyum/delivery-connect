import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/delivery')],
  config: {
    StartSession: {
      path: 'start-session',
      screens: {
        DeliveryLanding: 'DeliveryLanding',
      },
    },
    DeliveryMapView: {
      path: 'delivery-map',
      screens: {
        DeliveryMapView: 'DeliveryMapView',
      },
    },
  },
};
