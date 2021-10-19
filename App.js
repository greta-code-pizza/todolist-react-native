import { StatusBar } from 'expo-status-bar';
import React, { AppRegistry } from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import { tasksReducer } from './src/Reducers/tasksReducer';

import TaskFormContainer from './src/Containers/TaskFormContainer';
import TasksContainer from './src/Containers/TasksContainer';

import { data } from "./data";

const store = 
  createStore(combineReducers({
    tasksReducer: tasksReducer
  }));

const AppProvider = () => (
  <Provider store={store}>
    <View style={styles.container}>
      <TaskFormContainer />
      <TasksContainer />
    </View>
     <StatusBar style="auto" />
  </Provider>
)

export default AppProvider;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 30
  }
});
