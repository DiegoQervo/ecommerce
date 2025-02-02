import { StyleSheet, Text, View, TextInput } from 'react-native'
import { colors } from '../globals/colors'

const InputForm = ({label,value,onChangeText,isSecure,error}) => {
  return (
    <View style = {styles.inputContainer}>
        <Text style = {styles.titleInput}>{label}</Text>
        <TextInput value={value} onChangeText={onChangeText} style = {styles.input} secureTextEntry = {isSecure}/>
        {error ? <View><Text style = {styles.error}>{error}</Text></View> : null}
    </View>
  )
}

export default InputForm

const styles = StyleSheet.create({
  inputContainer:{
    width:"100%",
  },
  input:{
    width:"90%",
    borderWidth:0,
    borderBottomWidth:3,
    borderBottomColor:colors.accent,
    padding:2,
    fontFamily:"JosefinSans_400Regular",
    fontSize:14,
    marginHorizontal:"5%",
    marginVertical:10,
    colors:colors.lightGray
  },
  titleInput:{
    fontSize:16,
    width:"90%",
    fontFamily:"JosefinSans_700Bold",
    color:colors.lightGray,
    marginHorizontal:"5%",
  },
  error:{
    color:"red",
    fontSize:12,
    fontFamily:"JosefinSans_400Regular",
    fontStyle:"italic",
    marginLeft:20
  }
})