import { AsyncStorage } from "react-native";

export default (storageKey, data) => {
  const stringifiedData = JSON.stringify(data);

  return new Promise(async (resolve, reject) => {
    try {
        await AsyncStorage(storageKey, stringifiedData)

        resolve(true);
    } catch (error) {
        reject(
            new Error(
            'Something went wrong when trying to save the data to AsyncStorage'
            )
        );
    }
  });
};
