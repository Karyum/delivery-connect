import * as React from 'react';
import { Alert, TextInput, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

import Colors from '../constants/Colors';

export default function Signin() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const onLogin = () => {
    Alert.alert('Credentials', `${username} + ${password}`);
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={username}
        onChangeText={setUsername}
        placeholder="Username"
        style={styles.input}
        placeholderTextColor={Colors.spaceBlackBackground}
      />
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry={true}
        style={styles.input}
        placeholderTextColor={Colors.spaceBlackBackground}
      />

      <Button
        title="Login"
        buttonStyle={styles.submit}
        titleProps={{
          style: styles.buttonText,
        }}
        onPress={onLogin}
      />
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
    fontSize: 18
  },
  submit: {
    paddingHorizontal: 50,
    paddingVertical: 20,
    backgroundColor: Colors.curiousOrange,
    marginTop: 20,
    borderRadius: 5,
  },
  buttonText: { fontWeight: 'bold', color: 'white', fontFamily: 'space-mono', fontSize: 20 },
});
