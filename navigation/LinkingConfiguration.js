import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    Root: {
      path: 'root',
      screens: {
        Landing: 'Landing',
      },
    },
    App: {
      path: 'app',
      screens: {
        Home: 'home',
        Links: 'links',
      }
    }
  },
};
