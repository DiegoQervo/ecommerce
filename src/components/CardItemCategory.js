import { Pressable, StyleSheet} from 'react-native'
import { colors } from '../globals/colors'
import ShadowCard from './ShadowCard'
import TextPrimary from './TextPrimary'
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
        backgroundColor:colors.accent,
        marginHorizontal:15,
        marginVertical:10,
        padding:15,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:7,
    },
    text:{
        color:colors.lightGray
    }
})