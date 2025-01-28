import React, { useState } from 'react';
import { View, Text, TextInput, Picker, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const ExpenseScreen = ({ navigation }) => {
  const [expense, setExpense] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [expenses, setExpenses] = useState([]);
  const [totalExpenses, setTotalExpenses] = useState(0);

  const categories = [
    'Food',
    'Transport',
    'Utilities',
    'Entertainment',
    'Health',
    'Others',
  ];

  const addExpense = () => {
    if (expense && category) {
      const newExpense = {
        id: Math.random().toString(),
        expense: parseFloat(expense),
        category,
        description,
      };
      setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
      setTotalExpenses((prevTotal) => prevTotal + parseFloat(expense));
      setExpense('');
      setCategory('');
      setDescription('');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter expense amount"
        keyboardType="numeric"
        value={expense}
        onChangeText={setExpense}
      />
      <Picker
        selectedValue={category}
        style={styles.picker}
        onValueChange={(itemValue) => setCategory(itemValue)}
      >
        <Picker.Item label="Select Category" value="" />
        {categories.map((cat) => (
          <Picker.Item key={cat} label={cat} value={cat} />
        ))}
      </Picker>
      <TextInput
        style={styles.input}
        placeholder="Enter description"
        value={description}
        onChangeText={setDescription}
      />
      <TouchableOpacity style={styles.button} onPress={addExpense}>
        <Text style={styles.buttonText}>Add Expense</Text>
      </TouchableOpacity>

      <View style={styles.expenseList}>
        {expenses.map((item) => (
          <View key={item.id} style={styles.expenseItem}>
            <Text style={styles.expenseText}>{`${item.category}: $${item.expense.toFixed(2)} - ${item.description}`}</Text>
          </View>
        ))}
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Budget', { totalExpenses })}
      >
        <Text style={styles.buttonText}>Go to Budget Screen</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  input: {
    height: 50,
    borderColor: '#6200EE',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 15,
    paddingLeft: 15,
    backgroundColor: '#FFFFFF',
  },
  picker: {
    height: 50,
    borderColor: '#6200EE',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 15,
    backgroundColor: '#FFFFFF',
  },
  button: {
    backgroundColor: '#6200EE',
    paddingVertical: 15,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  expenseList: {
    marginVertical: 20,
  },
  expenseItem: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 3,
  },
  expenseText: {
    fontSize: 16,
    color: '#333',
  },
});

export default ExpenseScreen;
