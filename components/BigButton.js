import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '../constants/Colors'

export default function BigButton(props) {
  const styles = StyleSheet.create({
    button: {
      width: 250,
      height: 250,
      backgroundColor: Colors.darkBlueBackground,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 125,
      borderWidth: 8,
      borderColor: props.borderColor,
      shadowColor: 'white',
    },
  });

  return (
      <Button
        buttonStyle={styles.button}
        titleProps={{ style: { fontSize: 30, color: 'white', fontFamily: 'space-mono' } }}
        onPress={props.onPress}
        title="Order"
      />
  );
}

