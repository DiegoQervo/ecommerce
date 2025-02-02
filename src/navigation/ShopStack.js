import Home from '../data/screens/Home'
import ProductsByCategory from '../data/screens/ProductsByCategory';
import ProductDetail from '../data/screens/ProductDetail'
import Header from '../components/Header'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const ShopStack = () => {

    const Stack = createNativeStackNavigator()

  return (
  
            <Stack.Navigator
          screenOptions={({route})=>({
            header: () => {
              
              return <Header title = {
                route.name === "Home" ? "Categorias":
                route.name === "ProductsByCategory" ? route.params.category:
                route.params.product.brand               
              }
              />
            }
          })}>

            <Stack.Screen name='Home' component={Home}/>
            <Stack.Screen name='ProductsByCategory' component={ProductsByCategory}/>
            <Stack.Screen name='ProductDetail' component={ProductDetail}/>
          </Stack.Navigator>
    
  )
}

export default ShopStack

