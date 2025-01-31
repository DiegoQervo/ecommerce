import { Pressable, StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { colors } from '../globals/colors'
import { useEffect, useState } from 'react'
import ArrowGoBack from './ArrowGoBack'
import { useNavigation } from '@react-navigation/native'
import AntDesign from '@expo/vector-icons/AntDesign';
import { useDispatch } from 'react-redux'
import { deleteSesion } from '../config/dbSQL'
import deleteUser from '../features/userSlice'

const Header = ({title}) => {

  const navigate = useNavigation()
  const dispatch = useDispatch()

  const onLogout = () => {
    deleteSesion()
    dispatch(deleteUser())
  }

  return (
    <View style = {styles.container}>
      {navigate.canGoBack() ? <ArrowGoBack/> : null}
      <Text style = {styles.title}>{title}</Text>
      <Pressable onPress={onLogout}> style={styles.logout}
        <AntDesign name="logout" size={20} color={colors.lightGray} />
      </Pressable>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.primary,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        position:"relative"
    },
    title:{
        color:colors.lightGray,
        fontSize:16,
    }
})