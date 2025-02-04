import { StyleSheet, Text, View, FlatList } from 'react-native'
import CardOrder from '../../components/CardOrder'
import { useSelector } from 'react-redux'
import { useGetOrderUserQuery } from '../../services/orders'
import LoadingSpinner from '../../components/LoadingSpinner'
import EmptyListComponent from '../../components/EmptyListComponent'



const Orders = () => {

  const localId = useSelector(state => state.user.localId)
  const {data:orders,isLoading} = useGetOrderUserQuery({localId})

  if(isLoading) return <LoadingSpinner/>
  if(!orders) return <EmptyListComponent message = "No hay ordenes"/>

  return (
    <View>
      <FlatList
      data = {orders}
      keyExtractor={item => item.id}
      renderItem={({item})=> <CardOrder order ={item}/>}
      />
    </View>
  )
}

export default Orders

const styles = StyleSheet.create({})