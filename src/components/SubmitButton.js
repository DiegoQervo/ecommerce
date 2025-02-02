import { Pressable, StyleSheet, Text, View } from 'react-native'
import { colors } from '../globals/colors'

const SubmitButton = ({title,onPress}) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style = {styles.text}>{title}</Text>
    </Pressable>
  )
}

export default SubmitButton

const styles = StyleSheet.create({
  button:{
    backgroundColor:colors.accent,
    padding:10,
    borderRadius:10,
    alignItems:"center",
    width:"60%"
  },
  text:{
    color:"white",
    fontSize:16,
    textAlign:"center"
  }
})