import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CurrencyScreen from './screens/CurrencyScreen'; // Import your screens
import ExpenseScreen from './screens/ExpenseScreen';
import BudgetScreen from './screens/BudgetScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Tab.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#75F9FD',  
            },
            headerTintColor: 'black', 
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        >
          <Tab.Screen
            name="Currency Converter"
            component={CurrencyScreen}
            options={{
              tabBarLabel: 'Currency',
              tabBarIcon: () => <Ionicons name="wallet" size={24} color="black" />,
            }}
          />
          <Tab.Screen
            name="Expenses"
            component={ExpenseScreen}
            options={{
              tabBarLabel: 'Expenses',
              tabBarIcon: () => <Ionicons name="document-text" size={24} color="black" />,
            }}
          />
          <Tab.Screen
            name="Budget"
            component={BudgetScreen}
            options={{
              tabBarLabel: 'Budget',
              tabBarIcon: () => <Ionicons name="pie-chart" size={24} color="black" />,
            }}
          />
        </Tab.Navigator>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});