import axios from 'axios';
import saveToStorage from './saveToAsyncStorage';
import { deviceDataStorageKey } from '../constants/storageKeys';
import ENV from '../constants/env';
import { AsyncStorage } from "react-native";

// This variable decides whether the error should console log
const DEBUG = process.env.NODE_ENV === 'development';

// later on we will populate this object with the auth token and the user data
var deviceData = null;

// start the axios instance so we can later configure it
const apiInstance = axios.create({
  baseURL: ENV.apiUrl,
});

export const configureAuthentication = async (axiosInstance) => {

    // fetch the device data from AsyncStorage
    try {
        deviceData = await AsyncStorage.getItem(deviceDataStorageKey);
    } catch (error) {
        if (DEBUG) console.log('Fetching user data error: ', error);
    }
    
    // if device data exists then parse it, and then authenticate the axios instance
    if (deviceData) {
        const parsedDeviceData = JSON.parse(deviceData);
        
        authenticateRequest(axiosInstance, parsedDeviceData);
    }
}

// adds the token and deviceId for the data object
// so it can be authenticated
export const authenticateRequest = (axiosInstance, { token, user }) => {
  axiosInstance.interceptors.request.use(
    (config) => {
      config.data.token = token;
      config.deviceId = user.deviceId;

      return config;
    },
    (error) => {
      if (DEBUG) console.log('authenticateRequest Error: ', error);

      return Promise.reject(error);
    }
  );
};

// this will run only when the response data has userAuthentication to true
// token, user and status is success
export const interceptAuthenticationFlow = (axiosInstance) => {
  axiosInstance.interceptors.response.use(
    async (response) => {
      
      const { token, user, status, userAuthentication } = response.data;
      
      if (response.config.url === '/auth/authenticate') {
        // save the following data in the AsyncStorage as deviceData
        if (userAuthentication && user && token && status === 'success') {

          try {
                await saveToStorage(deviceDataStorageKey, { token, user });
            }catch (error) {
                return Promise.reject(new Error('Something went wrong'));
            }

        } else {
            return Promise.reject(new Error('Not authorized'));
        }

      }

      return response;
    },
    (error) => {
      console.log(error)
        if (error.response.status === 401) {
            return Promise.reject(new Error('Not authorized'));
        }

        error.response.status
        if (DEBUG) console.log('interceptAuthenticationFlow Error: ', error);

      return Promise.reject(new Error('Something went wrong'));
    }
  );
};


interceptAuthenticationFlow(apiInstance)

configureAuthentication(apiInstance)

export default apiInstance