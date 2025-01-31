
import { StatusBar, StyleSheet} from 'react-native';
import { colors } from './src/globals/colors';
import Navigator from './src/navigation/Navigator';
import { useFonts } from 'expo-font';
import { fonts } from './src/globals/fonts';
import {Provider} from 'react-redux' /* no se importo solo */
import {store} from './src/store';






export default function App() {

  const [fontsloaded] = useFonts(fonts)

    if(!fontsloaded){
    return null
  }

  return (
    <>
        <Provider store = {store}>
          <Navigator/>
        </Provider>
        <StatusBar style= "light" backgroundColor={colors.accent}/>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
});
