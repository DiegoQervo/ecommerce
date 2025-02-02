import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { colors } from "../globals/colors";


const LoadingSpinner = () => {
    <View style = {styles.container}>
        <ActivityIndicator size={80} color="white"/>
    </View>
}

export default LoadingSpinner;

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:"100%",
        height:"100%",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:colors.accent,
        position:"absolute",
        zIndex:1000,
    }
})