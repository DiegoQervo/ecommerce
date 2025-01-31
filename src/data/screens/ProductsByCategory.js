import { FlatList, Pressable, StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Search from '../../components/Search'
import CardProduct from '../../components/CardProduct'
import { useGetCategoriasQuery } from '../../services/shop'
import { data } from 'react-router-dom'




const ProductsByCategory = ({route}) => {


  const {category} = route.params
  const {data, isSuccess,isError,error,isLoading} = useGetCategoriasQuery(category)
  const [keyword, setKeyword] = useState("")
  const [products, setProducts] = useState([])

  useEffect(()=>{
    if(isSuccess){
      setProducts(Object.values(data))
    }
  },[isSuccess,data])

  useEffect(() => {
    if(!isError){
      console.log(error)}},[isError,error])

  useEffect(() => {
    if(isSuccess){
      setProducts(Object.values(data).filter(product => product.title.includes(keyword)))
    }
  },[keyword,isSuccess])

  if(isLoading) return <View><Text>Cargando...</Text></View>
  if(isError) return <View><Text>{error.message}</Text></View>


  return (
    <View style = {styles.container}>
      <Search onChangeKeyword = {(t) => setKeyword(t)}/>
      <FlatList
      data = {products}
      keyExtractor = {item => item.id}
      renderItem = {({item})=>(<CardProduct product = {item}/>)}
      />
    </View>
  )
}

export default ProductsByCategory

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  containerProducts:{
    flexDirection:"row",
    flexWrap:"wrap",
    justifyContent:"space-around"
  }

})