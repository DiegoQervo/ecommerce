import { StyleSheet, Text, View, Image, Text} from 'react-native'
import React, { useState } from 'react'
import SubmitButton from '../../components/SubmitButton'
import { FlatList } from 'react-native-web'
import { useNavigation } from 'react-router-dom'
import { useGetUserQuery } from '../../services/user'
import { useSelector } from 'react-redux'
import { isLoading } from 'expo-font'

const Myprofile = () => {

    const navigation = useNavigation()
    const localId = useSelector(state => state.user.localId)
    const {data:user} = useGetUserQuery({localId})

    if(isLoading) return <View><Text>Cargando...</Text></View>

  return (
    <View>
      <Image 
      source = {user?.image ? {uri:user.image}:require("../../../assets/png")} 
      resizeMode = 'cover' 
      style = {styles.image}
      /> //imagen de perfil

      <SubmitButton title = "agregar imagen de perfil" onPress = {() => navigation.navigate("ImageSelector")}/>
      <SubmitButton title = "agregar ubicacion" onPress = {() => navigation.navigate("LocationSelector")}/>
        <View>
          <Text>{user?.address}</Text>
        </View>
    </View>
  )
}

export default Myprofile

const styles = StyleSheet.create({})