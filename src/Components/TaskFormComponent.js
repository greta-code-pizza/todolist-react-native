import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function TaskFormComponent({
  currentTask, handleCurrentTask, handleAddCurrentTask
}) {
  return (
    <View style={taskFormStyles.header}>
      <Text 
        style={taskFormStyles.title}
      >
        MyTodoList
      </Text>
      <TextInput
        onChangeText={handleCurrentTask}
        value={currentTask}
        style={taskFormStyles.input}
      />
      <Button
        onPress={() => handleAddCurrentTask()}
        title="Ajouter une tâche"
      />
    </View>
  );
}

const taskFormStyles = StyleSheet.create({
  header: {
    flex:1,
    paddingTop: 10
  },
  title: {
    fontSize:20,
    padding: 5,
    paddingBottom: 20
  },
  input: {
    borderWidth: 1,
    backgroundColor: "#FFF",
    marginBottom: 10
  }
});