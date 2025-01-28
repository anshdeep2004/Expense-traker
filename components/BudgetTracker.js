import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BudgetTracker = ({ remainingBudget }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.budgetText}>Remaining Budget: ${remainingBudget.toFixed(2)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 20,
  },
  budgetText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default BudgetTracker;