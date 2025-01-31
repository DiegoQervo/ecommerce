import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Cart from '../data/screens/Cart'
import Header from '../components/Header'
import ImageSelector from '../data/screens/ImageSelector'
import LocationSelector from '../data/screens/LocationSelector'

const Stack = createNativeStackNavigator()

const MyProfileStack = () => {
  return (
    <Stack.Navigator
    screenOptions={({route})=>({

            header: () => {
          return <Header title = "Perfil"/>
        }
      })}>

        <Stack.Screen name = 'MyProfile' component={MyProfile}/>
        <Stack.Screen name = 'ImageSelector' component={ImageSelector}/>
        <Stack.Screen name = 'LocationSelector' component={LocationSelector}/>
    </Stack.Navigator>
  )
}

export default MyProfileStack

const styles = StyleSheet.create({})