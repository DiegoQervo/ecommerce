import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import { useState } from 'react'
import { colors } from '../../globals/colors'
import { useNavigation } from '@react-navigation/native'
import Counter from '../../components/Counter'
import { useGetProductCartQuery, usePostCartMutation } from '../../services/cart'
import { useSelector } from 'react-redux'


const ProductDetail = ({route}) => {
  
  const [quantity,setQuantity] = useState(1)
  const navigation = useNavigation()
  const {product} = route.params
  const localId = useSelector(state => state.user.localId)
  const [triggerAddProduct] = usePostCartMutation()
  const {data:productCart} = useGetProductCartQuery({localId,productId:product.id})

  const increment = () => {
    const cartQuantity = productCart ? productCart.quantity : 0
    if(quantity >= (product.stock - cartQuantity)) return
    setQuantity(quantity + 1)
  }
  const decrement = () => {
    if(quantity === 1) return
    setQuantity(quantity - 1)
  }

  const handleAddProduct = async () => {
    const cartQuantity = productCart ? productCart.quantity : 0
    if((product.stock - cartQuantity) === 0) return
    const newQuantity = cartQuantity + quantity
    const cartProduct = {
      ...product,
      quantity:newQuantity
      }
    const result = await triggerAddProduct({localId, cartProduct})
    setQuantity(1)
    navigation.navigate("CartStack") 
  }

  return (
    <View style = {styles.container}>
      <Image source = {{uri:product.thumbnail}} style = {styles.image} resizeMode='contain'/>
      <Text style = {styles.title}>{product.title}</Text>
      <Text style = {styles.description}>{product.description}</Text>
      <Text style = {styles.price}>{product.price} $ ARG</Text>
      {
        (product.stock - productCart?.quantity) === 0 ?
        <Text style = {styles.price}>Producto sin stock</Text>
        :
        <Counter quantity = {quantity} increment = {increment} decrement = {decrement}/>
      }
      <Pressable style = {styles.button} onPress={handleAddProduct}>
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
    backgroundColor:"red"
  },
  title:{
    fontSize:16,
    fontWeight:"bold",
    textAlign:"center",
    paddingVertical:20
  },
  description:{
    fontSize:14,
    padding:20,
    textAlign:"center"
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