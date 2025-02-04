import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Search from '../../components/Search'
import CardProduct from '../../components/CardProduct'
import { useGetCategoriesQuery } from '../../services/shop'
import LoadingSpinner from '../../components/LoadingSpinner'
import { useRoute } from '@react-navigation/native'




const ProductsByCategory = ({route}) => {


  const { category } = route.params || {}
  const {data, isSuccess,isError,error,isLoading} = useGetCategoriesQuery(category)
  const [keyword, setKeyword] = useState("")
  const [products, setProducts] = useState([])


  if(!category){
    return <Text>La categoria no esta disponible</Text>
  }


  useEffect(()=>{
    if(isSuccess){
      const filteredProducts = Object.values(data).filter(product => product.title.toLowerCase().includes(keyword.toLowerCase()));
      setProducts(filteredProducts)
    }
  },[isSuccess,data,keyword])

  useEffect(() => {
    if(isError){
      console.log(error)}},[isError,error])

  if(isLoading) return <LoadingSpinner/>
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

})