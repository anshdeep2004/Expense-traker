import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import CurrencyConverter from '../components/CurrencyConverter';

export default function CurrencyScreen() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/currency.png')} style={styles.image} />
      <CurrencyConverter />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});
