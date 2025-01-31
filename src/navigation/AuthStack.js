import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Header from '../components/Header'
import Signup from '../data/screens/Signup'
import Login from '../data/screens/Login'

const Stack = createNativeStackNavigator()

const AuthStack = () => {
  return (
    <Stack.Navigator>
        screenOptions{({route}) =>({
            header: () =>{
                return <Header title={
                    route.name === "Login" ? "Iniciar Sesion":
                    route.name === "Signup" ? "Registrarse":
                    ""
                }
                />
                }
        })}
        <Stack.Screen name = "Login" component={Login}/>
        <Stack.Screen name = "Signup" component={Signup}/>
    </Stack.Navigator>
  )
}

export default AuthStack

const styles = StyleSheet.create({})