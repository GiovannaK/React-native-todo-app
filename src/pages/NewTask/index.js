import React, {useState, useEffect} from 'react'
import {Text, View, TextInput, TouchableOpacity} from 'react-native'
import firebase from '../../config/firebaseconfig';
import {styles} from './styles'

export const NewTask = ({navigation}) => {
  const [description, setDescription] = useState(null);
  const database = firebase.firestore()

  const addTask = () => {
    database.collection("Tasks").add({
      description: description,
      status: false,
    })
    navigation.navigate("Task")
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Ex: Fazer Café..."
        onChangeText={setDescription}
        value={description}
      />
      <TouchableOpacity
        style={styles.buttonNewTask}
        onPress={() => {
          addTask()
        }}
      >
        <Text style={styles.iconButton}>Salvar</Text>
      </TouchableOpacity>
    </View>
  )
}
