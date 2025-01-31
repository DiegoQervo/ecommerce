import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { colors } from '../globals/colors'

const InputForm = ({label,value,onChangeText,isSecure,error}) => {
  return (
    <View>
        <Text>{label}</Text>
        <TextInput value={value} onChangeText={onChangeText} style = {styles.input} secureTextEntry = {isSecure}/>
        {error ? <View><Text style = {styles.error}>{error}</Text></View> : null}
    </View>
  )
}

export default InputForm

const styles = StyleSheet.create({})