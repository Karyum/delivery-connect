import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/owner')],
  config: {
    StartOrder: {
      path: 'start-order',
      screens: {
        OwnerLanding: 'OwnerLanding',
      },
    },
  },
};
