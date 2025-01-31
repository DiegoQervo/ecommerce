import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { colors } from '../globals/colors';

const Search = ({onChangeKeyword}) => {

    const [TextInput,setTextInput] = useState("")
    const [error, setError] = useState("")

    const search = () => {
      const regex = /[+\-%]/
      if(regex.test(TextInput)){
        return setError("no valido")
      }
      setError("")

      onChangeKeyword(TextInput)
    }

    const removeSearch = () => {
      onChangeKeyword("")
      setTextInput("")
      setError("")
    }

  return (
    <View style = {styles.container}>
      <View style = {styles.containerInput}>
          <TextInput
            style = {styles.input}
            value = {TextInput}
            onChangeText = {(text)=>setTextInput(text)}
            placeholderTextColor = {colors.lightGray}
            placeholder='Buscar'
            />
        <Pressable style = {styles.button} onPress={search}>
          <AntDesign name="search1" size={30} color="black" />
        </Pressable>
        <Pressable style = {styles.button} onPress={removeSearch}>
          <MaterialIcons name="cancel" size={30} color="black" />
        </Pressable>
      </View>
      <Text>{error ? error : ""}</Text>
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
    container:{
      paddingHorizontal:10,
      paddingTop:15
    },
    containerInput:{
      flexDirection:"row",

      alignItems:"center",
      justifyContent:"center"
    },
    input:{
        backgroundColor: colors.accent,
        padding:5,
        paddingLeft:10,
        borderRadius:4,
        color:colors.lightGray,
        flex:1
    },
    button:{
        margin:5
    },
    error:{
      color:"red",
      fontWeight:"bold",
      marginLeft:10
    }

})