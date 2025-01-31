import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { colors } from '../../globals/colors'
import InputForm from '../../components/InputForm'
import { useNavigation } from '@react-navigation/native'
import { useLoginMutation } from '../../services/auth'
import { useDispatch } from 'react-redux'
import { setUser } from '../../features/userSlice'
import { loginSchema } from '../../validation/loginSchema'
import { deleteSesion, insertSession } from '../../config/dbSQL'


const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const navigation = useNavigation()
    const [triggerLogin] = useLoginMutation()
    const dispatch = useDispatch()

    const onSubmit = async () => {
      try{
        loginSchema.validateSync({email,password})
        const response = await triggerLogin({email,password})
        const user = {
          email:response.data.email,
          idToken:response.data.idToken,
          localId:response.data.localId
        }
        dispatch(setUser(user))
        await deleteSesion()
        await insertSession(user.localId,user.email,user.idToken)
      }catch (error){
        switch(error.path){
          case "email":
            setEmailError(error.message)
            setPasswordError("")
            break
          case "password":
            setPasswordError(error.message)
            setEmailError("")
            break

        }
      }
    }

  return (
    <View>
        <View>
            <Text>Login to start</Text>
            <InputForm
            label = "Email"
            value = {email}
            onChangeText = {(t) => setEmail(t)}
            isSecure = {false}
            error = {emailError}       
            />
            <InputForm
            label = "Password"
            value = {password}
            onChangeText = {(t) => setPassword(t)}
            isSecure = {true}
            error = {passwordError}       
            />
            <SubmitButton onPress = {onSubmit} title = "Ingresar"/> 
            <Text>Not have an account?</Text>
            <Pressable onPress={()=> navigation.navigate("Signup")}>
                <Text>Sign Up</Text>
            </Pressable>
        </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({})