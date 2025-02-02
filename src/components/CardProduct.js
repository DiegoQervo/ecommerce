import { Pressable, StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import React from 'react'
import { colors } from '../globals/colors'
import { useNavigation } from '@react-navigation/native'


const CardProduct = ({product}) => {

    const {title,price,stock,thumbnail} = product
    const {height,width} = useWindowDimensions() //import??
    const navigation = useNavigation()

  return (
    <Pressable style={styles.container} onPress={()=> navigation.navigate("ProductDetail",{product})}>
      <Image style={styles.image} source = {{uri:thumbnail}} resizeMode = 'cover'/>  
      <View>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.containerText}>
            <Text style = {width > 400 ? styles.text : styles.textMin}>Precio: {price} $ ARG</Text>
            <Text style = {width > 400 ? styles.text : styles.textMin}>Stock: {stock}</Text>
        </View>

      </View>

    </Pressable>
  )
}

export default CardProduct

const styles = StyleSheet.create({
    container:{
      backgroundColor:colors.primary,
      margin:10,
      borderRadius:5,
      padding:10,
      flexDirection:"row",
      gap:10,
      alignItems:"center"
    },
    image:{
        minWidth:50,
        minHeight:50,
        maxHeight:90,
        maxWidth:90,
        width:"15vw",
        height:"15vw",
        backgroundColor:"red"
    },
    title:{
      color:colors.lightGray,
      fontSize:14,
      padding:5
    },
    containerText:{
      flexDirection:"row",
      gap:20,
      padding:10
    },
    text:{
      fontSize:16,
      color:colors.lightGray
    },
    textMin:{
      color:colors.lightGray,
      fontSize:12
    }
})