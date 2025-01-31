import { Pressable, StyleSheet} from 'react-native'
import React from 'react'
import ShadowCard from './ShadowCard'
import { UseNavigation } from '@react-navigation/native'



const CardItemCategory = ({item:category}) => {

  const navigation =UseNavigation()


  return (
    <Pressable onPress={()=> {

      navigation.navigate("ProductsByCategory",{category})
      }}>
          <ShadowCard style = {styles.container}>
            <TextPrimary style = {styles.text}>{category}</TextPrimary>
          </ShadowCard>
    </Pressable>

  )
}

export default CardItemCategory

const styles = StyleSheet.create({
    container:{
        backgroundColor:"blue",
        marginHorizontal:15,
        marginVertical:10,
        padding:15,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:7,
        elevation:15
    },
    text:{
        color:"white"

    }
})