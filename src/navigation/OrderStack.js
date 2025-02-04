import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Orders from "../data/screens/Orders"
import Header from "../components/Header"


const Stack = createNativeStackNavigator()

const OrderStack = () => {
  console.log("rendering orderstack")
  return (
    <Stack.Navigator
    screenOptions={({route})=>({
      header: () => {
        return <Header title = "Ordenes"/>
      }
    })}>
      <Stack.Screen name = 'Orders' component={Orders}/>
    </Stack.Navigator>
  )
}

export default OrderStack

