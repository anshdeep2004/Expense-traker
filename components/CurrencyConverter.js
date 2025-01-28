import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const CurrencyConverter = () => {
  const [amount, setAmount] = useState('');
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [selectedCurrency, setSelectedCurrency] = useState('USD');

  const conversionRates = {
    USD: 0.012,
    EUR: 0.011,
    GBP: 0.0096,
    JPY: 1.63,
  };

  const convertCurrency = () => {
    if (amount && !isNaN(amount)) {
      const rate = conversionRates[selectedCurrency];
      setConvertedAmount(amount * rate);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.card}>
        <TextInput
          style={styles.input}
          placeholder="Enter amount in INR"
          keyboardType="numeric"
          value={amount}
          onChangeText={setAmount}
        />
        <Picker
          selectedValue={selectedCurrency}
          style={styles.picker}
          onValueChange={(itemValue) => setSelectedCurrency(itemValue)}
        >
          <Picker.Item label="Convert to USD" value="USD" />
          <Picker.Item label="Convert to EUR" value="EUR" />
          <Picker.Item label="Convert to GBP" value="GBP" />
          <Picker.Item label="Convert to JPY" value="JPY" />
        </Picker>
        <View style={styles.buttonContainer}>
          <Button title="Convert" onPress={convertCurrency} color="#6200EE" />
        </View>
        {convertedAmount !== null && (
          <Text style={styles.result}>
            {amount} INR = {convertedAmount.toFixed(2)} {selectedCurrency}
          </Text>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  card: {
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    padding: 20,
    width: '90%',
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 20,
    paddingLeft: 15,
    backgroundColor: 'white',
    fontSize: 16,
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 20,
    backgroundColor: 'white',
    borderRadius: 8,
  },
  buttonContainer: {
    marginVertical: 10,
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#6200EE',
    textAlign: 'center',
  },
});

export default CurrencyConverter;
