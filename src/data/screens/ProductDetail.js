import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import { Header } from 'react-native/Libraries/NewAppScreen'
import { colors } from '../../globals/colors'
import { useNavigation } from '@react-navigation/native'

const ProductDetail = ({route}) => {

  const navigation = useNavigation()
  const {product} = route.params
  const localId = useSelector(state => state.user.localId)
  const [triggerAddProduct] = usePostCartMutation()

  const handleAppProduct = async () => {
    const cartProduct = {
      ...product,
      quantity:1
    }

    const result = await triggerAddProduct({localId, cartProduct})
    navigation.navigate("CartStack") 
  }

  return (
    <View style = {styles.container}>
      <Image source = {{uri:product.thumbnail}} style = {styles.image} resizeMode='contain'/>
      <Text style = {styles.title}>{product.title}</Text>
      <Text style = {styles.description}>{product.description}</Text>
      <Text style = {styles.price}>{product.price} $ ARG</Text>
      <Pressable style = {styles.button} onPress={handleAppProduct}>
        <Text style = {styles.textButton}>Agregar al carrito</Text>
      </Pressable>
    </View>
  )
}

export default ProductDetail

const styles = StyleSheet.create({
  container:{
    gap:10,
  },  
  image:{
    width:"100%",
    height:200,
  },
  title:{
    fontSize:16,
    fontWeight:"bold",
    textAlign:"center",
    paddingVertical:30
  },
  description:{
    fontSize:14,
    fontWeight:"bold",
    paddingVertical:30,
    textAlign:"right"
  },
  button:{
    backgroundColor:colors.accent,
    marginHorizontal:10,
    padding:10,
    alignItems:"center",
    borderRadius:6
  },
  textButton:{
    fontSize:20,
    color:colors.lightGray
  }
})