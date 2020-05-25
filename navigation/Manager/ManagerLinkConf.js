import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/manager')],
  config: {
    StartOrder: {
      path: 'start-order',
      screens: {
        ManagerLanding: 'ManagerLanding',
      },
    },
    ManagerMapView: {
      path: 'manager-map',
      screens: {
        ManagerMapView: 'ManagerMapView',
      },
    },
  },
};
