//codigo componente viejo
import { View, Text, TextInput,Pressable,Alert } from 'react-native'
import React, {useState} from 'react'

export default function App() {
  const[name, setName]= useState('')
  
  //function mostrar(){
    //Alert.alert('El texto es', name)
  //}
  const datos = {name:name}
  function enviarDatos(){
    fetch('http://10.81.111.60/api/users',{
      method: "POST",
    headers: {
      'Content-Type': 'application/json' // tipo de contenido que se va a enviar
    },
    body: JSON.stringify(datos)  //convertir datos a formato JSON , el nombre del campo debe coincidir con el que espera el backend
  })
    .then(response => response.json())
    .then(data => {
      setName("")
    })
    .catch(error => console.error(error))
  }
  return (
    <View>
      <Text></Text>
      <TextInput 
      placeholder='Ingresa tu nombre'
      maxLength={25}
      value={name}
      onChangeText={setName}
      >        
      </TextInput>
      <Pressable onPress={enviarDatos}
      >
        <Text>Guardar</Text>
      </Pressable>
    </View>
  )
}