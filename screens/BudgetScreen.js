import React, { useState } from 'react';
import { View, Text,Image, TextInput, Button, StyleSheet } from 'react-native';

export default function BudgetScreen({ route }) {
  const { totalExpenses } = route.params || {};

  const [budget, setBudget] = useState(0);
  
  if (totalExpenses === undefined) {
    return <Text>Error: Total expenses not passed!</Text>;
  }
  const remainingBudget = budget - totalExpenses;

  return (
    <View style={styles.container}>
    <Image source={require('../assets/images/budget.webp')} style={styles.image} />
      <TextInput
        style={styles.input}
        placeholder="Enter your budget"
        keyboardType="numeric"
        value={budget.toString()}
        onChangeText={setBudget}
      />
      <Button
        title="Set Budget"
        onPress={() => {
          if (!isNaN(budget) && budget > 0) {
            setBudget(parseFloat(budget));
          } else {
            alert("Please enter a valid budget.");
          }
        }}
      />

      <Text style={styles.budgetText}>Your Budget: ${budget}</Text>
      <Text style={styles.budgetText}>Total Expenses: ${totalExpenses}</Text>
      <Text style={styles.budgetText}>Remaining Budget: ${remainingBudget}</Text>
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
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    width: '80%',
    paddingLeft: 10,
    textAlign: 'center',
  },
  budgetText: {
    fontSize: 18,
    marginVertical: 10,
  },
});