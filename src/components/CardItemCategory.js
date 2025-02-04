import { Pressable, StyleSheet} from 'react-native'
import { colors } from '../globals/colors'
import ShadowCard from './ShadowCard'
import TextPrimary from './TextPrimary'
import { useNavigation } from '@react-navigation/native'



const CardItemCategory = ({item:category}) => {

  const navigation =useNavigation()

  return (
    <Pressable onPress={()=> {
      console.log("categoria seleccionada", category)
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
        backgroundColor:colors.accent,
        marginHorizontal:15,
        marginVertical:10,
        padding:15,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:7,
    },
    text:{
        color:"white"
    }
})