import { StyleSheet, View, Button } from 'react-native'
import React from 'react'
import Categories from '../categorias.json'
import Counter from '../../components/Counter'


const Home = () => {
  return (
    <View>
      <Categories/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})