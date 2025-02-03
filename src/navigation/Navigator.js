
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { colors } from '../globals/colors'
import { StyleSheet } from 'react-native'
import TabNavigator from './TabNavigator'
import { useDispatch, useSelector } from 'react-redux'
import AuthStack from './AuthStack'
import { fetchSession } from '../config/dbSQL'
import { useEffect } from 'react'
import { deleteUser, setUser } from '../features/userSlice'
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
          console.log("sessionUser", sessionUser)
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
      {idToken ? <TabNavigator/>: <AuthStack/>}
    </NavigationContainer>
  )
}

export default Navigator

const styles = StyleSheet.create({
  tabBar:{
    backgroundColor:colors.primary,
    height:70
  }
})