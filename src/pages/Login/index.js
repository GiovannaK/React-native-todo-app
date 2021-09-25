import React, {useState, useEffect} from 'react'
import {
  Text, View,
  TextInput, TouchableOpacity,
  KeyboardAvoidingView,
  Platform
} from 'react-native'
import firebase from '../../config/firebaseconfig'
import {styles} from './styles'
import {MaterialCommunityIcons} from '@expo/vector-icons'

export const Login = ({navigation}) => {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [password, setPassword] = useState('')

  const loginFirebase = () => {

  }

  useEffect(() => {

  }, [])

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <Text style={styles.title}>
        Task
      </Text>
      <TextInput style={styles.input}
        placeholder="Digite seu e-mail..."
        type="text"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <TextInput style={styles.input}
        secureTextEntry
        placeholder="Digite sua senha..."
        type="text"
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
      {error ? (
        <View style={styles.contentAlert}>
          <MaterialCommunityIcons
            name="alert-circle"
            size={24}
            color="#bdbdbd"
          />
          <Text style={styles.warning}>E-mail ou senha inválidos</Text>
        </View>
      ) : (
        <View></View>
      )}
      {!email || !password ? (
        <TouchableOpacity
          disabled
          style={styles.buttonLogin}
        >
          <Text style={styles.textButtonLogin}>Login</Text>
        </TouchableOpacity>
      ) : (

        <TouchableOpacity

          style={styles.buttonLogin}
        >
          <Text style={styles.textButtonLogin}>Login</Text>
        </TouchableOpacity>
      )}
      <Text style={styles.registration} onPress={() => navigation.navigate("NewUser")}>
        Ainda não tem uma conta?
      </Text>
    </KeyboardAvoidingView>
  )
}
