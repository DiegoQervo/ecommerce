import { StyleSheet, FlatList, View, Text} from 'react-native'
import React from 'react'
import CardItemCategory from './CardItemCategory' 
import { useSelector } from 'react-redux'
import { useGetCategoriasQuery } from '../services/shop'


const Categories = () => {
  const {data:categories, isLoading, isError, error} = useGetCategoriasQuery()

  if(isLoading) return <View><Text>Cargando...</Text></View>
  if(isError) return <View><Text>{error.message}</Text></View>

  return (
    <FlatList
    data = {categories}
    keyExtractor={item => item}
    renderItem={({item}) => <CardItemCategory item = {item}/>}
    contentContainerStyle = {styles.containerCard}
    />
  )
}

export default Categories

const styles = StyleSheet.create({
  containerCard:{
    paddingBottom:50
  }
})