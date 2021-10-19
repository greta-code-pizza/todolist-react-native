import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

export default function TasksComponent({tasks}) {
  return (
      <View style={tasksStyles.list}>
        <FlatList
          data={tasks}
          renderItem={(item) => item}
          keyExtractor={task => task.id}
        />
      </View>
  );
}

const tasksStyles = StyleSheet.create({
  list: { flex: 3 }
});
