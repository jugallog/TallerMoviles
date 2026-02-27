import { View, Text, TextInput, FlatList, Button, StyleSheet, Alert } from 'react-native'
import React, { useState } from 'react'
import { db } from './firebase'
import { ref, push } from "firebase/database"

export default function App() {

  const [name, setName] = useState("")
  const [raza, setRaza] = useState("")
  const [size, setSize] = useState("")
  const [users, setUsers] = useState([])

  function enviar_datos() {

    push(ref(db, "usuarios"), {
      raza: raza,
      name: name,
      size: size
    }).then(function () {
      Alert.alert("Éxito", "Se han guardado los datos")
      setRaza("")
      setName("")
      setSize("")
    })
  }

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>Registro de Mascotas</Text>

      <TextInput
        style={styles.input}
        placeholder='Ingrese el nombre'
        value={name}
        onChangeText={(text) => setName(text)}
      />

      <TextInput
        style={styles.input}
        placeholder='Ingrese la raza'
        value={raza}
        onChangeText={(text) => setRaza(text)}
      />

      <TextInput
        style={styles.input}
        placeholder='Tamaño'
        value={size}
        onChangeText={(text) => setSize(text)}
      />

      <View style={styles.boton}>
        <Button
          onPress={enviar_datos}
          title='Enviar'
        />
      </View>

    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f2f2f2"
  },

  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20
  },

  input: {
    width: "100%",
    height: 45,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: "#fff"
  },

  boton: {
    width: "100%",
    marginTop: 10
  }

})