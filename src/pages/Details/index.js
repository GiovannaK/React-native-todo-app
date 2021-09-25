import React, {useState, useEffect} from 'react'
import {Text, View, TextInput, TouchableOpacity} from 'react-native'
import firebase from '../../config/firebaseconfig';
import {styles} from './styles'

export const Details = ({navigation, route}) => {
  const [description, setDescription] = useState(route.params.description);
  const database = firebase.firestore()
  const IdTask = route.params.id

  const editTask = (description, id) => {
    database.collection("Tasks").doc(id).update({
      description: description,
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
          editTask(description, IdTask)
        }}
      >
        <Text style={styles.iconButton}>Salvar</Text>
      </TouchableOpacity>
    </View>
  )
}

