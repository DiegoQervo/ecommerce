import { StyleSheet, View, Image } from "react-native";
import SubmitButton from "../../components/SubmitButton";
import * as ImagePicker from 'expo-image-picker'
import { usePatchImageProfileMutation } from "../../services/user";
import { useSelector } from "react-redux";
import { useNavigation } from "react-router-dom";


const ImageSelector = async () => {

    const localId = useSelector(state => state.user.localId)
    const [image, setImage] = useState("")
    const [triggerAddImageProfile] = usePatchImageProfileMutation()
    const navigation = useNavigation()
    
    const pickImage = async (method) => {

        const {granted} = await ImagePicker.requestCameraPermissionsAsync()

        if(!granted) return

        const config = {
            aspect:[2,1],
            quality:0.2,
            base64:true,
            allowsEditing:true
        }
        const result = method == "camera" ? 
        await ImagePicker.launchCameraAsync(config) 
        : 
        await ImagePicker.launchImageLibraryAsync(config)


        if(result.canceled) return
        setImage( "data:image/jpg;base64," + result.assets[0].base64)
    }
    
    const confirmImage = () => {
        triggerAddImageProfile({localId, image})
        navigation.navigate("MyProfile")
    }
    return (
        <View>
            <View>
            <Image
                source={image ? {uri:image} : require("../../../assets/profile")} //foto de perfil
                resizeMode="cover"
                style = {styles.image}
                />
                <SubmitButton title = "tomar imagen con camara" onPress = {() => pickImage("Camera")}/>
                <SubmitButton title = "tomar imagen de galeria" onPress = {() => pickImage("Library")}/>
                <SubmitButton title = "confirmar" onPress = {confirmImage}/>
            </View>
        </View>
    )
}

export default ImageSelector