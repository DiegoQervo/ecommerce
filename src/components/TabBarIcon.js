import { StyleSheet, Text, View } from 'react-native'
import Entypo from '@expo/vector-icons/Entypo';
import { colors } from '../globals/colors';

const TabBarIcon = ({text,icon}) => {
  return (
    <View style = {styles.container}>
      <Entypo name={icon} size={24} color={colors.lightGray} />
      <Text style = {styles.text}>{text}</Text>
    </View>
  )
}

export default TabBarIcon

const styles = StyleSheet.create({
    container:{
        width:60,
        gap:5,
        alignItems:"center"
    },
    text:{
        color:colors.lightGray
    }
})