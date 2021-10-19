import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function TaskComponent({task}) {
  return (
      <View style={taskStyles.task}>
        <Text >Publié le {task.created_at}</Text>
        <Text >{task.content}</Text>
      </View>
    )
};


const taskStyles = StyleSheet.create({
  task: {
    padding: 10,
    fontSize: 18
  }
});

