import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { useState } from 'react'
import InputForm from '../../components/InputForm'
import { colors } from '../../globals/colors'
import { useNavigation } from '@react-navigation/native'
import { useSignUPMutation } from '../../services/auth'
import { useDispatch } from 'react-redux'
import { setUser } from '../../features/userSlice'
import { signupSchema } from '../../validation/signupSchema'
import { deleteSesion, insertSession } from '../../config/dbSQL'


const Signup = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [emailError,setEmailError] = useState("")
    const [passwordError,setPasswordError] = useState("")
    const [confirmPasswordError, setConfirmPasswordError] = useState("")
    const navigation = useNavigation()
    const [triggerSignup] = useSignUPMutation()
    const dispatch = useDispatch()

    const onSubmit = async () => {
      try{
        signupSchema.validateSync({email,password});

        const response = await triggerSignup({email,password})
        const user = {
          email:response.data.email,
          idToken:response.data.idToken,
          localId:response.data.localId
        };
        dispatch(setUser(user))
                await deleteSesion()
                await insertSession(user.localId,user.email,user.idToken)
      } catch(error){
        switch(error.path){
          case "email":
            setEmailError(error.message)
            setPasswordError("")
            break
          case "password":
            setPasswordError(error.message)
            setEmailError("")
            break
          case "confirmPassword":
            setConfirmPassword(error.message)
            break
          
        }

      }


    }

  return (
    <View>
        <View>
            <Text>Registrarme</Text>
            <InputForm
            label = "Email"
            value = {email}
            onChangeText={(t) => setEmail(t)}
            isSecure = {false}
            error = {emailError}
            />
            <InputForm
            label = "Password"
            value = {password}
            onChangeText={(t) => setPassword(t)}
            isSecure = {true}
            error = {passwordError}
            />
            <InputForm
            label = "Confirm Password"
            value = {confirmPassword}
            onChangeText={(t) => setConfirmPassword(t)}
            isSecure = {true}
            error = {confirmPasswordError}
            />
            <SubmitButton title = "Send" onPress = {onSubmit}/>
            <Text>Already have an account?</Text>
            <Pressable onPress={() => {navigation.navigate("Login")}}>
                <Text>Login</Text>
            </Pressable>
        </View>
    </View>
  )
}

export default Signup

const styles = StyleSheet.create({})