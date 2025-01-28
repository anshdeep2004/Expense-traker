import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

const ExpenseList = ({ onTotalExpensesChange }) => {
  const [expense, setExpense] = useState('');
  const [category, setCategory] = useState('');
  const [expenses, setExpenses] = useState([]);

  const addExpense = () => {
    if (expense && category) {
      const newExpense = { key: Math.random().toString(), expense: parseFloat(expense), category };
      setExpenses([...expenses, newExpense]);
      setExpense('');
      setCategory('');
    }
  };

  const calculateTotalExpenses = () => {
    const total = expenses.reduce((total, item) => total + item.expense, 0);
    if (onTotalExpensesChange) {
      onTotalExpensesChange(total);
    } else {
      console.error('onTotalExpensesChange function is not passed.');
    }
    return total;
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter expense amount"
        keyboardType="numeric"
        value={expense}
        onChangeText={setExpense}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter category"
        value={category}
        onChangeText={setCategory}
      />
      <Button title="Add Expense" onPress={addExpense} />

      <FlatList
        data={expenses}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.expense} - {item.category}</Text>
          </View>
        )}
      />
      
      <Text style={styles.total}>Total Expenses: {calculateTotalExpenses()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    width: '80%',
    paddingLeft: 10,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    width: '80%',
    marginTop: 5,
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
});

export default ExpenseList;