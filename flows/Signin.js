import * as React from 'react';
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  Platform,
  StatusBar,
} from 'react-native';
import { Button } from 'react-native-elements';
import { Api } from '../utils';

import Colors from '../constants/Colors';

export default function Signin({ setUserData }) {
  const [phone, setphone] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');

  const onLogin = async () => {
    try {
      // the axios intercepter will handle saving the data into
      // AsyncStorage
      const { data } = await Api.post('/auth/authenticate', {
        phone,
        password,
      });

      setUserData({ status: true, user: data.user });

      // setError('');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <View style={styles.container}>
      {Platform.OS === 'ios' ? (
        <StatusBar barStyle="dark-content" />
      ) : (
        <StatusBar barStyle="light-content" />
      )}

      <TextInput
        value={phone}
        onChangeText={setphone}
        placeholder="phone"
        style={styles.input}
        placeholderTextColor={Colors.spaceBlackBackground}
        keyboardType="phone-pad"
      />
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry={true}
        style={styles.input}
        placeholderTextColor={Colors.spaceBlackBackground}
        keyboardType="phone-pad"
      />

      <Button
        title="Login"
        buttonStyle={styles.submit}
        titleProps={{
          style: styles.buttonText,
        }}
        onPress={onLogin}
      />
      <Text style={styles.error}>{error}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.spaceBlackBackground,
  },
  input: {
    width: 320,
    height: 54,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 20,
    borderRadius: 5,
    backgroundColor: Colors.input,
    color: Colors.spaceBlackBackground,
    fontSize: 18,
  },
  submit: {
    paddingHorizontal: 50,
    paddingVertical: 20,
    backgroundColor: Colors.curiousOrange,
    marginTop: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'white',
    fontFamily: 'space-mono',
    fontSize: 20,
  },
  error: {
    color: '#F15025',
    fontSize: 18,
  },
});
