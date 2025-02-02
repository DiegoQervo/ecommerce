import { StyleSheet, Text, View, Image} from 'react-native'
import SubmitButton from '../../components/SubmitButton'
import { FlatList } from 'react-native-web'
import { useNavigation } from '@react-navigation/native'
import { useGetUserQuery } from '../../services/user'
import { useSelector } from 'react-redux'







const Myprofile = () => {

    const navigation = useNavigation()
    const localId = useSelector(state => state.user.localId)
    const {data:user, isLoading} = useGetUserQuery({localId})

    if(isLoading) return <View><Text>Cargando...</Text></View>

  return (
    <View style = {styles.container}>
      <Image 
      source = {user?.image ? {uri:user.image}:require("../../../assets/profile.jpg")} 
      resizeMode = 'cover' 
      style = {styles.image}
      /> //imagen de perfil

      <SubmitButton title = "agregar imagen de perfil" onPress = {() => navigation.navigate("ImageSelector")}/>
      <SubmitButton title = "agregar ubicacion" onPress = {() => navigation.navigate("LocationSelector")}/>
        <View>
          <Text>{user?.address}</Text>
        </View>
    </View>
  )
}

export default Myprofile

const styles = StyleSheet.create({
  container:{
    marginTop:70,
    alignItems:"center",
    gap:20
},
image:{
    width:150,
    height:150
}
})