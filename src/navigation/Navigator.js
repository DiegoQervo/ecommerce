import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { StyleSheet } from 'react-native'
import TabNavigation from './TabNavigator'
import { useDispatch, useSelector } from 'react-redux'
import AuthStack from './AuthStack'
import { fetchSession } from '../config/dbSQL'
import { setUser } from '../features/userSlice'
import { deleteUser } from '../features/userSlice'
import { init } from '../config/dbSQL'

const Tab = createBottomTabNavigator();

const Navigator = () => {
    
    const idToken = useSelector(state => state.user.idToken)
    const dispatch = useDispatch()


    useEffect(() => {
      (async()=>{
        try{
          await init()
          dispatch(deleteUser())
          const sessionUser = await fetchSession()
          if(sessionUser){
            dispatch(setUser(sessionUser))
          }

        }catch(error){
          console.log(error)
        }
      })()
    }, [])

  return (
    <NavigationContainer>
      {idToken ? <TabNavigation/>: <AuthStack/>}
    </NavigationContainer>
  )
}

export default Navigator

const styles = StyleSheet.create({
  tabBar:{

  }
})