import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  FlatList, 
  Button 
  } from 'react-native';

import {data} from "./data";

id = 4;

export default function App() {
  const [txt, setTxt] = useState("")
  const [tasks, setTask] = useState(data.tasks)

  const task = ({item}) => {
    return (
      <View style={styles.task}>
        <Text >Publié le {item.created_at}</Text>
        <Text >{item.content}</Text>
      </View>
    )
  }

  const handleSetTask = () => {
    setTask([...tasks, {id: id++, content: txt, created_at: "2021-10-12T19:57:30"}])
    setTxt("")
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text 
          style={styles.title}
        >
          MyTodoList
        </Text>
        <TextInput
          onChangeText={setTxt}
          value={txt}
          style={styles.input}
        />
        <Button
          onPress={() => handleSetTask()}
          title="Ajouter une tâche"
        />
      </View>

      <View style={styles.list}>
        <FlatList
          data={tasks}
          renderItem={task}
          keyExtractor={task => task.id}
        />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 30
  },
  header: {
    flex:1,
    paddingTop: 10
  },
  list: {
    flex: 3
  },
  task: {
    padding: 10,
    fontSize: 18
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
