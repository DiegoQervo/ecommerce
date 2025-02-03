
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Signup from '../data/screens/Signup'
import Login from '../data/screens/Login'

const Stack = createNativeStackNavigator()

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions = {{headerShown:false}}>
        <Stack.Screen name = "Login" component={Login}/>
        <Stack.Screen name = "Signup" component={Signup}/>
    </Stack.Navigator>
  )
}

export default AuthStack

