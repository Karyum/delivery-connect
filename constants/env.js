import Constants from 'expo-constants';

export const prodUrl = "http://54.93.182.39:8000";

const ENV = {
  dev: {
    apiUrl: "http://192.168.1.157:8000"
  },
  prod: {
    apiUrl: prodUrl
  }
};

function getEnvVars(env = "") {
  if (__DEV__) return ENV.dev

  return ENV.prod
}

export default getEnvVars(Constants.manifest.releaseChannel);