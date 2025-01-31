import React from 'react'
import ShopStack from './ShopStack'
import CartStack from './CartStack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import OrderStack from './OrderStack'
import { StyleSheet } from 'react-native'
import TabBarIcon from '../components/TabBarIcon'
import Myprofile from '../data/screens/Myprofile'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MyProfileStack from './MyProfileStack'

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    
  return (
    
      <Tab.Navigator
      screenOptions = {{
        headerShown:false,
        tabBarShowLabel:false,
        tabBarStyle: styles.tabBar,
        tabBarLabelPosition:"beside-icon"
      }}>

        <Tab.Screen 

        name='ShopStack' 
        component={ShopStack}
        options={{
          tabBarIcon:({focused}) => <TabBarIcon text="Tienda" icon="shop" focused = {focused}/>
        }}/>

        <Tab.Screen

        name = 'CartStack' 
        component={CartStack}
        options={{
          tabBarIcon:({focused}) => <tabBarIcon text = "Carrito" icon="shopping-cart" focused = {focused}/>
        }}/>

        <Tab.Screen 

        name = 'OrdersStack' 
        component={OrderStack}
        options={{
          tabBarIcon:({focused}) => <tabBarIcon text = "Ordenes" icon = "list" focused = {focused}/>
        }}/>

        <Tab.Screen 

        name = 'MyProfileStack' 
        component={MyProfileStack}
        options={{
          tabBarIcon:({focused}) => <tabBarIcon text = "Perfil" icon = "user" focused = {focused}/>
        }}/>

      </Tab.Navigator>

    
  )
}

export default TabNavigation

const styles = StyleSheet.create({
  tabBar:{

  }
})
